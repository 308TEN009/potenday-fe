import CommonModal from '@components/common/modal/CommonModal';
import ExperienceInputButton from '@components/coverLetter/assistant/ExperienceInputButton';
import { Button, Center, Link as ChakraLink, List, Text, useDisclosure } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { coverLetter } from '@/messages.json';
import MyPageApi from '@/api/MyPageApi';
import { useEffect, useState } from 'react';
import type { ExperienceListResponse } from '@/model/mypage';
import useErrorHandler from '@/hooks/useErrorHandler';
import CheckExperienceItem from '@components/coverLetter/form/CheckExperienceItem';
import { useRecoilState } from 'recoil';
import selectedExpListStore from '@/store/selectedExpListStore';

export const SelectExperienceModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [retrieveList, setRetrieveList] = useState<ExperienceListResponse[]>([]);
  const [{ currentSelected, originSelected }, setCheckedExpItem] = useRecoilState(selectedExpListStore);

  useEffect(() => {
    retrieveExperience();
    setCheckedExpItem(prev => ({
      ...prev,
      currentSelected: originSelected,
    }));
  }, [isOpen]);

  const retrieveExperience = () => {
    MyPageApi.retrieveExperienceList()
             .then(setRetrieveList)
             .catch(useErrorHandler);
  };

  const onCloseModal = () => {
    setCheckedExpItem({
      currentSelected: [],
      originSelected: currentSelected,
    });
    onClose();
  };
  return <>
    <List onClick={onOpen}>
      <ExperienceInputButton experience={currentSelected[0] ?? null} />
      <ExperienceInputButton experience={currentSelected[1] ?? null} />
      <ExperienceInputButton experience={currentSelected[2] ?? null} />
    </List>
    <CommonModal isOpen={isOpen} onClose={onClose} w={'800px'}>
      <CommonModal.Header>
        <Text textAlign={'center'}
              fontSize={'ml'}
              fontWeight={'normal'}>
          {coverLetter.selectExp.title}
        </Text>
        <Text fontWeight={'thin'}
              textAlign={'center'}
              fontSize={'sm'}>
          {coverLetter.selectExp.description}
        </Text>
      </CommonModal.Header>
      <CommonModal.Body>
        <List h={'444px'} overflowY={'auto'} m={'0 56px'}>
          {retrieveList.map((experience) =>
            <CheckExperienceItem key={experience._id}
                                 experience={experience} />)}
        </List>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Center w={'100%'} mb={'20px'} flexDirection={'column'}>
          <Button colorScheme={'main'}
                  p={'13px 51px'}
                  boxSizing={'initial'}
                  fontSize={'md'}
                  fontWeight={'normal'}
                  borderRadius={'40px'}
                  onClick={onCloseModal}>
            {coverLetter.selectExp.completeSelect}
          </Button>
          <ChakraLink as={ReactRouterLink as any}
                      textDecor={'underline'}
                      size={'sm'}
                      mt={'16px'}
                      color={'lightgrey4.500'}
                      to={'/my-page'}>
            {coverLetter.selectExp.gotoMypage}
          </ChakraLink>
        </Center>
      </CommonModal.Footer>
    </CommonModal>
  </>;
};

export default SelectExperienceModalButton;
