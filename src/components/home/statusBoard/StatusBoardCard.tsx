import { Flex, Text } from '@chakra-ui/react';

interface StatusBoardCardType {
  isPass?: boolean;
  value: number;
}

const StatusBoardCard = ({ isPass = false, value }: StatusBoardCardType) => {
  return <Flex w={'200px'}
               h={'150px'}
               p={5}
               boxShadow={'md'}
               borderRadius={'base'}
               alignItems={'center'}
               justifyContent={'space-between'}
               flexDir={'column'}>
    <Text>{isPass ? '서류 합격' : '지원 완료'}</Text>
    <Text>{value} 건</Text>
  </Flex>;
};

export default StatusBoardCard;
