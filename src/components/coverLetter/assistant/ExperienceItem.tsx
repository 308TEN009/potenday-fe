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

  // const onDelete = () => {
  //
  // };
  return <HStack p={'20px'}
                 justifyContent={'space-between'}
                 alignItems={'start'}
                 border={'1px solid'}
                 borderColor={'lightgrey4.500'}
                 borderRadius={'8px'}
                 fontSize={'sm'}
                 my={'20px'}>
    <Box m={'20px'}>
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
    </Box>
    <Box justifyContent={'end'}
         mr={'20px'}>
      <Button colorScheme={'none'}
              backgroundImage={`url(${EditIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'50% auto'}
              backgroundRepeat={'no-repeat'}
              onClick={onOpen}
              w={'10px'} />
      <Button colorScheme={'none'}
              backgroundImage={`url(${DeleteIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'50% auto'}
              backgroundRepeat={'no-repeat'}
              onClick={() => onDelete(experience._id)}
              w={'10px'} />
    </Box>
  </HStack>;
};

export default ExperienceItem;
