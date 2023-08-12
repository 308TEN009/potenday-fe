import { Box, List } from '@chakra-ui/react';
import CoverLetterListItem from '@components/home/coverLetter/CoverLetterListItem';
import type { JobPost } from '@/model/home';

interface CoverLetterContainerProps {
  jobPosts: JobPost[];
}

const CoverLetterContainer = ({ jobPosts = [] }: CoverLetterContainerProps) => {
  return <Box>
    <Box w={'100%'}
         boxSizing={'border-box'}>
      <List maxH={'500px'} overflowY={'auto'}>
        {jobPosts.map(jobPost =>
          <CoverLetterListItem key={jobPost._id}
                               {...jobPost} />)}
      </List>
    </Box>

  </Box>;
};

export default CoverLetterContainer;
