import { Button } from '@chakra-ui/react';
import type { BookmarkContent } from '@/model/home';
import { memo } from 'react';

interface BookmarkItemProps {
  bookmark: BookmarkContent;
}

const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {
  const openBookmark = () => {
    window.open(bookmark.url);
  };

  return <Button textAlign={'center'}
                 w={['200px', '263px']}
                 h={['62px']}
                 bg={'white'}
                 boxShadow={'md'}
                 borderRadius={'12px'}
                 p={2}
                 onClick={openBookmark}>
    {bookmark.name}
  </Button>;
};

export default memo(BookmarkItem);
