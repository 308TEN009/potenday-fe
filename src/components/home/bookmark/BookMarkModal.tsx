import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import type { CommonModalProps } from '@/model/common';

interface BookMarkModalProps extends CommonModalProps {
  isNew: boolean;
  bookmarkKey?: string;
  onSubmit: (e: any) => any;
}

const BookMarkModal = ({ isOpen, onClose, isNew, onSubmit, bookmarkKey }: BookMarkModalProps) => {
  return <CommonModal isOpen={isOpen} onClose={onClose} size={'xl'}>
    <CommonModal.Header>
      <Text fontSize={'md'}
            mt={'20px'}>
        즐겨찾기 {isNew ? '추가' : '수정'}
      </Text>
      <Text mt={'10px'}
            fontWeight={'normal'}
            fontSize={'sm'}>
        관심기업 채용사이트를 즐겨찾기해보세요.<br />
        (최대 5개까지 가능합니다)
      </Text>
    </CommonModal.Header>
    <form onSubmit={onSubmit}>
      <CommonModal.Body>
        <VStack alignItems={'start'} m={'50px'}>
          <FormLabel>이름</FormLabel>
          <Input />
          <FormLabel>URL</FormLabel>
          <Input />
        </VStack>
      </CommonModal.Body>
      <CommonModal.Footer>
         <Center w={'100%'} mb={'20px'}>
           <Button size={'md'} type={'submit'}>추가하기</Button>
         </Center>
      </CommonModal.Footer>
    </form>
  </CommonModal>;
};

export default BookMarkModal;
