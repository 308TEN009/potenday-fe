import {
  Box,
  Button,
  Divider,
  HStack,
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
import { coverLetter } from '@/messages.json';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';

interface JobPostSelectorProps {
  options: JobPost[];
  selectedJobPost: JobPost | null;
  setSelectedJobPost: (selected: JobPost) => void;
  callback: () => any;
}

const FormHeader = ({
                      options,
                      selectedJobPost,
                      setSelectedJobPost,
                      callback,
                    }: JobPostSelectorProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const [fixMode, setFixMode] = useState(false);
  const [params] = useSearchParams();

  useEffect(() => {
    setFixMode(params.get('fix') !== null || selectedJobPost != null);
  }, [params]);

  const onClickRow = (jobPost: JobPost) => {
    setSelectedJobPost(jobPost);
    onClose();
  };

  return <Box>
    {fixMode
      ? <VStack alignItems={'start'}>
        <HStack justifyContent={'space-between'} w={'100%'}>
          <HStack>
            <Text fontSize={'lg'}
                  mr={'40px'}>{selectedJobPost?.companyName}</Text>
            <Text fontSize={'lg'}>
              {selectedJobPost?.applicationJob}
            </Text>
          </HStack>
          <Button w={'248px'}
                  h={'42px'}
                  colorScheme={'none'}
                  fontSize={'20px'}
                  borderRadius={'8px'}
                  p={'5px 16px'}
                  color={'darkgrey1.500'}
                  boxShadow={`
                              1px 1px 2px 0 #ffffff30, 
                              -1px -1px 2px 0 #D6D6D605, 
                              inset -1px 1px 2px 0 #D6D6D620,
                               inset -1px 1px 2px 0 #D6D6D620, 
                               inset -1px -1px 2px 0 #D6D6D690,
                               inset 1px 1px 3px 0 #D6D6D690
                            `}
                  onClick={() => navigate('/')}
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
                  <Text flex={2} fontSize={'lg'}>{selectedJobPost.companyName}</Text>
                  <Text flex={5} fontSize={'lg'}>{selectedJobPost.applicationJob}</Text>
                </>
                : <Text color={'lightgrey4.500'}>{coverLetter.selectJobpost}</Text>}
            </Button>
          </PopoverTrigger>
          <PopoverContent w={'1035px'}
                          mt={'-10px'}
                          borderRadius={'8px'}
                          border={'2px solid'}
                          borderColor={'lightgrey2.500'}>
            {/* <Button */}
            {/*  justifyContent={'start'} */}
            {/*  colorScheme={'none'} */}
            {/*  color={'main.500'} */}
            {/*  w={'100%'} */}
            {/*  h={'78px'} */}
            {/*  p={'24px 40px'}> */}
            {/*  <Img src={AddIcon} */}
            {/*       mr={'20px'} /> */}
            {/*  {coverLetter.addJobPost} */}
            {/* </Button> */}
            <AddJobPostingModalButton callBack={callback}
                                      position={'DROPDOWN'} />
            <Divider color={'lightgrey1.500'} />
            <List maxH={'246px'} overflowY={'scroll'}>
              {options.map(option =>
                <ListItem key={option._id}
                          p={'16px 40px'}>
                  <Button justifyContent={'start'}
                          textAlign={'start'}
                          w={'100%'}
                          onClick={() => onClickRow(option)}
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
