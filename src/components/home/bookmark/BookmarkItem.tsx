import { Button, Text } from '@chakra-ui/react';
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
                 w={'263px'}
                 h={['62px']}
                 bg={'white'}
                 boxShadow={'md'}
                 borderRadius={'12px'}
                 p={'16px 24.5px'}
                 onClick={openBookmark}>
    <Text noOfLines={1}
          w={'100%'}
          fontSize={'md'}
          wordBreak={'break-all'}
          whiteSpace={'break-spaces'}
          textOverflow={'ellipsis'}>
      {bookmark.name}
    </Text>
  </Button>;
};

export default memo(BookmarkItem);
