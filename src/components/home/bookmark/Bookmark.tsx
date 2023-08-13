import { Box, Button, Center, Flex, HStack, Image, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import BookmarkItem from '@components/home/bookmark/BookmarkItem';
import BookmarkModal from '@components/home/bookmark/BookmarkModal';
import { useEffect, useState } from 'react';
import type { BookmarkContent } from '@/model/home';
import HomeApi from '@/api/HomeApi';
import { home } from '@/messages.json';
import EditIcon from '@assets/icons/edit-02.svg';
import CheckIcon from '@assets/icons/checkmark-circle-grey.svg';
import AddIcon from '@assets/icons/add-shadow.svg';

const Bookmark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookmarkList, setBookmarkList] = useState<BookmarkContent[]>([]);
  const [bookmark, setBookmark] = useState<BookmarkContent | null>(null);
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [edit, onEditMode] = useState<boolean>(false);
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

  const onSubmit = (request: BookmarkContent, isEdit?: boolean) => {
    if (isEdit && bookmark?._id) {
      HomeApi.updateBookmark(bookmark?._id, request)
             .then(onClose)
             .then(retrieveBookMarkList);
      return;
    }
    HomeApi.createBookmark(request)
           .then(onClose)
           .then(retrieveBookMarkList);
  };
  return <Box w={['420px', '605px']} pl={isMobile ? 0 : '50px'} mb={'20px'}>
    <HStack justifyContent={'space-between'} mb={'32px'}>
      <Text fontSize={'md'}>
        {home.bookmark.title}
      </Text>
      <Button size={'sm'}
              colorScheme={'white'}
              onClick={() => onEditMode(!edit)}>
        <Image src={edit ? CheckIcon : EditIcon} boxSize={'30px'} />
      </Button>
    </HStack>
    <Flex justifyContent={['center', 'start']}
          gap={'2'}
          flexWrap={'wrap'}
          w={'100%'}>
      {bookmarkList.map((bookmark) =>
        <BookmarkItem key={bookmark._id}
                      isEdit={edit}
                      onOpenEditModal={openCreateBookmarkModal}
                      bookmark={bookmark} />,
      )}
    </Flex>
    <Center pr={'21px'}>
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
