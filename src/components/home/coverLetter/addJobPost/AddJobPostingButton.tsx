import { Button, Image } from '@chakra-ui/react';
import addIcon from '@assets/plus-sign-circle.png';
import { home } from '@/messages.json';
import { CommonOutlineStyle } from '@/styles/commonStyles';

interface AddJobPostingButtonProps {
  onClick: () => void;
}

const AddJobPostingButton = ({ onClick }: AddJobPostingButtonProps) => {
  return <Button w={'246px'}
                 h={'62px'}
                 colorScheme={'white'}
                 {...CommonOutlineStyle}
                 onClick={onClick}>
    <Image src={addIcon} w={'24px'} h={'24px'} mr={'16px'} />
    {home.addJobAnnouncement}
  </Button>;
};

export default AddJobPostingButton;
