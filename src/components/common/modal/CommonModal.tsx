import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CommonModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const CommonModal = ({ isOpen, onClose, children }: CommonModalProps) => {
	return <Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay/>
		<ModalContent>
			{children}
		</ModalContent>
	</Modal>
}

const CommonModalHeader = ({ children }: { children: ReactNode }) =>
	<ModalHeader>
		{children}
		<ModalCloseButton/>
	</ModalHeader>

const CommonModalBody = ({ children }: { children: ReactNode }) =>
	<ModalBody>
		{children}
	</ModalBody>

const CommonModalFooter = ({ children }: { children: ReactNode }) =>
	<ModalFooter>
		{children}
	</ModalFooter>

CommonModal.Header = CommonModalHeader;
CommonModal.Body = CommonModalBody;
CommonModal.Footer = CommonModalFooter;
export default CommonModal;
