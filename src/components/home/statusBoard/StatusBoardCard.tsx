import { Flex, Text } from '@chakra-ui/react';
import { home } from '@/messages.json';

interface StatusBoardCardType {
  isPass?: boolean;
  value: number;
}

const StatusBoardCard = ({ isPass = false, value }: StatusBoardCardType) => {
  return <Flex w={['200px', '263px']}
               fontSize={'md'}
               p={5}
               bg={'white'}
               boxShadow={'md'}
               borderRadius={'12px'}
               alignItems={'center'}
               justifyContent={'space-between'}
               flexDir={'column'}>
    <Text mb={'16px'}> {home.statusBoard[isPass ? 'pass' : 'complete']}</Text>
    <Text>{value} {home.statusBoard.unit}</Text>
  </Flex>;
};

export default StatusBoardCard;
