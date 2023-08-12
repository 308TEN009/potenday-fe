import { Box, Button, Flex, Heading, HStack, Image, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { common, myPage } from '@/messages.json';
import addIcon from '@assets/icons/plus-sign-circle.svg';
import ExperienceModal from '@components/myPage/ExperienceModal';
import { useEffect, useState } from 'react';
import type { ExperienceListResponse } from '@/model/mypage';
import MyPageApi from '@/api/MyPageApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import ExperienceItem from '@components/coverLetter/assistant/ExperienceItem';

interface ExpModalInfo {
  isEdit: boolean,
  originExp: null | ExperienceListResponse
}

export const ExperienceContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [experienceList, setExperienceList] = useState<ExperienceListResponse[]>([]);
  const [expModalInfo, setExpModalInfo] = useState<ExpModalInfo>({ isEdit: false, originExp: null });
  useEffect(() => {
    retrieveExperienceList();
  }, []);

  const retrieveExperienceList = () =>
    MyPageApi.retrieveExperienceList()
             .then(setExperienceList)
             .catch(useErrorHandler);

  const onModalOpen = (isEdit: boolean, originExp?: ExperienceListResponse) => {
    setExpModalInfo({
      isEdit,
      originExp: originExp ?? null,
    });

    onOpen();
  };

  const onDelete = (id: string) => {
    MyPageApi.deleteExperience(id)
             .then(retrieveExperienceList)
             .catch(useErrorHandler);
  };

  return <Box>
    <HStack justifyContent={'space-between'}>
      <Box>
        <Heading fontSize={['md', 'lg']}
                 fontWeight={'normal'}>
          {myPage.myExperienceList}
        </Heading>
        <Text fontSize={'sm'}
              color={'lightgrey4.500'}
              whiteSpace={'break-spaces'}>
          {myPage.myExperienceListDesc}
        </Text>
      </Box>
      <Flex justifyContent={'end'} p={5}>
        <Button fontSize={['sm', 'md']}
                colorScheme={'white'}
                bg={'white'}
                color={'darkgrey2.500'}
                p={'20px 25px'}
                border={'1px solid'}
                borderColor={'lightgrey4.500'}
                onClick={() => onModalOpen(false)}>
          <Image src={addIcon} boxSize={['20px', '24px']} mr={['16px', '10px']} />
          {common.add}
        </Button>
      </Flex>
    </HStack>
    {experienceList.length <= 0
      ? <Box p={'20px'}
             justifyContent={'space-between'}
             alignItems={'start'}
             border={'1px solid'}
             borderColor={'lightgrey4.500'}
             borderRadius={'8px'}
             fontSize={'sm'}
             my={'20px'} />
      : <List w={'100%'} maxH={'700px'} overflowY={'scroll'}>
        {experienceList.map(experience =>
          <ListItem key={experience._id}>
            <ExperienceItem onOpen={() => onModalOpen(true, experience)}
                            onDelete={onDelete}
                            experience={experience} />
          </ListItem>)}
      </List>}
    <ExperienceModal {...expModalInfo} isOpen={isOpen} onClose={onClose} callBack={retrieveExperienceList} />
  </Box>
    ;
};

export default ExperienceContainer;
