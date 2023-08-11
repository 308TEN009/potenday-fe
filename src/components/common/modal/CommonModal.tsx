import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import CancelIcon from '@assets/icons/cancel-circle.svg';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  w?: string | string[];
  h?: string | string[];
}

const CommonModal = ({ isOpen, onClose, children, w, h }: CommonModalProps) => {
  return <Modal isOpen={isOpen}
                onClose={onClose}
                isCentered>
    <ModalOverlay />
    <ModalContent borderRadius={'8px'}
                  w={w as any} //@ts-ignore
                  h={h as any} //@ts-ignore
                  maxh={'100vh'}
                  maxW={'100vw'}>
      {children}
    </ModalContent>
  </Modal>;
};

const CommonModalHeader = ({ children }: { children: ReactNode }) =>
  <>
    <ModalHeader mt={'32px'}>
       <ModalCloseButton bg={`url(${CancelIcon})`}
                         boxSize={'32px'}
                         m={'16px'} />
      {children}
    </ModalHeader>
  </>;

const CommonModalBody = ({ children }: { children: ReactNode }) =>
  <ModalBody>
    {children}
  </ModalBody>;

const CommonModalFooter = ({ children }: { children: ReactNode }) =>
  <ModalFooter>
    {children}
  </ModalFooter>;

CommonModal.Header = CommonModalHeader;
CommonModal.Body = CommonModalBody;
CommonModal.Footer = CommonModalFooter;
export default CommonModal;
