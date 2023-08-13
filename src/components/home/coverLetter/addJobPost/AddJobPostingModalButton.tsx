import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, Image, Img, Text, useDisclosure, VStack } from '@chakra-ui/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { common, coverLetter, home } from '@/messages.json';
import HomeApi from '@/api/HomeApi';
import FormLabelInput from '@components/common/FormLabelInput';
import useErrorHandler from '@/hooks/useErrorHandler';
import addIcon from '@assets/icons/plus-sign-circle-white.svg';
import AddIcon from '@assets/icons/plus-sign-circle-main.svg';
import MainButton from '@components/common/button/MainButton';

interface AddJobPostingModalProps {
  callBack: () => any;
  position: 'HOME' | 'DROPDOWN';
}

const AddJobPostingModalButton = ({ callBack, position }: AddJobPostingModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [companyName, setCompanyName] = useState('');
  const [applicationJob, setApplicationJob] = useState('');
  const [majorTask, setMajorTask] = useState('');

  const onReset = () => {
    setCompanyName('');
    setApplicationJob('');
    setMajorTask('');
  };

  const onSubmitAndClose = (e: FormEvent) => {
    e.preventDefault();
    const request = {
      companyName,
      applicationJob,
      jobDescription: majorTask,
    };

    HomeApi.createJobPost(request)
           .then(callBack)
           .then(onClose)
           .then(onReset)
           .catch(useErrorHandler);
  };

  const onOpenModal = () => {
    onReset();
    onOpen();
  };

  return <>
    {
      position === 'HOME'
        ? <MainButton onClick={onOpenModal}
                      w={'242px'}
                      h={'62px'}>
          <Image src={addIcon}
                 boxSize={'24px'}
                 mr={'16px'} />
          {home.addJobPost}
        </MainButton>
        : <Button
          onClick={onOpenModal}
          justifyContent={'start'}
          colorScheme={'none'}
          color={'main.500'}
          w={'100%'}
          h={'78px'}
          p={'24px 40px'}>
          <Img src={AddIcon}
               mr={'20px'} />
          {coverLetter.addJobPost}
        </Button>
    }

    <CommonModal isOpen={isOpen}
                 onClose={onClose}
                 w={'980px'}>
      <CommonModal.Header>
        <Text mt={'10px'}
              fontWeight={'normal'}
              fontSize={'ml'}
              textAlign={'center'}>
          {home.addJobPostPopup.title}
        </Text>
        <Text mt={'10px'}
              fontWeight={'thin'}
              fontSize={'sm'}
              color={'lightgrey4.500'}
              textAlign={'center'}>
          {home.addJobPostPopup.subTitle}
        </Text>
      </CommonModal.Header>
      <form onSubmit={e => onSubmitAndClose(e)}>
        <CommonModal.Body>
          <VStack alignItems={'start'} m={'50px'}>
            <FormLabelInput required
                            label={home.addJobPostPopup.companyName}
                            placeholder={home.addJobPostPopup.companyNamePlaceholder}
                            value={companyName}
                            onChange={setCompanyName}
                            inputType={'TEXT'} />
            <FormLabelInput required
                            label={home.addJobPostPopup.duty}
                            placeholder={home.addJobPostPopup.dutyPlaceholder}
                            value={applicationJob}
                            onChange={setApplicationJob}
                            inputType={'TEXT'} />
            <FormLabelInput required
                            label={home.addJobPostPopup.majorTask}
                            placeholder={home.addJobPostPopup.majorTaskPlaceholder}
                            value={majorTask}
                            onChange={setMajorTask}
                            inputType={'TEXTAREA'}
                            isLast={true} />
          </VStack>
        </CommonModal.Body>
        <CommonModal.Footer>
          <Center mb={'32px'} w={'100%'}>
            <Button size={'md'}
                    colorScheme={'main'}
                    type={'submit'}
                    p={'13px 75px'}
                    borderRadius={'20px'}>
              {common.save}
            </Button>
          </Center>
        </CommonModal.Footer>
      </form>
    </CommonModal>
  </>;
};

export default AddJobPostingModalButton;
