import CommonModal from '@components/common/modal/CommonModal';
import { Button, Flex, FormLabel, Input, Text, useDisclosure, VStack } from '@chakra-ui/react';
import AddJobPostingButton from '@components/home/coverLetter/addJobPost/AddJobPostingButton';
import type { FormEvent } from 'react';

interface AddJobPostingModalProps {
  onSubmit: (e: any) => any;
  position: 'HOME' | 'DROPDOWN';
}

const AddJobPostingModalButton = ({ onSubmit, position }: AddJobPostingModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitAndClose = (e: FormEvent) => {
    console.log('submit', e.target);
    e.preventDefault();
    onSubmit('');
    onClose();
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
          공고 추가하기
        </Button>
    }

    <CommonModal isOpen={isOpen}
                 onClose={onClose}
                 size={'3xl'}>
      <CommonModal.Header>
        <Text fontSize={'md'}
              mt={'50px'}
              textAlign={'center'}>
          지원할 채용공고 입력하기
        </Text>
        <Text mt={'10px'}
              fontWeight={'normal'}
              fontSize={'sm'}
              textAlign={'center'}>
          기업명, 지원직무만 입력하고 빠르게 자기소개서 작성을 시작해보세요!
        </Text>
      </CommonModal.Header>
      <form onSubmit={e => onSubmitAndClose(e)}>
        <CommonModal.Body>
          <VStack alignItems={'start'} m={'50px'}>
            <FormLabel>기업명</FormLabel>
            <Input />
            <FormLabel>지원 직무</FormLabel>
            <Input />
          </VStack>
        </CommonModal.Body>
        <CommonModal.Footer>
          <Flex justifyContent={'space-around'}
                w={'100%'}
                p={'50px'}
                ml={'10px'}>
            <Button size={'md'} type={'submit'}>입력완료</Button>
            <Button size={'md'} onClick={onClose}>닫기</Button>
          </Flex>
        </CommonModal.Footer>
      </form>
    </CommonModal>
  </>;
};

export default AddJobPostingModalButton;
