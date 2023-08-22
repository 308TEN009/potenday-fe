import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, Text, VStack } from '@chakra-ui/react';
import type { CommonModalProps } from '@/model/common';
import { useEffect, useMemo, useState } from 'react';
import type { BookmarkContent } from '@/model/home';
import FormLabelInput from '@components/common/FormLabelInput';
import { common, home } from '@/messages.json';

interface BookmarkModalProps extends CommonModalProps {
  onSubmit: (...e: any) => any;
  bookmark: BookmarkContent | null;
}

const BookmarkModal = ({ isOpen, onClose, onSubmit, bookmark }: BookmarkModalProps) => {
  const [name, setName] = useState(bookmark?.name ?? '');
  const [url, setUrl] = useState(bookmark?.url ?? '');
  const isNew = useMemo(() => bookmark === null, [bookmark]);

  useEffect(() => {
    setName(bookmark?.name ?? '');
    setUrl(bookmark?.url ?? '');
  }, [bookmark]);

  const createBookmark = (e) => {
    e.preventDefault();
    onSubmit({ name, url }, !isNew);
    onClose();
  };

  return <CommonModal isOpen={isOpen}
                      onClose={onClose}
                      w={'980px'}
                      h={'563px'}>
    <CommonModal.Header>
      <Center p={'0 72px'} flexDir={'column'} textAlign={'center'}>
        <Text fontSize={'md'}
              fontWeight={'normal'}>
          {isNew ? home.bookmark.addBookmark : home.bookmark.editBookmark}
        </Text>
        <Text mt={'16px'}
              fontWeight={'normal'}
              color={'lightgrey4.500'}
              fontSize={'sm'}>
          {home.bookmark.description?.split('\n').map((msg, i) => <span key={i}>{msg}<br /></span>)}
        </Text>
      </Center>
    </CommonModal.Header>
    <form onSubmit={createBookmark}>
      <CommonModal.Body>
        <VStack alignItems={'start'} p={'0 72px'} mt={'40px'}>
          <FormLabelInput required
                          label={home.bookmark.name}
                          placeholder={home.bookmark.namePlaceholder}
                          value={name}
                          onChange={setName}
                          gap={'32px'}
                          inputType={'TEXT'} />
          <FormLabelInput required
                          label={home.bookmark.url}
                          placeholder={home.bookmark.urlPlaceholder}
                          value={url}
                          onChange={setUrl}
                          isLast
                          inputType={'TEXT'} />
        </VStack>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Center w={'100%'} mt={'52px'}>
          <Button size={'md'}
                  w={'196px'}
                  h={'56px'}
                  fontWeight={'normal'}
                  borderRadius={'30px'}
                  colorScheme={'main'}
                  type={'submit'}>
            {isNew ? common.add : common.edit}
          </Button>
        </Center>
      </CommonModal.Footer>
    </form>
  </CommonModal>
    ;
};

export default BookmarkModal;
