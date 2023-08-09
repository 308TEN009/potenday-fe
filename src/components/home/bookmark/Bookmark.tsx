import { Button, Card, CardBody, CardHeader, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import BookmarkItem from '@components/home/bookmark/BookmarkItem';
import BookmarkModal from '@components/home/bookmark/BookmarkModal';
import { useEffect, useState } from 'react';
import type { BookmarkContent } from '@/model/home';

const Bookmark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState<boolean>(false);
  const [bookmarkList, setBookmarkList] = useState<BookmarkContent[]>([]);

  useEffect(() => {
    // setBookmarkList()
  }, []);

  const addBookmark = () => {
    setIsNew(true);
    onOpen();
  };

  const editBookmark = () => {
    setIsNew(false);
    onOpen();
  };

  const onSubmit = () => {

  };
  return <Card w={'500px'} h={'280px'}>
    <CardHeader>
      <HStack justifyContent={'space-between'}>
        <Text>
          즐겨찾기
        </Text>
        <Button size={'sm'} onClick={editBookmark}>
          수정
        </Button>
      </HStack>
    </CardHeader>
    <CardBody>
      <Flex justifyContent={'center'}
            flexWrap={'wrap'}
            gap={5}>
        {bookmarkList.map((bookmark) =>
          <BookmarkItem {...bookmark} />,
        )}
        <Button boxShadow='md'
                borderRadius={'base'}
                textAlign={'center'}
                w={'190px'}
                h={'40px'}
                onClick={addBookmark}>
          +
        </Button>
      </Flex>
    </CardBody>
    <BookmarkModal isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={onSubmit}
                   isNew={isNew} />
  </Card>;
};

export default Bookmark;
