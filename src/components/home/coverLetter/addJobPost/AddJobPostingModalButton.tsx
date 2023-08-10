import CommonModal from '@components/common/modal/CommonModal';
import { Button, Flex, Input, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import AddJobPostingButton from '@components/home/coverLetter/addJobPost/AddJobPostingButton';
import type { FormEvent } from 'react';
import { common, home } from '@/messages.json';
import { useState } from 'react';
import HomeApi from '@/api/HomeApi';
import { BASIC_SUCCESS } from '@/model/toast';

interface AddJobPostingModalProps {
  callBack: () => any;
  position: 'HOME' | 'DROPDOWN';
}

const AddJobPostingModalButton = ({ callBack, position }: AddJobPostingModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [companyName, setCompanyName] = useState('');
  const [applicationJob, setApplicationJob] = useState('');
  const toast = useToast();

  const onSubmitAndClose = (e: FormEvent) => {
    e.preventDefault();
    const request = {
      companyName,
      applicationJob,
    };

    HomeApi.createJobPost(request)
           .then(callBack)
           .then(onClose)
           .then(() => toast(BASIC_SUCCESS));
  };

  return <>
    {
      position === 'HOME'
        ? <AddJobPostingButton onClick={onOpen} />
        : <Button w={'100%'}
                  fontSize={'sm'}
                  backgroundColor={'white'}
                  boxShadow={'base'}
                  onClick={onOpen}>
          {home.addJobAnnouncement}
        </Button>
    }

    <CommonModal isOpen={isOpen}
                 onClose={onClose}
                 size={'3xl'}>
      <CommonModal.Header>
        <Text fontSize={'md'}
              mt={'50px'}
              textAlign={'center'}>
          {home.addJobAnnouncementPopup.title}
        </Text>
        <Text mt={'10px'}
              fontWeight={'normal'}
              fontSize={'sm'}
              textAlign={'center'}>
          {home.addJobAnnouncementPopup.subTitle}
        </Text>
      </CommonModal.Header>
      <form onSubmit={e => onSubmitAndClose(e)}>
        <CommonModal.Body>
          <VStack alignItems={'start'} m={'50px'}>
            <Text fontSize={'sm'}>
              {home.addJobAnnouncementPopup.companyName}
            </Text>
            <Input fontSize={'sm'}
                   p={5}
                   value={companyName}
                   onChange={e => setCompanyName(e.target.value)} />
            <Text fontSize={'sm'}>
              {home.addJobAnnouncementPopup.duty}
            </Text>
            <Input fontSize={'sm'}
                   p={5}
                   value={applicationJob}
                   onChange={e => setApplicationJob(e.target.value)} />
          </VStack>
        </CommonModal.Body>
        <CommonModal.Footer>
          <Flex justifyContent={'space-around'}
                w={'100%'}
                p={'50px'}
                ml={'10px'}>
            <Button size={'md'} type={'submit'}>{common.InputCompleted}</Button>
            <Button size={'md'} onClick={onClose}>{common.close}</Button>
          </Flex>
        </CommonModal.Footer>
      </form>
    </CommonModal>
  </>;
};

export default AddJobPostingModalButton;
