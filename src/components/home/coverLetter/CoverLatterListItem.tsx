import { Badge, Box, Flex, HStack, ListItem, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { home } from '@/messages.json';

const LabelByStatus = {
  start: {
    label: home.pending,
    color: 'lightgrey2',
  },
  pending: {
    label: home.pending,
    color: 'lightgrey2',
  },
};

const CoverLatterListItem = ({ companyName, status, applicationJob }: JobPost) => {

  return <ListItem>
    <Flex h={'74px'}
          w={['400px', '1035px']}
          bg={'white'}
          borderRadius={'12px'}
          boxShadow={'md'}
          alignItems={'center'}
          fontSize={'sm'}
          p={'40px 22px'}
          m={'auto'}
          mb={'20px'}>
      <Text flex={2}>{companyName}</Text>
      <Text flex={5}>{applicationJob}</Text>
      <HStack flex={1}
      >
        <Box boxSize={'20px'}
             borderRadius={'100%'}
             bgColor={'lightgrey2.500'} />
        <Text>
          {LabelByStatus[status].label}
        </Text>
      </HStack>
    </Flex>
  </ListItem>;
};

export default CoverLatterListItem;
