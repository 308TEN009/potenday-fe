import CommonModal from '@components/common/modal/CommonModal';
import { Button, Flex, FormLabel, Input, Text, VStack } from '@chakra-ui/react';

const AddJobPostingModal = ({ isOpen, onClose, onSubmit }: any) => {
  return <CommonModal isOpen={isOpen}
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
    <form onSubmit={onSubmit}>
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
          <Button size={'md'} onClose={onClose}>닫기</Button>
        </Flex>
      </CommonModal.Footer>
    </form>
  </CommonModal>;
};

export default AddJobPostingModal;
