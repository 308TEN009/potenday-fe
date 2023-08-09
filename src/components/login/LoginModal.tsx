import CommonModal from '@components/common/modal/CommonModal';
import { Button, HStack, Text } from '@chakra-ui/react';
import type { SocialLoginType } from '@/model/common';

const LoginModal = ({ isOpen, onClose }: any) => {
  const onLogin = (socialLoginType: SocialLoginType) => {
    const popupX = document.body.offsetWidth / 2 - 200 / 2;
    const popupY = window.screen.height / 2 - 300 / 2;
    window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/login/${socialLoginType}`,
      'Redirect Window',
      `status=no, height=520, width=600, left='${popupX}', top=${popupY}`,
    );
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
        <Button onClick={() => onLogin('kakao')}>카카오</Button>
        <Button onClick={() => onLogin('naver')}>네이버</Button>
        <Button onClick={() => onLogin('google')}>구글</Button>
      </HStack>
    </CommonModal.Body>
    <CommonModal.Footer />
  </CommonModal>;
};

export default LoginModal;
