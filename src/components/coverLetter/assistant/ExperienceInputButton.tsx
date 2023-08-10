import { Button, ListItem } from '@chakra-ui/react';

interface ExperienceItemProps {
  onClick: () => void;
}

const ExperienceInputButton = ({ onClick }: ExperienceItemProps) => {
  return <ListItem p={'2px 10px'} onClick={onClick}>
    <Button width={'100%'}
            fontSize={'sm'}
            fontWeight={'normal'}>
      자기소개서에 사용할 경험을 선택해주세요.
    </Button>
  </ListItem>;
};

export default ExperienceInputButton;
