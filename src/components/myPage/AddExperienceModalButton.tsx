import { Button, Flex, FormLabel, Heading, Input, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import CommonModal from '@components/common/modal/CommonModal';

const AddExperienceModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <Flex justifyContent={'end'} p={5}>
    <Button onClick={onOpen}>
      추가하기
    </Button>
    <CommonModal isOpen={isOpen} onClose={onClose} w={'800px'}>
      <CommonModal.Header>
        <Heading textAlign={'center'} pt={5}>나의 경험 추가하기</Heading>
        <Text fontSize={'sm'}
              fontWeight={'normal'}
              textAlign={'center'}>
          경험을 제목과 세부사항으로 정리해보세요.
        </Text>
      </CommonModal.Header>
      <CommonModal.Body>
        <form>
          <FormLabel fontSize={'sm'}>
            <Text> 경험 소제목</Text>
          </FormLabel>
          <Input />
          <FormLabel fontSize={'sm'}>
            <Text as={'span'}> 경험 세부사항 1</Text>
            <Text as={'span'}>(선택)</Text>
          </FormLabel>
          <Textarea resize={'none'} />
          <FormLabel fontSize={'sm'}>
            <Text as={'span'}> 경험 세부사항 1</Text>
            <Text as={'span'}>(선택)</Text>
          </FormLabel>
          <Textarea resize={'none'} />
        </form>
      </CommonModal.Body>
      <CommonModal.Footer>
        <Button ml={'auto'}
                mr={1}
                w={'200px'}>
          저장
        </Button>
        <Button mr={'auto'}
                ml={1}
                w={'100px'}
                onClick={onClose}>
          닫기
        </Button>
      </CommonModal.Footer>
    </CommonModal>
  </Flex>;
};

export default AddExperienceModalButton;
