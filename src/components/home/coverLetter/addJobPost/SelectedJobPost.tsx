import { Box, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';

const SelectedJobPost = ({ companyName, applicationJob }: JobPost) => {
  return <Box>
    <Text fontSize={'lg'}
          as={'span'}
          mr={'40px'}>
      {companyName}
    </Text>
    <Text fontSize={'md'}
          as={'span'}>
      {applicationJob}
    </Text>
  </Box>;
};

export default SelectedJobPost;
