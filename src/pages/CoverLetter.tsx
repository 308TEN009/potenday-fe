import { Box, Button, Flex, HStack, Input, NumberInput, NumberInputField, Text, Textarea } from '@chakra-ui/react';
import JobPostSelector from '@components/coverLetter/form/JobPostSelector';
import { type ReducerStateWithoutAction, useEffect, useMemo, useReducer, useState } from 'react';
import AiAssistant from '@components/coverLetter/assistant/AiAssistant';
import HomeApi from '@/api/HomeApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import type { JobPost } from '@/model/home';

const EMPTY_COVER_LETTER_FORM = {
  jobDesc: '',
  coverLetter: '',
  jobPost: null,
  question: '',
} as ReducerStateWithoutAction<any>;

const coverLetterFormReducer = (state, action) => {
  switch (action.type) {
    case 'JOB_POST':
      return { ...state, jobPost: action.value };
    case 'JOB_DESC':
      return { ...state, jobDesc: action.value };
    case 'QUESTIONS':
      return { ...state, question: action.value };
    case 'COVER_LETTER':
      return { ...state, coverLetter: action.value };
    case 'MAX_LEN':
      return { ...state, maxLength: action.value };
    default:
      return state;
  }
};

const CoverLetter = () => {
  const [jopPostOptions, setJobPostOptions] = useState<JobPost[]>([]);
  const [state, dispatch] = useReducer(coverLetterFormReducer, EMPTY_COVER_LETTER_FORM);
  const currentLength = useMemo(() => state.coverLetter.length, [state.coverLetter]);

  useEffect(() => {
    retrieveJobPostOptions();
  }, []);

  const updateForm = (type: string, value: any) => {
    dispatch({ type, value });
  };

  const retrieveJobPostOptions = () =>
    HomeApi.retrieveJobPost()
           .then(setJobPostOptions)
           .catch(useErrorHandler);

  return <Flex h={'100%'} gap={'50px'} m={['50px 0px', '106px 120px 0px 120px']}>
    <Box flex={1} zIndex={1}>
      <form>
        <JobPostSelector options={jopPostOptions}
                         selectedJobPost={state.jobPost}
                         setSelectedJobPost={(value: JobPost) => updateForm('JOB_POST', value)} />
        <Textarea resize={'none'}
                  fontSize={'sm'}
                  mt={3}
                  placeholder={'채용공고의 주요업무/Job Description을 확인해보세요!'} />
        <HStack gap={3} m={'10px 0'}>
          <Text fontSize={'ml'} as={'span'}>문항</Text>
          <Button size={'sm'} fontWeight={'normal'}>새로 작성하기</Button>
          <Button size={'sm'} fontWeight={'normal'}>불러오기</Button>
        </HStack>
        <Input fontSize={'sm'}
               placeholder={'자기소개서 문항을 입력해 주세요.'}
               onChange={e => updateForm('QUESTION', e.target.value)} />
        <NumberInput>
          <NumberInputField m={'10px 0'}
                            w={'200px'}
                            fontSize={'sm'}
                            placeholder={'자소서 글자수 (선택)'}
                            onChange={e => updateForm('MAX_LEN', e.target.value)} />
        </NumberInput>
        <Text fontSize={'ml'} as={'span'}>자기소개서</Text>
        <Textarea resize={'none'}
                  fontSize={'sm'}
                  mt={3}
                  h={'300px'}
                  onChange={e => updateForm('COVER_LETTER', e.target.value)}>
        </Textarea>
        {state.maxLength &&
          <Text fontSize={'xs'} float={'right'}>
            현재 글자수: {currentLength} <br />
            목표 글자수: {state.maxLength}
          </Text>
        }
      </form>
    </Box>
    <AiAssistant />
    <Box position={'absolute'}
         bgColor={'white'}
         top={0}
         left={0}
         right={0}
         bottom={0}
         zIndex={0} />
  </Flex>;
};

export default CoverLetter;
