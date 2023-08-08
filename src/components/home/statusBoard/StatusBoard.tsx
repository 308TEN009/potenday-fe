import { Button, Card, CardBody, CardHeader, HStack } from '@chakra-ui/react';
import StatusBoardCard from '@components/home/statusBoard/StatusBoardCard';

export const StatusBoard = () => {
  return <Card w={'500px'} h={'280px'}>
    <CardHeader>
      <Button size={'sm'} float={'right'}> 더보기 </Button>
    </CardHeader>
    <CardBody>
      <HStack justifyContent={'center'}
              w={'100%'}
              h={'100%'}>
        <StatusBoardCard value={0} />
        <StatusBoardCard isPass value={0} />
      </HStack>
    </CardBody>
  </Card>;
};

export default StatusBoard;
