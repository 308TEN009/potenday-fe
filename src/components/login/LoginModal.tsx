import CommonModal from '@components/common/modal/CommonModal';
import { Button, HStack, Text } from '@chakra-ui/react';
import { REDIRECTION_CHANNEL } from '@/model/common';
import { useNavigate } from 'react-router';

const LoginModal = ({ isOpen, onClose }: any) => {
  const navigate = useNavigate();
  const onLogin = () => {
    const popupX = document.body.offsetWidth / 2 - 200 / 2;
    const popupY = window.screen.height / 2 - 300 / 2;
    window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/login/kakao`,
      'Redirect Window',
      `status=no, height=520, width=600, left='${popupX}', top=${popupY}`,
    );
    const redirectWindowChannel = new BroadcastChannel(REDIRECTION_CHANNEL);
    redirectWindowChannel.onmessage = () => onClose();
    navigate(window.location.pathname, { replace: true });
  };
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
        <Button onClick={onLogin}>카카오</Button>
      </HStack>
    </CommonModal.Body>
    <CommonModal.Footer />
  </CommonModal>;
};

export default LoginModal;
