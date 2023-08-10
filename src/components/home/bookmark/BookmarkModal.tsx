import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import type { CommonModalProps } from '@/model/common';
import { useMemo, useState } from 'react';
import type { BookmarkContent } from '@/model/home';

interface BookmarkModalProps extends CommonModalProps {
  onSubmit: (e: any) => any;
  bookmark: BookmarkContent | null;
}

const BookmarkModal = ({ isOpen, onClose, onSubmit, bookmark }: BookmarkModalProps) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const isNew = useMemo(() => bookmark !== null, [bookmark]);

  const createBookmark = (e) => {
    e.preventDefault();
    onSubmit({ name, url });
    onClose();
  };

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
    <form onSubmit={createBookmark}>
      <CommonModal.Body>
        <VStack alignItems={'start'} m={'50px'}>
          <FormLabel>이름</FormLabel>
          <Input value={name}
                 onChange={e => setName(e.target.value)} />
          <FormLabel>URL</FormLabel>
          <Input value={url}
                 onChange={e => setUrl(e.target.value)} />
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

export default BookmarkModal;
