import { Flex, Heading, VStack } from '@chakra-ui/react';
import StatusBoard from '@components/home/statusBoard/StatusBoard';
import Bookmark from '@components/home/bookmark/Bookmark';
import CoverLetterContainer from '@components/home/coverLetter/CoverLetterContainer';

const Home = () => {
  return <>
    <Heading fontSize={'md'} w={'100%'} mb={'27px'}>자소서</Heading>
    <Flex mt={'54px'}
          w={'100%'}
          gap={'25px'}
          justifyContent={'space-between'}>
      <CoverLetterContainer />
      <VStack gap={'10px'}>
        <StatusBoard />
        <Bookmark />
      </VStack>
    </Flex>
  </>;
};

export default Home;
