import { Button, Text } from '@chakra-ui/react';
import type { BookmarkContent } from '@/model/home';
import { memo } from 'react';
import { CommonOutlineStyle } from '@/styles/commonStyles';

interface BookmarkItemProps {
  bookmark: BookmarkContent;
}

const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {

  const openBookmark = () => {
    window.open(bookmark.url);
  };

  return <Button boxShadow='md'
                 borderRadius={'base'}
                 textAlign={'center'}
                 w={'190px'}
                 h={'40px'}
                 p={2}
                 colorScheme={'white'}
                 onClick={openBookmark}
                 {...CommonOutlineStyle}>
    {bookmark.name}
  </Button>;
};

export default memo(BookmarkItem);
