import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, HStack, Text } from '@chakra-ui/react';

// interface ExperienceItemProps {
//
// }
export const ExperienceItem = () => {
  return <AccordionItem>
    <HStack>
      <Text w={'100%'}>
        경험 1
      </Text>
      <AccordionButton flex={1}>
        <AccordionIcon />
      </AccordionButton>
    </HStack>
    <AccordionPanel>
      ❤️경험 1-1
    </AccordionPanel>
    <AccordionPanel>
      ❤️경험 1-2
    </AccordionPanel>
  </AccordionItem>;
};

export default ExperienceItem;
