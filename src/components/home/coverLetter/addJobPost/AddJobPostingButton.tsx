import { Button, Image } from '@chakra-ui/react';
import addIcon from '@assets/icons/plus-sign-circle-white.svg';
import { home } from '@/messages.json';

interface AddJobPostingButtonProps {
  onClick: () => void;
}

const AddJobPostingButton = ({ onClick }: AddJobPostingButtonProps) => {
  return <Button fontSize={['sm', 'md']}
                 colorScheme={'main'}
                 color={'white'}
                 onClick={onClick}
                 p={'32px 19px'}>
    <Image src={addIcon} boxSize={['20px', '24px']} mr={['16px', '10px']} />
    {home.addJobAnnouncement}
  </Button>;
};

export default AddJobPostingButton;
