import { Box, HStack, Image, Link as ChakraLink, Text, useMediaQuery } from '@chakra-ui/react';
import StatusBoardCard from '@components/home/statusBoard/StatusBoardCard';
import { home } from '@/messages.json';
import { Link as ReactRouterLink } from 'react-router-dom';
import RightArrowIcon from '@assets/icons/circle-arrow-right-01-sharp.svg';
import type { StatusBoardCnt } from '@/model/home';
import { useEffect, useState } from 'react';
import HomeApi from '@/api/HomeApi';
import useErrorHandler from '@/hooks/useErrorHandler';

export const StatusBoard = () => {
  const [{ completeCnt, successCnt }, setStatusBoard] = useState<StatusBoardCnt>({ completeCnt: 0, successCnt: 0 });
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    retrieveStatusBoard();
  }, []);

  const retrieveStatusBoard = () =>
    HomeApi.retrieveStatusBoard()
           .then(setStatusBoard)
           .catch(useErrorHandler);

  return <Box w={['420px', '605px']} h={['auto', '235px']} pl={isMobile ? 0 : '50px'}>
    <HStack justifyContent={'space-between'} height={'64px'} mb={'20px'}>
      <Text fontSize={'md'}>{home.statusBoard.title}</Text>
      <ChakraLink as={ReactRouterLink as any}
                  to={'/my-page'}>
        <Image src={RightArrowIcon} />
      </ChakraLink>
    </HStack>
    <HStack justifyContent={'start'}
            alignItems={'start'}
            w={'100%'}
            h={'100%'}>
      <StatusBoardCard value={completeCnt ?? 0} />
      <StatusBoardCard isPass value={successCnt ?? 0} />
    </HStack>
  </Box>;
};

export default StatusBoard;
