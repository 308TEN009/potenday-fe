import { Box } from '@chakra-ui/react';
import type { BookmarkContent } from '@/model/home';

interface BookmarkItemProps {
  bookmark: BookmarkContent;
}

const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {
  return <Box boxShadow='md'
              borderRadius={'base'}
              textAlign={'center'}
              w={'190px'}
              h={'40px'}
              p={2}>
    a
  </Box>;
};

export default BookmarkItem;
