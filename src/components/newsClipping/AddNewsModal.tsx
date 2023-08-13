import CommonModal from '@components/common/modal/CommonModal';
import type { CommonModalProps } from '@/model/common';
import type { NewsRequest, NewsContents } from '@/model/newsClipping';
import { Box, Button, Text } from '@chakra-ui/react';
import { newsClipping } from '@/messages.json';
import { useEffect, useMemo, useReducer } from 'react';
import FormLabelInput from '@components/common/FormLabelInput';

interface AddNewsModalProps extends CommonModalProps {
  newsData: NewsContents | null;
  onSubmit: (...e: any) => any;
}

const initialState: NewsRequest = {
  companyName: '',
  title: '',
  content: '',
  url: '',
};
const reducer = (state: NewsRequest, action: any) => {
  switch (action.type) {
    case 'COM_NAME':
      return { ...state, companyName: action.value };
    case 'NEWS_TITLE':
      return { ...state, title: action.value };
    case 'MEMO':
      return { ...state, content: action.value };
    case 'LINK':
      return { ...state, url: action.value };
    case 'ALL':
      return action.value;
    default:
      return state;
  }
};

const init = () => {
  return {};
};

const AddNewsModal = ({ isOpen, onClose, newsData, onSubmit }: AddNewsModalProps) => {
  const isNew = useMemo(() => newsData === null, [newsData]);
  const [newData, dispatch] = useReducer<any, NewsRequest>(reducer, initialState, init);

  const updateData = (type: string, value: string) => {
    // @ts-ignore
    dispatch({ type, value });
  };

  useEffect(() => {
    if (newsData) {  // @ts-ignore
      dispatch({
        type: 'ALL',
        value: newsData,
      });
    }
  }, [newsData]);

  const onCreateNews = (e) => {
    e.preventDefault();
    onSubmit(newData);
  };

  return <CommonModal isOpen={isOpen}
                      onClose={onClose}
                      w={'980px'}
                      h={'815'}>
    <CommonModal.Header>
      <Text mt={'8px'}
            fontWeight={'normal'}
            fontSize={'ml'}
            textAlign={'center'}>
        {isNew ? newsClipping.modal.addTitle : newsClipping.modal.editTitle}
      </Text>
      <Text mt={'16px'}
            fontWeight={'thin'}
            fontSize={'sm'}
            color={'lightgrey4.500'}
            textAlign={'center'}>
        {isNew ? newsClipping.modal.addSubTitle : newsClipping.modal.EditSubTitle}
      </Text>
    </CommonModal.Header>
    <form onSubmit={onCreateNews}>
      <CommonModal.Body>
        <Box m={'40px 80px 0 80px'}>
          <FormLabelInput label={newsClipping.tableHeader.companyName}
                          placeholder={newsClipping.modal.companyNamePlaceHolder}
                          value={(newData as NewsRequest).companyName}
                          onChange={value => updateData('COM_NAME', value)}
                          inputType={'TEXT'} gap={'32px'} />
          <FormLabelInput label={newsClipping.tableHeader.articleTitle}
                          placeholder={newsClipping.modal.articleTitlePlaceHolder}
                          value={(newData as NewsRequest).title}
                          onChange={value => updateData('NEWS_TITLE', value)}
                          inputType={'TEXT'} gap={'32px'} />
          <FormLabelInput label={newsClipping.tableHeader.memo}
                          placeholder={newsClipping.modal.memoPlaceHolder}
                          value={(newData as NewsRequest).content}
                          onChange={value => updateData('MEMO', value)}
                          inputType={'TEXT'} gap={'32px'} />
          <FormLabelInput label={newsClipping.tableHeader.link}
                          placeholder={newsClipping.modal.linkPlaceHolder}
                          value={(newData as NewsRequest).url}
                          onChange={value => updateData('LINK', value)}
                          inputType={'TEXT'} gap={'32px'} />
        </Box>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Button colorScheme={'main'}
                borderRadius={'50px'}
                type={'submit'}
                m={'auto'}
                mt={'84px'}
                mb={'72px'}
                w={'196px'}
                h={'56px'}>
          {newsClipping.modal.save}
        </Button>
      </CommonModal.Footer>
    </form>
  </CommonModal>;
};

export default AddNewsModal;
