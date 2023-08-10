import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import StatusBoard from '@components/home/statusBoard/StatusBoard';
import Bookmark from '@components/home/bookmark/Bookmark';
import CoverLetterContainer from '@components/home/coverLetter/CoverLetterContainer';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';
import { home } from '@/messages.json';
import HomeApi from '@/api/HomeApi';
import { useEffect, useState } from 'react';
import type { JobPost } from '@/model/home';

const Home = () => {
  const [jobPosts, setJobPost] = useState<JobPost[]>([]);

  useEffect(() => {
    retrieveJobPosts();
  }, []);

  const retrieveJobPosts = () => {
    HomeApi.retrieveJobPost()
           .then(res => {
             setJobPost(res);
           });
  };
  return <>
    <HStack>
      <Text fontSize={'lg'} mr={'41px'} w={'240px'} wordBreak={'keep-all'}>
        {home.myCoverLetter}
      </Text>
      <AddJobPostingModalButton callBack={retrieveJobPosts} position={'HOME'} />
    </HStack>
    <Flex mt={'54px'}
          w={'100%'}
          gap={'25px'}
          justifyContent={'space-between'}>
      <CoverLetterContainer jobPosts={jobPosts}/>
      <VStack gap={'10px'}>
        <StatusBoard />
        <Bookmark />
      </VStack>
    </Flex>
  </>;
};

export default Home;
