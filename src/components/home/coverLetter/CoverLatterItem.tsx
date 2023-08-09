import { Badge, Card, CardBody, CardFooter, CardHeader, GridItem, Text } from '@chakra-ui/react';

export interface CoverLatterRowProp {
  companyName: string;
  status: string;
  coverLatterKey: string;
  duty: string;
}

const CoverLatterItem = ({
                           companyName,
                           status,
                           duty
                         }: CoverLatterRowProp) => {
  return <GridItem>
    <Card h={'200px'}
          alignItems={'left'}
          boxShadow='md'
          borderRadius={'base'}
          p={3}
          mb={3}>
      <CardHeader>
        <Text fontWeight={'bold'}>
          {companyName}
        </Text>
      </CardHeader>
      <CardBody>
        <Text> {duty}</Text>
      </CardBody>
      <CardFooter>
        <Badge w={'100%'}
               float={'right'}
               fontSize={'sm'}>
          {status}
        </Badge>
      </CardFooter>
    </Card>
  </GridItem>;
};

export default CoverLatterItem;
