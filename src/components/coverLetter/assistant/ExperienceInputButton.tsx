import { Button, ListItem } from '@chakra-ui/react';

interface ExperienceItemProps {
  onClick: () => void;
}

const ExperienceInputButton = ({ onClick }: ExperienceItemProps) => {
  return <ListItem onClick={onClick}>
    <Button fontSize={'sm'}
            fontWeight={'normal'}
            colorScheme={'none'}
            color={'lightgrey2.500'}
            border={'1px solid'}
            borderColor={'lightgrey2.500'}
            borderRadius={'8px'}
            boxSizing={'content-box'}
            p={'16px 28px'}
            mb={'16px'}>
      자기소개서에 사용할 경험을 선택해주세요.
    </Button>
  </ListItem>;
};

export default ExperienceInputButton;
