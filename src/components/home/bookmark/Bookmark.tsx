import { Box, Button, Center, Flex, HStack, Image, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import BookmarkItem from '@components/home/bookmark/BookmarkItem';
import BookmarkModal from '@components/home/bookmark/BookmarkModal';
import { useEffect, useState } from 'react';
import type { BookmarkContent } from '@/model/home';
import HomeApi from '@/api/HomeApi';
import { home } from '@/messages.json';
import EditIcon from '@assets/icons/edit-02.svg';
import AddIcon from '@assets/icons/plus-sign-circle.svg';

const Bookmark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookmarkList, setBookmarkList] = useState<BookmarkContent[]>([]);
  const [bookmark, setBookmark] = useState<BookmarkContent | null>(null);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    retrieveBookMarkList();
  }, []);

  const retrieveBookMarkList = () => {
    HomeApi.retrieveBookmarkList()
           .then((res) => {
             setBookmarkList(res);
           });
  };

  const openCreateBookmarkModal = (selectedBookmark?: BookmarkContent) => {
    setBookmark(selectedBookmark ?? null);
    onOpen();
  };

  const onSubmit = (request: BookmarkContent) => {
    HomeApi.createBookmark(request)
           .then(onClose)
           .then(retrieveBookMarkList);
  };
  return <Box w={['420px', '605px']} pl={isMobile ? 0 : '50px'}>
    <HStack justifyContent={'space-between'} mb={'32px'}>
      <Text>
        {home.bookmark.title}
      </Text>
      <Button size={'sm'}
              colorScheme={'white'}
              onClick={() => openCreateBookmarkModal()}>
        <Image src={EditIcon} boxSize={'30px'} />
      </Button>
    </HStack>
    <Flex justifyContent={'start'}
          gap={'2'}
          w={'100%'}
          h={'100%'}>
      {bookmarkList.map((bookmark) =>
        <BookmarkItem key={bookmark._id} bookmark={bookmark} />,
      )}
    </Flex>
    <Center>
      <Button mt={'31px'}
              colorScheme={'white'}
              onClick={() => openCreateBookmarkModal()}>
        <Image src={AddIcon} boxSize={'30px'} />
      </Button>
    </Center>
    <BookmarkModal isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={onSubmit}
                   bookmark={bookmark} />
  </Box>;
};

export default Bookmark;
