import CommonModal from '@components/common/modal/CommonModal';
import ExperienceItem from '@components/coverLetter/ExperienceItem';
import { useDisclosure } from '@chakra-ui/react';

export const ExperienceSelectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <>
    <ExperienceItem onClick={onOpen}/>
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <CommonModal.Header>test</CommonModal.Header>
      <CommonModal.Body>body</CommonModal.Body>
    </CommonModal>
  </>
};

export default ExperienceSelectModal;
