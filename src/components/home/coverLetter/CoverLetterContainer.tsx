import { Box, Text, useDisclosure } from '@chakra-ui/react';
import AddJobPostingButton from '@components/home/coverLetter/addJobPost/AddJobPostingButton';
import CoverLatterList from '@components/home/coverLetter/CoverLatterList';
import AddJobPostingModal from '@components/home/coverLetter/addJobPost/AddJobPostingModal';

const CoverLetterContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    onClose();
  };
  return <Box>
    <Text fontSize={'md'} w={'100%'} mb={'27px'}>자소서</Text>
    <Box pl={'30px'}
         w={'773px'}
         boxSizing={'border-box'}>
      <AddJobPostingButton onClick={onOpen} />
      <CoverLatterList />
    </Box>
    <AddJobPostingModal isOpen={isOpen}
                        onSubmit={onSubmit}
                        onClose={onClose} />
  </Box>;
};

export default CoverLetterContainer;
