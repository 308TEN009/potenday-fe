import CommonModal from '@components/common/modal/CommonModal';
import ExperienceInputButton from '@components/coverLetter/assistant/ExperienceInputButton';
import { Accordion, Button, Center, Text, useDisclosure, Link as ChakraLink } from '@chakra-ui/react';
import ExperienceItem from '@components/coverLetter/assistant/ExperienceItem';
import { Link as ReactRouterLink } from 'react-router-dom';

export const ExperienceSelectModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <>
    <ExperienceInputButton onClick={onOpen} />
    <CommonModal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <CommonModal.Header>
        <Text textAlign={'center'}>나의 경험 리스트</Text>
        <Text fontWeight={'thin'}
              textAlign={'center'}
              fontSize={'sm'}>
          자소서 문항에 어울리는 경험을 골라주세요. 최대 3개까지 선택 가능합니다.
        </Text>
      </CommonModal.Header>
      <CommonModal.Body>
        <Accordion allowMultiple>
          <ExperienceItem />
          <ExperienceItem />
        </Accordion>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Center w={'100%'} mb={'20px'} flexDirection={'column'}>
          <Button>
            작성 완료
          </Button>
          <Text size={'sm'}>
            <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>
              경험 수정/추가하러 가기
            </ChakraLink>
          </Text>
        </Center>
      </CommonModal.Footer>
    </CommonModal>
  </>;
};

export default ExperienceSelectModalButton;
