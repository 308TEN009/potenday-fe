import { Box, HStack, Text } from '@chakra-ui/react';
import type { ExperienceListResponse } from '@/model/mypage';
import { myPage } from '@/messages.json';

interface ExperienceItemProps {
  experience: ExperienceListResponse;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return <Box p={'40px'}
              border={'1px solid'}
              borderColor={'lightgrey4.500'}
              borderRadius={'8px'}
              fontSize={'sm'}
              my={'20px'}>
    <HStack key={'subTitle'} mb={3}>
      <Text as={'span'}
            w={'80px'}
            mr={'20px'}
            textAlign={'right'}
            fontSize={'xs'}
            color={'lightgrey4.500'}>
        {myPage.experienceItem.subTitle}
      </Text>
      <Text flex={1}>
        {experience.title}
      </Text>
    </HStack>
    <HStack key={'detail1'} mb={3}>
      <Text as={'span'}
            w={'80px'}
            mr={'20px'}
            textAlign={'right'}
            fontSize={'xs'}
            color={'lightgrey4.500'}>
        {myPage.experienceItem.detail1}
      </Text>
      <Text flex={1}>
        {experience.experienceDetailList[0].content}
      </Text>
    </HStack>
    <HStack key={'detail2'}>
      <Text as={'span'}
            w={'80px'}
            mr={'20px'}
            textAlign={'right'}
            fontSize={'xs'}
            color={'lightgrey4.500'}>
        {myPage.experienceItem.detail2}
      </Text>
      <Text flex={1}>
        {experience.experienceDetailList[1].content}
      </Text>
    </HStack>
  </Box>;
};

export default ExperienceItem;
