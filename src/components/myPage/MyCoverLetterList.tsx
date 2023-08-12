import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import CoverLetterCardItem from '@components/coverLetter/assistant/CoverLetterCardItem';
import { myPage } from '@/messages.json';
import { useEffect, useState } from 'react';
import HomeApi from '@/api/HomeApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import type { JobPost } from '@/model/home';

const MyCoverLetterList = () => {
  const [myCoverLetterList, setMyCoverLetter] = useState<JobPost[]>([]);
  useEffect(() => {
    HomeApi.retrieveJobPost()
           .then(setMyCoverLetter)
           .catch(useErrorHandler);
  }, []);
  return <Box mt={'160px'}>
    <Box>
      <Heading fontSize={['md', 'lg']}
               fontWeight={'normal'}>
        {myPage.viewMyCoverLetters}
      </Heading>
      <Text fontSize={'sm'}
            color={'lightgrey4.500'}
            whiteSpace={'break-spaces'}>
        {myPage.viewMyCoverLettersDesc}
      </Text>
    </Box>
    <Grid gridTemplateColumns={'repeat(3, 1fr)'}
          borderRadius={'12px'}
          p={'20px'}
          gap={'20px'}>
      {
        myCoverLetterList.map((coverLetter) =>
          <CoverLetterCardItem key={coverLetter._id} jobPost={coverLetter} />)
      }
    </Grid>
  </Box>;
};

export default MyCoverLetterList;
