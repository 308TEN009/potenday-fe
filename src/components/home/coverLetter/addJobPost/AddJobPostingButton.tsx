import { Button } from '@chakra-ui/react';

interface AddJobPostingButtonProps {
  onClick: () => void;
}

const AddJobPostingButton = ({ onClick }: AddJobPostingButtonProps) => {
  return <Button w={'100%'}
                 h={'84px'}
                 size={'md'}
                 mb={'15px'}
                 fontWeight={'normal'} onClick={onClick}>
    지원공고 추가하기
  </Button>;
};

export default AddJobPostingButton;
