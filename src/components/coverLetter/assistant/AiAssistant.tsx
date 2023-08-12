import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
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

const AiAssistant = ({ generatorCoverLetter }: AiAssistantProps) => {
  const [isOpen, onToggle] = useState(false);
  return <Center position={'fixed'}
                 top={'117x'}
                 right={'136px'}
                 zIndex={1}>
    <Card m={4}
          boxShadow={'none'}
          border={'2px solid'}
          borderColor={'lightgrey2.500'}
          w={'524px'}>
      <CardHeader display={'flex'} p={'44px 24px'}>
        <Img src={AiAssistantIcon}
             w={'80px'}
             h={'80px'}
             objectFit={'contain'}
             onClick={generatorCoverLetter}
             mr={'22px'} />
        <Box w={'363px'} h={'111px'}>
          <Text fontSize={'ml'} mb={'12px'}>
            {coverLetter.aiAssistant.title}</Text>
          <Text fontSize={'sm'}
                whiteSpace={'break-spaces'}
                color={'lightgrey4.500'}>
            {coverLetter.aiAssistant.description}
          </Text>
        </Box>
      </CardHeader>
      <CardBody p={0}>
        <Accordion allowMultiple>
          <AccordionItem p={'24px 32px'}>
            <AccordionButton
              p={0}
              onClick={() => onToggle(!isOpen)}>
              <Box as={'span'}
                   flex={'1'}
                   lineHeight={'md'}
                   fontSize={'md'}
                   boxSizing={'border-box'}

                   color={isOpen ? 'drakgrey2.500' : 'lightgrey4.500'}
                   textAlign={'left'}>
                {isOpen
                  ? coverLetter.aiAssistant.selectExp
                  : coverLetter.aiAssistant.selectExpBefore}
              </Box>
              <Img boxSize={'30px'}
                   src={isOpen ? UpArrowIcon : DownArrowIcon} />
            </AccordionButton>
            <AccordionPanel pb={4} p={0}>
              <Text mt={'20px'}
                    mb={'24px'}
                    fontSize={'sm'}
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
