import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Img,
  List,
  Text,
} from '@chakra-ui/react';
import ExperienceSelectModalButton from '@components/coverLetter/assistant/ExperienceSelectModalButton';
import AiAssistantIcon from '@assets/images/ai-assistant-icon.svg';
import { coverLetter } from '@/messages.json';
import DownArrowIcon from '@assets/icons/circle-arrow-down-01-sharp.svg';

const AiAssistant = () => {
  return <Center h={'100%'} position={'sticky'}>
    <Card w={'400px'} m={4}>
      <CardHeader display={'flex'} p={'40px 32px'}>
        <Img src={AiAssistantIcon} boxSize={'80px'} />
        <Box ml={'12px'}>
          <Text>{coverLetter.aiAssistant.title}</Text>
          <Text fontSize={'sx'}
                whiteSpace={'break-spaces'}
                color={'lightgrey4.500'}>
            {coverLetter.aiAssistant.description}
          </Text>
        </Box>
      </CardHeader>
      <CardBody p={0}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as={'span'}
                   flex={'1'}
                   fontSize={'sm'}
                   textAlign={'left'}
                   color={'lightgrey4.500'}>
                {coverLetter.aiAssistant.selectExp}
              </Box>
              <Button boxSize={'30px'}
                      colorScheme={'none'}
                      backgroundImage={DownArrowIcon}
                      backgroundPosition={'center center'}
                      backgroundSize={'60% auto'}
                      backgroundRepeat={'no-repeat'} />
            </AccordionButton>
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
      </CardBody>
    </Card>
  </Center>;
};

export default AiAssistant;
