import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  List,
  Text,
} from '@chakra-ui/react';
import ExperienceSelectModalButton from '@components/coverLetter/assistant/ExperienceSelectModalButton';

const AiAssistant = () => {
  return <Center h={'100%'}>
    <Card w={'400px'} m={4}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton justifyContent={'space-between'}>
              <Text>
                경험선택
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text mb={1}>
              마이페이지에 등록한 경험 중 <br />
              최대 3개까지 등록할 수 있습니다.
            </Text>
            <List>
              <ExperienceSelectModalButton />
              <ExperienceSelectModalButton />
              <ExperienceSelectModalButton />
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <CardBody>
        <Text fontWeight={'600'}>
          AI 자소서 도우미
        </Text>
        <Text>
          AI 자소서 도우미와 함께 <br />
          자기소개서를 작성해 보세요!
        </Text>
      </CardBody>
      <CardFooter justifyContent={'center'} gap={1}>
        <Button fontWeight={'normal'}>
          자소서 작성하기
        </Button>
        <Button fontWeight={'normal'}>
          이걸로 작성하기
        </Button>
      </CardFooter>
    </Card>
  </Center>;
};

export default AiAssistant;
