import { Box, Flex, HStack, ListItem, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { home } from '@/messages.json';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import selectedJobPostStore from '@/store/selectedJobPostStore';

const LabelByStatus = {
  start: {
    label: home.complete,
    color: 'sub1.500',
  },
  complete: {
    label: home.complete,
    color: 'sub1.500',
  },
  pending: {
    label: home.pending,
    color: 'lightgrey2.500',
  },
};

const CoverLetterListItem = ({ _id, companyName, status, applicationJob, jobDescription }: JobPost) => {
  const navigate = useNavigate();
  const setJobPostStore = useSetRecoilState(selectedJobPostStore);
  const gotoCoverLetter = () => {
    setJobPostStore({
      _id,
      companyName,
      applicationJob,
      jobDescription,
      status
    });
    navigate(`/cover-letter`);
  };
  return <ListItem onClick={gotoCoverLetter}>
    <Flex h={'74px'}
          w={['400px', '1035px']}
          bg={'white'}
          borderRadius={'8px'}
          boxShadow={'md'}
          alignItems={'center'}
          fontSize={'sm'}
          p={'40px 22px'}
          m={'auto'}
          mb={'20px'}>
      <Text flex={2}>{companyName}</Text>
      <Text flex={5}>{applicationJob}</Text>
      <HStack w={'150px'}
      >
        <Box boxSize={'20px'}
             borderRadius={'100%'}
             bgColor={LabelByStatus[status].color} />
        <Text fontSize={['xs', 'sm']}>
          {LabelByStatus[status].label}
        </Text>
      </HStack>
    </Flex>
  </ListItem>;
};

export default CoverLetterListItem;
