import { Box, Flex, HStack, ListItem, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { home } from '@/messages.json';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import selectedJobPostStore from '@/store/selectedJobPostStore';

const LabelByStatus = {
  start: {
    label: home.start,
    color: 'white',
  },
  complete: {
    label: home.complete,
    color: 'lightgrey2.500',
  },
  pending: {
    label: home.pending,
    color: 'sub1.500',
  },
};

const CoverLetterListItem = ({ _id, companyName, status, applyStatus, applicationJob, jobDescription }: JobPost) => {
  const navigate = useNavigate();
  const setJobPostStore = useSetRecoilState(selectedJobPostStore);
  const gotoCoverLetter = () => {
    setJobPostStore({
      _id,
      companyName,
      applicationJob,
      jobDescription,
      status,
      applyStatus
    });
    navigate(`/cover-letter?fix=true`);
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
      <Text flex={3}>{companyName}</Text>
      <Text flex={5}>{applicationJob}</Text>
      <HStack w={'150px'}
      >
        <Box boxSize={'20px'}
             borderRadius={'100%'}
             borderWidth={status === 'start' ? '4px' : 0}
             borderColor={'sub1.500'}
             bgColor={LabelByStatus[status].color} />
        <Text fontSize={['xs', 'sm']}>
          {LabelByStatus[status].label}
        </Text>
      </HStack>
    </Flex>
  </ListItem>;
};

export default CoverLetterListItem;
