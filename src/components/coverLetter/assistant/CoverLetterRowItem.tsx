import { Box, Flex, ListItem, Text } from '@chakra-ui/react';
import type { CoverLetterItemProps } from '@/model/coverLetter';

export const CoverLetterRowItem = ({
                                     companyName,
                                     duty,
                                   }: CoverLetterItemProps) => {
  return <ListItem h={'20px'}>
    <Flex>
      <Box flex={4} boxSizing={'border-box'}>
        <Text>{companyName}</Text>
        <Text>{duty}</Text>
      </Box>
      <Box flex={1}>뉴스 스크랩 보기</Box>
      <Box flex={1}>자기소개서 보기</Box>
    </Flex>

  </ListItem>;
};

export default CoverLetterRowItem;
