import CommonModal from '@components/common/modal/CommonModal';
import { Button, Center, Text } from '@chakra-ui/react';
import { REDIRECTION_CHANNEL } from '@/model/common';
import { login } from '@/messages.json';
import KakaoLogin from '@assets/images/kakao-login.svg';

const LoginModal = ({ isOpen, onClose }: any) => {
  const onLogin = () => {
    const popupX = document.body.offsetWidth / 2 - 200 / 2;
    const popupY = window.screen.height / 2 - 300 / 2;
    window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/login/kakao`,
      'Redirect Window',
      `status=no, height=520, width=600, left='${popupX}', top=${popupY}`,
    );
    const redirectWindowChannel = new BroadcastChannel(REDIRECTION_CHANNEL);
    redirectWindowChannel.onmessage = () => {
      window.location.reload();
      onClose();
    };
  };
  return <CommonModal isOpen={isOpen}
                      onClose={onClose}
                      w={'900px'}
                      h={'453px'}>
    <CommonModal.Header>
      <Text fontSize={'md'}
            mt={'58px'}
            fontWeight={'normal'}
            textAlign={'center'}>
        {login.title}
      </Text>
      <Text fontWeight={'normal'}
            fontSize={'sm'}
            mt={'16px'}
            color={'lightgrey4.500'}
            textAlign={'center'}>
        {login.subTitle}
      </Text>
    </CommonModal.Header>
    <CommonModal.Body>
      <Center>
        <Button onClick={onLogin}
                bg={`url(${KakaoLogin}) center / cover no-repeat transparent`}
                w={'534px'}
                h={'80px'}
                mt={'56px'}
                mb={'114px'}
                borderRadius={'8px'}
                colorScheme={'white'}>
        </Button>
      </Center>
    </CommonModal.Body>
  </CommonModal>;
};

export default LoginModal;
