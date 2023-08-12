import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import StatusBoard from '@components/home/statusBoard/StatusBoard';
import Bookmark from '@components/home/bookmark/Bookmark';
import CoverLetterContainer from '@components/home/coverLetter/CoverLetterContainer';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';
import { home } from '@/messages.json';
import HomeApi from '@/api/HomeApi';
import { useEffect, useState } from 'react';
import type { JobPost } from '@/model/home';
import useFlexDir from '@/hooks/useFlexDir';
import useErrorHandler from '@/hooks/useErrorHandler';

const Home = () => {
  const [jobPosts, setJobPost] = useState<JobPost[]>([]);
  const flexDir = useFlexDir();

  useEffect(() => {
    retrieveJobPosts();
  }, []);

  const retrieveJobPosts = () =>
    HomeApi.retrieveJobPost()
           .then(setJobPost)
           .catch(useErrorHandler);

  return <Flex flexDir={flexDir} m={'106px 120px 0px 120px'}>
    <Box>
      <HStack w={'1035px'}
              height={'64px'}
              mb={'20px'}>
        <Text fontSize={'lg'}
              mr={'41px'}

              wordBreak={'keep-all'}>
          {home.myCoverLetter}
        </Text>
        <AddJobPostingModalButton callBack={retrieveJobPosts} position={'HOME'} />
      </HStack>
      <CoverLetterContainer jobPosts={jobPosts} />
    </Box>
    <Flex w={'100%'}
          gap={'25px'}
          flexDir={flexDir}
          justifyContent={'space-between'}>

      <VStack gap={['100px', '80px']}>
        <StatusBoard />
        <Bookmark />
      </VStack>
    </Flex>
  </Flex>;
};

export default Home;
