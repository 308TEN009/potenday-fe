import { Box, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import CoverLetterCardItem from '@components/coverLetter/assistant/CoverLetterCardItem';
import { myPage } from '@/messages.json';
import { useEffect, useState } from 'react';
import HomeApi from '@/api/HomeApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import type { JobPost } from '@/model/home';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';

const MyCoverLetterList = () => {
  const [myCoverLetterList, setMyCoverLetter] = useState<JobPost[]>([]);
  useEffect(() => {
    retrieveJobPost();
  }, []);

  const retrieveJobPost = () => {
    HomeApi.retrieveJobPost()
           .then(setMyCoverLetter)
           .catch(useErrorHandler);
  };
  return <Box mt={'160px'}>
    <HStack justifyContent={'space-between'}>
      <Box>
        <Heading fontSize={['md', 'lg']}
                 fontWeight={'normal'}>
          {myPage.viewMyCoverLetters}
        </Heading>
        <Text fontSize={'sm'}
              mt={'16px'}
              color={'lightgrey4.500'}
              whiteSpace={'break-spaces'}>
          {myPage.viewMyCoverLettersDesc}
        </Text>
      </Box>
      {myCoverLetterList.length <= 0 &&
        <AddJobPostingModalButton callBack={retrieveJobPost} position={'HOME'} />}
    </HStack>

    <Grid gridTemplateColumns={'repeat(3, 472px)'}
          mt={'40px'}
          borderRadius={'12px'}
          p={'20px 0'}
          gap={'40px'}>
      {
        myCoverLetterList.map((coverLetter) =>
          <CoverLetterCardItem key={coverLetter._id} jobPost={coverLetter} />)
      }
    </Grid>
  </Box>;
};

export default MyCoverLetterList;
