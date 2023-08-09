import { Box } from '@chakra-ui/react';
import CoverLatterList from '@components/home/coverLetter/CoverLatterList';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';

const CoverLetterContainer = () => {
  const onSubmit = () => {
    console.log('submit');
  };
  return <Box>
    <Box pl={'30px'}
         w={'100%'}
         boxSizing={'border-box'}>
      <AddJobPostingModalButton onSubmit={onSubmit} position={'HOME'} />
      <CoverLatterList />
    </Box>

  </Box>;
};

export default CoverLetterContainer;
