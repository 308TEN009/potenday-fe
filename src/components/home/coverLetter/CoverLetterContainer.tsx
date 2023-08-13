import { Box, Flex, List, Text } from '@chakra-ui/react';
import CoverLetterListItem from '@components/home/coverLetter/CoverLetterListItem';
import type { JobPost } from '@/model/home';

interface CoverLetterContainerProps {
  jobPosts: JobPost[];
}

const CoverLetterContainer = ({ jobPosts = [] }: CoverLetterContainerProps) => {
  return <Box>
    <Box w={'100%'}
         boxSizing={'border-box'}>
      {
        jobPosts.length <= 0
          ? <Flex h={'74px'}
                  w={['400px', '1035px']}
                  bg={'white'}
                  borderRadius={'8px'}
                  boxShadow={'md'}
                  alignItems={'center'}
                  fontSize={'sm'}
                  p={'40px 22px'}
                  m={'auto'}
                  mb={'20px'}>
            <Text>
              지원하고 싶은 채용 공고를 추가해보세요!
            </Text>
          </Flex>
          : <List maxH={'500px'} overflowY={'auto'}>

            {jobPosts.map(jobPost =>
              <CoverLetterListItem key={jobPost._id}
                                   {...jobPost} />)}
          </List>
      }

    </Box>

  </Box>;
};

export default CoverLetterContainer;
