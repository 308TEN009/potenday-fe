import { Badge, Card, CardBody, CardFooter, CardHeader, GridItem, Text } from '@chakra-ui/react';
import { CoverLatterItemProps } from '@/model/coverLetter';



const CoverLatterCardItem = ({
                           companyName,
                           status,
                           duty,
                         }: CoverLatterItemProps) => {
  return <GridItem>
    <Card h={'200px'}
          alignItems={'left'}
          boxShadow='md'
          borderRadius={'base'}
          p={3}
          mb={3}>
      <CardHeader p={2}>
        <Text fontWeight={'bold'}
              fontSize={'ml'}>
          {companyName}
        </Text>
      </CardHeader>
      <CardBody p={2}>
        <Text fontSize={'md'}> {duty}</Text>
        </CardBody>
        <CardFooter>
        <Badge ml={'auto'}
        fontSize={'sm'}>
      {status}
        </Badge>
        </CardFooter>
        </Card>
        </GridItem>;
      };

      export default CoverLatterCardItem;;
