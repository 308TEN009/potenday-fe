import { Accordion, Box } from '@chakra-ui/react';
import ExperienceItem from '@components/coverLetter/assistant/ExperienceItem';

const ExperienceList = () => {
  return <Box w={'100%'} maxH={'200px'} overflowY={'scroll'}>
    <Accordion allowMultiple>
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </Accordion>
  </Box>;
};

export default ExperienceList;
