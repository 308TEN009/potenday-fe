import { Box, Button, HStack, Text } from '@chakra-ui/react';
import type { ExperienceListResponse } from '@/model/mypage';
import { myPage } from '@/messages.json';
import EditIcon from '@assets/icons/edit-icon.svg';
import DeleteIcon from '@assets/icons/delete-icon.svg';

interface ExperienceItemProps {
  experience: ExperienceListResponse;
  onOpen: () => any;
  onDelete: (id: string) => any;
}

export const ExperienceItem = ({ experience, onOpen, onDelete }: ExperienceItemProps) => {
  return <HStack p={'23px 40px'}
                 justifyContent={'space-between'}
                 alignItems={'start'}
                 bgColor={'white'}
                 className={'light-shadow'}
                 borderRadius={'8px'}
                 fontSize={'sm'}
                 h={'176px'}
                 mb={'32px'}>
    <Box>
      <HStack key={'subTitle'} mb={17}>
        <Text as={'span'}
              w={'136px'}
              mr={'20px'}
              textAlign={'right'}
              fontSize={'sm'}
              color={'lightgrey4.500'}>
          {myPage.experienceItem.subTitle}
        </Text>
        <Text flex={1}>
          {experience.title}
        </Text>
      </HStack>
      <HStack key={'detail1'} mb={17}>
        <Text as={'span'}
              w={'136px'}
              mr={'20px'}
              textAlign={'right'}
              fontSize={'sm'}
              color={'lightgrey4.500'}>
          {myPage.experienceItem.detail1}
        </Text>
        <Text flex={1}>
          {experience.experienceDetailList[0].content}
        </Text>
      </HStack>
      <HStack key={'detail2'}>
        <Text as={'span'}
              w={'136px'}
              mr={'20px'}
              textAlign={'right'}
              fontSize={'sm'}
              color={'lightgrey4.500'}>
          {myPage.experienceItem.detail2}
        </Text>
        <Text flex={1}>
          {experience.experienceDetailList[1].content}
        </Text>
      </HStack>
    </Box>
    <Box justifyContent={'end'}>
      <Button colorScheme={'none'}
              backgroundImage={`url(${EditIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'80%'}
              backgroundRepeat={'no-repeat'}
              onClick={onOpen}
              boxSize={'24px'}
              mr={'40px'} />
      <Button colorScheme={'none'}
              backgroundImage={`url(${DeleteIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'80%'}
              backgroundRepeat={'no-repeat'}
              onClick={() => onDelete(experience._id)}
              boxSize={'24px'}
              mr={'40px'} />
    </Box>
  </HStack>;
};

export default ExperienceItem;
