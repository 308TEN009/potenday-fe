import { Flex, Text } from '@chakra-ui/react';
import { home } from '@/messages.json';

interface StatusBoardCardType {
  isPass?: boolean;
  value: number;
}

const StatusBoardCard = ({ isPass = false, value }: StatusBoardCardType) => {
  return <Flex w={['200px', '263px']}
               h={['106px']}
               p={5}
               bg={'white'}
               boxShadow={'md'}
               borderRadius={'12px'}
               alignItems={'center'}
               justifyContent={'space-between'}
               flexDir={'column'}>
    <Text> {home.statusBoard[isPass ? 'pass' : 'complete']}</Text>
    <Text>{value} {home.statusBoard.unit}</Text>
  </Flex>;
};

export default StatusBoardCard;
