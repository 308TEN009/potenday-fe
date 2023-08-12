import { Box, Flex, HStack, Image, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { common, myPage } from '@/messages.json';
import ExperienceModal from '@components/myPage/ExperienceModal';
import { useEffect, useState } from 'react';
import type { ExperienceListResponse } from '@/model/mypage';
import MyPageApi from '@/api/MyPageApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import ExperienceItem from '@components/coverLetter/assistant/ExperienceItem';
import MainButton from '@components/common/button/MainButton';
import addIcon from '@assets/icons/plus-sign-circle-white.svg';

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
      <Box mb={'40px'}>
        <Text fontSize={['md', 'lg']}
              fontWeight={'normal'}>
          {myPage.myExperienceList}
        </Text>
        <Text fontSize={'sm'}
              mt={'16px'}
              color={'lightgrey4.500'}
              whiteSpace={'break-spaces'}>
          {myPage.myExperienceListDesc}
        </Text>
      </Box>
      <Flex justifyContent={'end'}>
        <MainButton
          w={'193px'}
          h={'62px'}
          onClick={() => onModalOpen(false)}>
          <Image src={addIcon}
                 boxSize={'24px'}
                 mr={'16px'} />
          {common.add}
        </MainButton>
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
      : <List w={'100%'}>
        {experienceList.map(experience =>
          <ListItem key={experience._id}>
            <ExperienceItem onOpen={() => onModalOpen(true, experience)}
                            onDelete={onDelete}
                            experience={experience} />
          </ListItem>)}
      </List>}
    <ExperienceModal {...expModalInfo} isOpen={isOpen} onClose={onClose} callBack={retrieveExperienceList} />
  </Box>;
};

export default ExperienceContainer;
