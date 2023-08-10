import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, ModalProps,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: string;
}

const CommonModal = ({ isOpen, onClose, children, size = 'md' }: CommonModalProps) => {
  return <Modal isOpen={isOpen}
                onClose={onClose}
                size={size as any}
                bgColor={'white'}
                isCentered>
    <ModalOverlay />
    <ModalContent borderRadius={0}>
      {children}
    </ModalContent>
  </Modal>;
};

const CommonModalHeader = ({ children }: { children: ReactNode }) =>
  <ModalHeader>
    {children}
    <ModalCloseButton />
  </ModalHeader>;

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
