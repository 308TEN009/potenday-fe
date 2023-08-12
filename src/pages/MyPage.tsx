import { Box, Heading, List, Text } from '@chakra-ui/react';
import CoverLetterRowItem from '@components/coverLetter/assistant/CoverLetterRowItem';
import ExperienceContainer from '@components/myPage/ExperienceContainer';

const MyPage = () => {
  return <Box m={['50px 0px', '106px 120px 0px 120px']}>
    <ExperienceContainer />
    <Box mt={15}>
      <Heading>내가 지원한 공고 모아보기</Heading>
      <Text>지원한 공고의 결과를 업데이트 해주세요!</Text>
      <List>
        <CoverLetterRowItem
          companyName={'삼성전자'}
          status={'마케팅'}
          coverLetterKey={''}
          duty={''}
        />
      </List>
    </Box>
  </Box>;
};

export default MyPage;
