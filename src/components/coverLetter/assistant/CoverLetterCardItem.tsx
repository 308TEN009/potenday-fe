import { Badge, Box, Button, Card, GridItem, HStack, Text } from '@chakra-ui/react';
import type { JobPost } from '@/model/home';
import { myPage } from '@/messages.json';
import CardBgImg from '@/assets/images/clap-background.svg';
import PassIcon from '@/assets/icons/pass.svg';
import PendingIcon from '@/assets/icons/pending.svg';
import { useState } from 'react';
import CoverLetterApi from '@/api/CoverLetterApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import selectedJobPostStore from '@/store/selectedJobPostStore';

const badgeStyle = {
  fontWeight: 'normal',
  fontSize: 'sm',
  border: '1px solid',
  borderColor: 'lightgrey2.500',
  color: 'lightgrey2.500',
  p: '5px 16px',
  mr: '16px',
  cursor: 'pointer',
  borderRadius: '8px',
  bg: 'white',
};

export const CoverLetterCardItem = ({ jobPost }: { jobPost: JobPost }) => {
  const [isPassed, setIsPassed] = useState(jobPost.applyStatus === 'pass');
  const setJobPostStore = useSetRecoilState(selectedJobPostStore);
  const navigate = useNavigate();

  const checkCoverLetter = () => {
    if (isPassed) {
      return;
    }

    const request = {
      companyName: jobPost.companyName,
      applicationJob: jobPost.applicationJob,
      jobDescription: jobPost.jobDescription,
      status: 'complete',
      applyStatus: 'pass',
    };

    CoverLetterApi.updateCoverLetter(jobPost._id, request)
                  .then(() => setIsPassed(true))
                  .catch(useErrorHandler);
  };

  const moveRoute = (isNews: boolean) => {
    if (isNews) {
      navigate(`/news-clipping?companyName=${jobPost.companyName}`);
      return;
    }
    setJobPostStore(jobPost);
    navigate('/cover-letter');
  };

  return <GridItem>
    <Card className={'light-shadow'}
          bg={'white'}
          w={'472px'}
          h={'284px'}
          p={'32px'}
          borderRadius={'12px'}
          bgImage={isPassed ? CardBgImg : ''}
          bgRepeat={'no-repeat'}
          bgPosition={'95% 10%'}>
      <Text color={'main.500'}>
        {jobPost.companyName}
      </Text>
      <Text color={'darkgrey.500'}
            mt={'16px'}>{jobPost.applicationJob}
      </Text>
      <Box mt={'24px'}>
        <Badge {...badgeStyle} onClick={() => moveRoute(true)}>
          {myPage.newsClipping}
        </Badge>
        <Badge {...badgeStyle} onClick={() => moveRoute(false)}>
          {myPage.coverLetter}
        </Badge>

      </Box>
      <HStack alignItems={'center'}
              gap={0}
              mt={'60px'}>
        <Button bgImage={isPassed ? PassIcon : PendingIcon}
                bgRepeat={'no-repeat'}
                bgPosition={'center'}
                bgSize={'20px'}
                boxSize={'20px'}
                colorScheme={'none'}
                onClick={checkCoverLetter}
                ml={'-10px'} />
        <Text as={'span'}
              fontSize={'sm'}
              color={isPassed ? 'sub1.500' : 'lightgrey4.500'}>
          {myPage.pass}
        </Text>
      </HStack>
    </Card>

  </GridItem>;
};

export default CoverLetterCardItem;
