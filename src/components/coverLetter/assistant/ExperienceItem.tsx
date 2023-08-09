import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Text,
} from '@chakra-ui/react';

// interface ExperienceItemProps {
//
// }
export const ExperienceItem = () => {
  return <AccordionItem>
    <HStack>
      <Checkbox w={'100%'}>
        <Box>
          경험 1
        </Box>
      </Checkbox>
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
