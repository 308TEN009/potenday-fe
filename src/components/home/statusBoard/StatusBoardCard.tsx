import { Flex, Text } from '@chakra-ui/react';

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
    <Text>{isPass ? '서류 합격' : '지원 완료'}</Text>
    <Text>{value} 건</Text>
  </Flex>;
};

export default StatusBoardCard;
