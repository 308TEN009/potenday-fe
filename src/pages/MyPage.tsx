import { Box } from '@chakra-ui/react';
import ExperienceContainer from '@components/myPage/ExperienceContainer';
import MyCoverLetterList from '@components/myPage/MyCoverLetterList';

const MyPage = () => {
  return <Box m={['50px 0px', '106px 120px 0px 120px']}>
    <ExperienceContainer />
    <MyCoverLetterList/>
  </Box>;
};

export default MyPage;
