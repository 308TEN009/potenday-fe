import {
  Box,
  Button,
  Divider,
  HStack,
  Img,
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { useRecoilValue } from 'recoil';
import selectedJobPostStore from '@/store/selectedJobPostStore';
import { coverLetter } from '@/messages.json';
import AddIcon from '@assets/icons/plus-sign-circle-main.svg';

interface JobPostSelectorProps {
  options: JobPost[];
  selectedJobPost: JobPost | null;
  setSelectedJobPost: (selected: JobPost) => void;
}

const FormHeader = ({
                      options,
                      selectedJobPost,
                      setSelectedJobPost,
                    }: JobPostSelectorProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const jobPostStore = useRecoilValue(selectedJobPostStore);

  const onClickRow = (jobPost: JobPost) => {
    setSelectedJobPost(jobPost);
    onClose();
  };

  const onSubmit = () => {
    console.log(selectedJobPost);
// TODO
  };

  return <Box>
    {jobPostStore !== null
      ? <VStack alignItems={'start'}>
        <HStack justifyContent={'space-between'} w={'100%'}>
          <HStack>
            <Text fontSize={'lg'}
                  mr={'40px'}>{jobPostStore.companyName}</Text>
            <Text fontSize={'lg'}>
              {jobPostStore.applicationJob}
            </Text>
          </HStack>
          <Button w={'248px'}
                  h={'42px'}
                  colorScheme={'none'}
                  borderRadius={0}
                  bgColor={'lightgrey1.500'}>
            {coverLetter.addOtherCoverLetter}
          </Button>
        </HStack>
        <Divider />
      </VStack>
      : <Box>
        <Popover isOpen={isOpen}
                 onClose={onClose}
                 onOpen={onOpen}>
          <PopoverTrigger>
            <Button w={'1035px'}
                    borderRadius={'8px'}
                    colorScheme={'none'}
                    h={'70px'}
                    p={'20px 40px'}
                    fontSize={'md'}
                    border={'2px solid'}
                    borderColor={'lightgrey2.500'}
                    color={'darkgrey2.500'}
                    justifyContent={'start'}
                    textAlign={'left'}>

              {selectedJobPost
                ? <>
                  <Text flex={4}>{selectedJobPost.companyName}</Text>
                  <Text flex={5}>{selectedJobPost.applicationJob}</Text>
                </>
                : <Text color={'lightgrey4.500'}>{coverLetter.selectJobpost}</Text>}

            </Button>
          </PopoverTrigger>
          <PopoverContent w={'1035px'}
                          mt={'-10px'}
                          borderRadius={'8px'}
                          border={'2px solid'}
                          borderColor={'lightgrey2.500'}>
            <Button
              justifyContent={'start'}
              colorScheme={'none'}
              color={'main.500'}
              w={'100%'}
              h={'78px'}
              p={'24px 40px'}>
              <Img src={AddIcon}
                   mr={'20px'} />
              {coverLetter.addJobPost}
            </Button>
            <Divider color={'lightgrey1.500'} />
            <List maxH={'246px'} overflowY={'scroll'}>
              {options.map(option =>
                <ListItem key={option._id}
                          p={'16px 40px'}>
                  <Button justifyContent={'start'}
                          textAlign={'start'}
                          w={'100%'}
                          onClick={e => onClickRow(option)}
                          colorScheme={'none'}>
                    <Text flex={4}>{option.companyName}</Text>
                    <Text flex={5}>{option.applicationJob}</Text>
                  </Button>
                </ListItem>,
              )}
            </List>
          </PopoverContent>
        </Popover>
      </Box>
    }
  </Box>;
};

export default FormHeader;
