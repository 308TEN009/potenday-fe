import { Box } from '@chakra-ui/react';
import ExperienceItem from '@components/coverLetter/assistant/ExperienceItem';
import type { ExperienceListResponse } from '@/model/mypage';

interface ExperienceListProps {
  experienceList: ExperienceListResponse[];
}

const ExperienceList = ({ experienceList }: ExperienceListProps) => {
  return <Box w={'100%'} maxH={'700px'} overflowY={'scroll'}>
    {experienceList.map(experience =>
      <ExperienceItem key={experience._id}
                      experience={experience} />)}
  </Box>;
};

export default ExperienceList;
