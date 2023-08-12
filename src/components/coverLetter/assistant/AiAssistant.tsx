import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box, Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Img,
  Text,
} from '@chakra-ui/react';
import SelectExperienceModalButton from '@components/coverLetter/assistant/SelectExperienceModalButton';
import AiAssistantIcon from '@assets/images/ai-assistant-icon.svg';
import { coverLetter } from '@/messages.json';
import DownArrowIcon from '@assets/icons/circle-arrow-down-01-sharp.svg';
import UpArrowIcon from '@assets/icons/circle-arrow-up-01-sharp.svg';
import { useState } from 'react';

interface AiAssistantProps {
  generatorCoverLetter: () => void;
  isLoading: boolean;
}

const AiAssistant = ({ generatorCoverLetter, isLoading }: AiAssistantProps) => {
  const [isOpen, onToggle] = useState(false);
  return <Center position={'fixed'}
                 top={'117x'}
                 right={'136px'}
                 zIndex={1}>
    <Card m={4} w={'521px'}>
      <CardHeader display={'flex'} p={'40px 32px'}>
        <Button bgImg={AiAssistantIcon}
                bgPos={'center'}
                bgSize={'100%'}
                boxSize={'90px'}
                borderRadius={'100%'}
                colorScheme={'none'}
                isLoading={isLoading}
                onClick={generatorCoverLetter} />
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
        <Accordion allowMultiple>
          <AccordionItem p={'32px'}>
            <AccordionButton onClick={() => onToggle(!isOpen)}>
              <Box as={'span'}
                   flex={'1'}
                   fontSize={'sm'}
                   textAlign={'left'}>
                {coverLetter.aiAssistant.selectExp}
              </Box>
              <Img boxSize={'25px'}
                   src={isOpen ? UpArrowIcon : DownArrowIcon} />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text mb={'24px'}
                    whiteSpace={'break-spaces'}
                    color={'lightgrey4.500'}
                    w={'80%'}>
                {coverLetter.aiAssistant.selectExpDesc}
              </Text>
              <SelectExperienceModalButton />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  </Center>
    ;
};

export default AiAssistant;
