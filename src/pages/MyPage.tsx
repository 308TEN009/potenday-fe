import { Box, Heading, List, Text } from '@chakra-ui/react';
import AddExperienceModalButton from '@components/myPage/AddExperienceModalButton';
import ExperienceList from '@components/myPage/ExperienceList';
import CoverLatterRowItem from '@components/coverLetter/assistant/CoverLatterRowItem';

const MyPage = () => {
  return <>
    <Box>
      <Heading>나의 경험 리스트</Heading>
      <Text>나의 경험을 정리해보세요! 언제든지 수정 또는 추가 가능합니다!</Text>
      <AddExperienceModalButton />
      <ExperienceList />
    </Box>
    <Box mt={15}>
      <Heading>내가 지원한 공고 모아보기</Heading>
      <Text>지원한 공고의 결과를 업데이트 해주세요!</Text>
      <List>
        <CoverLatterRowItem
          companyName={'삼성전자'}
          status={'마케팅'}
          coverLatterKey={''}
          duty={''}
        />
      </List>
    </Box>
  </>;
};

export default MyPage;
