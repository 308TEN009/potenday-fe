import { Button, ListItem, Text } from '@chakra-ui/react';
import type { ExperienceListResponse } from '@/model/mypage';

interface ExperienceItemProps {
  experience: ExperienceListResponse | null;
}

const ExperienceInputButton = ({ experience }: ExperienceItemProps) => {
  return <ListItem>
    <Button fontSize={'sm'}
            fontWeight={'normal'}
            colorScheme={'none'}
            border={'1px solid'}
            color={experience ? 'sub1.500' : 'lightgrey2.500'}
            bgColor={experience ? '#6C74CD22' : 'white'}
            borderRadius={'8px'}
            boxSizing={'border-box'}
            w={'430px'}
            h={'65px'}
            p={'16px 28px'}
            mb={'16px'}>
      <Text noOfLines={1}
            color={experience ? 'sub1.500' : 'lightgrey2.500'}
            w={'100%'}
            fontSize={'md'}
            wordBreak={'break-all'}
            whiteSpace={'break-spaces'}
            textOverflow={'ellipsis'}>
        {experience ? experience.title : '+'}
      </Text>
    </Button>
  </ListItem>;
};

export default ExperienceInputButton;
