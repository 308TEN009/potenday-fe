import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, Text, VStack } from '@chakra-ui/react';
import type { CommonModalProps } from '@/model/common';
import { useMemo, useState } from 'react';
import type { BookmarkContent } from '@/model/home';
import FormLabelInput from '@components/common/FormLabelInput';
import { home } from '@/messages.json';

interface BookmarkModalProps extends CommonModalProps {
  onSubmit: (e: any) => any;
  bookmark: BookmarkContent | null;
}

const BookmarkModal = ({ isOpen, onClose, onSubmit, bookmark }: BookmarkModalProps) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const isNew = useMemo(() => bookmark === null, [bookmark]);

  const createBookmark = (e) => {
    e.preventDefault();
    onSubmit({ name, url });
    onClose();
  };

  return <CommonModal isOpen={isOpen} onClose={onClose} w={'600px'}>
    <CommonModal.Header>
      <Text fontSize={'md'}
            fontWeight={'normal'}
            mt={'20px'}>
        {isNew ? home.bookmark.addBookmark : home.bookmark.editBookmark}
      </Text>
      <Text mt={'10px'}
            fontWeight={'normal'}
            fontSize={'sm'}>
        {home.bookmark.description?.split('\n').map(msg => <>{msg}<br /></>)}
      </Text>
    </CommonModal.Header>
    <form onSubmit={createBookmark}>
      <CommonModal.Body>
        <VStack alignItems={'start'} m={'30px'}>
          <FormLabelInput required
                          label={home.bookmark.name}
                          value={name}
                          onChange={setName}
                          inputType={'TEXT'} />
          <FormLabelInput required
                          label={home.bookmark.url}
                          value={url}
                          onChange={setUrl}
                          inputType={'TEXT'} />
        </VStack>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Center w={'100%'} mb={'20px'}>
          <Button size={'md'}
                  borderRadius={'30px'}
                  colorScheme={'main'}
                  type={'submit'}>추가하기</Button>
        </Center>
      </CommonModal.Footer>
    </form>
  </CommonModal>
    ;
};

export default BookmarkModal;
