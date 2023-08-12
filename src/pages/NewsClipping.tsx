import { Box, Button, Center, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { newsClipping } from '@/messages.json';
import NewsTable from '@components/newsClipping/NewsTable';
import AddIcon from '@assets/icons/plus-sign-circle-grey.svg';
import { useEffect, useState } from 'react';
import type { NewsContents, NewsRequest } from '@/model/newsClipping';
import NewsApi from '@/api/NewsApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import AddNewsModal from '@components/newsClipping/AddNewsModal';

const NewsClipping = () => {
  const [newsData, setNewsData] = useState<NewsContents[]>([]);
  const [data, setData] = useState<NewsContents | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    retrieveNews();
  }, []);

  const onOpenModal = (row: NewsContents | null) => {
    setData(row);
    onOpen();
  };

  const retrieveNews = () => {
    NewsApi.retrieveNews()
           .then(setNewsData)
           .catch(useErrorHandler)
           .finally(onClose);
  };

  const onCreateNews = (request: NewsRequest) => {
    console.log(request);
    return NewsApi.createNews(request)
                  .then(retrieveNews)
                  .catch(useErrorHandler);
  };

  return <Box wordBreak={'keep-all'} m={['50px 0px', '106px 120px 0px 120px']}>
    <Heading fontWeight={'normal'}
             fontSize={'lg'}>
      {newsClipping.title}
    </Heading>
    <Text mt={'16px'} fontSize={'md'} color={'lightgrey4.500'}>
      {newsClipping.description}
    </Text>

    <NewsTable tableData={newsData} />
    <Center>
      <Button colorScheme={'none'}
              backgroundImage={`url(${AddIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'contain auto'}
              backgroundRepeat={'no-repeat'}
              onClick={() => onOpenModal(null)} />
    </Center>
    <AddNewsModal newsData={data}
                  isOpen={isOpen}
                  onClose={onClose}
                  {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                  onSubmit={onCreateNews} />
  </Box>;
};

export default NewsClipping;
