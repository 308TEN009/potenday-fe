import { Button, Image } from '@chakra-ui/react';
import addIcon from '@assets/icons/plus-sign-circle-white.svg';
import { home } from '@/messages.json';

interface AddJobPostingButtonProps {
  onClick: () => void;
}

const AddJobPostingButton = ({ onClick }: AddJobPostingButtonProps) => {
  return <Button fontSize={['sm', 'md']}
                 h={'100%'}
                 colorScheme={'main'}
                 color={'white'}
                 onClick={onClick}
                 boxSizing={'border-box'}
                 p={'19px 32px'}>
    <Image src={addIcon} boxSize={'24px'} mr={'10px'} />
    {home.addJobPost}
  </Button>;
};

export default AddJobPostingButton;
