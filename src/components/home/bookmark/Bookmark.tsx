import { Button, Card, CardBody, CardHeader, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import BookmarkItem from '@components/home/bookmark/BookmarkItem';
import BookmarkModal from '@components/home/bookmark/BookmarkModal';
import { useEffect, useState } from 'react';
import type { BookmarkContent } from '@/model/home';
import HomeApi from '@/api/HomeApi';

const Bookmark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookmarkList, setBookmarkList] = useState<BookmarkContent[]>([]);
  const [bookmark, setBookmark] = useState<BookmarkContent | null>();

  useEffect(() => {
    retrieveBookMarkList();
  }, []);

  const retrieveBookMarkList = () => {
    HomeApi.retrieveBookmarkList()
           .then((res) => {
             setBookmarkList(res);
           });
  };

  const openCreateBookmarkModal = (isNew: boolean, selectedBookmark?: BookmarkContent) => {
    setBookmark(selectedBookmark);
    onOpen();
  };

  const onSubmit = (request: BookmarkContent) => {
    HomeApi.createBookmark(request)
           .then(onClose)
           .then(retrieveBookMarkList);
  };
  return <Card w={'500px'} h={'280px'}>
    <CardHeader>
      <HStack justifyContent={'space-between'}>
        <Text>
          즐겨찾기
        </Text>
        <Button size={'sm'} onClick={() => openCreateBookmarkModal(false)}>
          수정
        </Button>
      </HStack>
    </CardHeader>
    <CardBody>
      <Flex justifyContent={'center'}
            flexWrap={'wrap'}
            gap={5}>
        {bookmarkList.map((bookmark) =>
          <BookmarkItem key={bookmark._id} bookmark={bookmark} />,
        )}
        <Button boxShadow='md'
                borderRadius={'base'}
                textAlign={'center'}
                w={'190px'}
                h={'40px'}
                onClick={() => openCreateBookmarkModal(true)}>
          +
        </Button>
      </Flex>
    </CardBody>
    <BookmarkModal isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={onSubmit}
                   bookmark={bookmark} />
  </Card>;
};

export default Bookmark;
