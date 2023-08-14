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
import CancelIcon from '@assets/icons/cancel.svg';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  w?: string | string[];
  h?: string | string[];
  isCentered?: boolean;
  closeOnOverlayClick?: boolean;
}

const CommonModal = ({
                       isOpen, onClose, children
                       , w, h, isCentered = true,
                       closeOnOverlayClick = true,
                     }: CommonModalProps) => {
  return <>
    <Modal isOpen={isOpen}
           onClose={onClose}
           closeOnOverlayClick={closeOnOverlayClick}
           isCentered={isCentered}>
      <ModalOverlay />
      <ModalContent borderRadius={'8px'}
                    w={w as any} //@ts-ignore
                    h={h as any} //@ts-ignore
                    maxh={'100vh'}
                    maxW={'100vw'}>
        {children}
      </ModalContent>
    </Modal>

  </>;
};

const CommonModalHeader = ({ children, canClose = true }: { children: ReactNode, canClose: boolean }) =>
  <>
    <ModalHeader m={0}
                 mt={'62px'}
                 p={0}>
      {canClose && <ModalCloseButton bg={`url(${CancelIcon})`}
                                     color={'transparent'}
                                     bgRepeat={'no-repeat'}
                                     boxSize={'32px'}
                                     m={'16px'}>
      </ModalCloseButton>}

      {children}
    </ModalHeader>
  </>;

const CommonModalBody = ({ children }: { children: ReactNode }) =>
  <ModalBody m={0}
             p={0}>
    {children}
  </ModalBody>;

const CommonModalFooter = ({ children }: { children: ReactNode }) =>
  <ModalFooter m={0}
               p={0}>
    {children}
  </ModalFooter>;

CommonModal.Header = CommonModalHeader;
CommonModal.Body = CommonModalBody;
CommonModal.Footer = CommonModalFooter;
export default CommonModal;
