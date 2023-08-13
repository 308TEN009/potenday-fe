import CommonModal from '@components/common/modal/CommonModal';
import { Box, Button, Text } from '@chakra-ui/react';
import { login } from '@/messages.json';
import type { CommonModalProps } from '@/model/common';

interface GoLoginModalProps extends CommonModalProps {
  onLogin: () => any;
}

const GoLoginModal = ({ isOpen, onClose, onLogin }: GoLoginModalProps) => {

  const goLogin = () => {
    onClose();
    onLogin();
  };
  return <CommonModal isOpen={isOpen}
                      w={'582px'}
                      h={'178px'}
                      isCentered={false}
                      onClose={onClose}>
    <CommonModal.Body>
      <Text p={'32px 40px'}>
        {login.info}
      </Text>
    </CommonModal.Body>
    <CommonModal.Footer>
      <Box p={'52px 24px'} pt={'18px'}>
        <Button onClick={goLogin}
                colorScheme={'sub1'}
                borderRadius={'8px'}
                fontSize={'20px'}
                fontWeight={'normal'}
                w={'178px'}
                h={'50px'}>
          {login.doLogin}
        </Button>
      </Box>
    </CommonModal.Footer>
  </CommonModal>;
};

export default GoLoginModal;
