import CommonModal from '@components/common/modal/CommonModal';
import { Button, HStack, Text } from '@chakra-ui/react';

const LoginModal = ({ isOpen, onClose }: any) => {
  return <CommonModal isOpen={isOpen}
                      onClose={onClose}
                      size={'2xl'}>
    <CommonModal.Header>
      <Text fontSize={'md'}
            mt={'90px'}
            textAlign={'center'}>
        간편하게 로그인하기
      </Text>
      <Text mt={'20px'}
            fontWeight={'normal'}
            fontSize={'sm'}
            textAlign={'center'}>
        10초 만에 로그인 하고 AI 자소서를 작성해보세요!
      </Text>
    </CommonModal.Header>
    <CommonModal.Body>
      <HStack justifyContent={'space-around'} h={'200px'}>
        <Button>카카오</Button>
        <Button>네이버</Button>
        <Button>페북</Button>
      </HStack>
    </CommonModal.Body>
    <CommonModal.Footer />
  </CommonModal>;
};

export default LoginModal;
