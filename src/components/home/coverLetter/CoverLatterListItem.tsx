import { Badge, Flex, ListItem, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { CommonOutlineStyle } from '@/styles/commonStyles';

const CoverLatterListItem = ({ companyName, status, applicationJob }: JobPost) => {
  return <ListItem>
    <Flex {...CommonOutlineStyle}
          h={'74px'}
          w={'1035px'}
          alignItems={'center'}
          fontSize={'sm'}
          p={'40px 22px'}
          mb={'20px'}>
      <Text flex={2}>{companyName}</Text>
      <Text flex={4}>{applicationJob}</Text>
      <Badge flex={1}
             w={'106px'}
             h={'42px'}
             fontSize={'sm'}
             p={'auto'}
             textAlign={'center'}
             lineHeight={'taller'}
             borderRadius={'8px'}
             fontWeight={'normal'}>
        {status}
      </Badge>
    </Flex>
  </ListItem>;
};

export default CoverLatterListItem;
