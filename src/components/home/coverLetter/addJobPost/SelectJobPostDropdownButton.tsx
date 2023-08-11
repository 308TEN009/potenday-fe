import { Button } from '@chakra-ui/react';
import { coverLetter } from '@/messages.json';

export const SelectJobPostDropdownButton = () => {
  return <Button colorScheme={'lightgrey1'}
                 fontSize={'sm'}
                 boxShadow={'inset 1px 1px 3px 0 #D6D6D6'}
                 w={'248px'}
                 h={'42px'}
                 color={'darkgrey1.500'}>
    {coverLetter.addOtherCoverLetter}
  </Button>;
};

export default SelectJobPostDropdownButton;
