import { Flex, ListItem, Text } from '@chakra-ui/react';

export interface CoverLatterRowProp {
  companyName: string;
  status: string;
  coverLatterKey: string;
  duty: string;
}

const CoverLatterItem = ({ companyName, status, duty }: CoverLatterRowProp) => {
  return <ListItem>
    <Flex h={'45px'}
          alignItems={'center'}
          boxShadow='md'
          borderRadius={'base'}
          p={3}
          mb={3}>
      <Text flex={2}>{companyName}</Text>
      <Text flex={4}> {duty}</Text>
      <Text flex={1}> {status}</Text>
    </Flex>
  </ListItem>;
};

export default CoverLatterItem;
