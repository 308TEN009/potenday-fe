import { Box, Button, Image, Text } from '@chakra-ui/react';
import type { BookmarkContent } from '@/model/home';
import EditIcon from '@assets/icons/edit-02.svg';

interface BookmarkItemProps {
  bookmark: BookmarkContent;
  onOpenEditModal: any;
  isEdit: boolean;
}

const BookmarkItem = ({ isEdit, onOpenEditModal, bookmark }: BookmarkItemProps) => {
  const openBookmark = () => {
    if (isEdit) return;
    window.open(bookmark.url);
  };

  return <Button textAlign={'center'}
                 w={'263px'}
                 h={['62px']}
                 bg={'white'}
                 border={'2px solid'}
                 borderColor={'lightgrey2.500'}
                 borderRadius={'12px'}
                 p={'16px 24.5px'}
                 colorScheme={'none'}
                 onClick={openBookmark}>
    {isEdit &&
      <Box onClick={() => onOpenEditModal(bookmark)}>
        <Image src={EditIcon} boxSize={'30px'} />
      </Box>}
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

export default BookmarkItem;
