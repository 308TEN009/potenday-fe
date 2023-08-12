import {
  Box,
  Button,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AiAssistant from '@components/coverLetter/assistant/AiAssistant';
import HomeApi from '@/api/HomeApi';
import useErrorHandler from '@/hooks/useErrorHandler';
import type { JobPost } from '@/model/home';
import { useRecoilState } from 'recoil';
import selectedExpListStore from '@/store/selectedExpListStore';
import FormHeader from '@components/coverLetter/form/FormHeader';
import selectedJobPostStore from '@/store/selectedJobPostStore';
import type { AIGeneratorRequest, AssistantType, SaveCoverLetterRequest } from '@/model/coverLetter';
import { coverLetter } from '@/messages.json';
import AddIcon from '@assets/icons/plus-sign-circle-grey.svg';
import { BASIC_FAIL } from '@/model/toast';
import CoverLetterApi from '@/api/CoverLetterApi';

const CoverLetter = () => {
    const [jopPostOptions, setJobPostOptions] = useState<JobPost[]>([]);
    const [jobPost, setJobPost] = useState<JobPost | null>(null);
    const [cleanupNeeded, setCleanupNeeded] = useState(false);
    const [expListStore, setExpListStore] = useRecoilState(selectedExpListStore);
    const [jobPostStore, setJobPostStore] = useRecoilState(selectedJobPostStore);
    const [questionList, setQuestionList] = useState<SaveCoverLetterRequest[]>([
      {
        question: '',
        answer: '',
      },
    ]);
    const toast = useToast();

    useEffect(() => {
      retrieveJobPostOptions();

      setCleanupNeeded(true);
      return () => {
        if (cleanupNeeded) {
          setExpListStore({
            currentSelected: [],
            originSelected: [],
          });
          setJobPostStore(null);
        }
      };
    }, []);

    useEffect(() => {
      retrieveAllCoverLetters();
    }, [jobPost, jobPostStore]);

    const addNewTab = () => {
      if (questionList.length >= 5) {
        return;
      }
      setQuestionList([...questionList, {
        question: '',
        answer: '',
      }]);
    };

    const retrieveJobPostOptions = () => {
      HomeApi.retrieveJobPost()
             .then(setJobPostOptions)
             .catch(useErrorHandler);
    };

    const retrieveAllCoverLetters = () => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id) {
        return;
      }

      CoverLetterApi.retrieveAllCoverLetters(id)
                    .then(response => {
                        if (response.length <= 0) {
                          setQuestionList([{
                            question: '',
                            answer: '',
                          }]);
                          return;
                        }
                        setQuestionList(
                          response.map(({ question, answer }) => ({ question, answer })).reverse(),
                        );
                      },
                    )
                    .catch(useErrorHandler);
    };

    const generatorNewCoverLetter = (index: number) => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id || !questionList[index].question) {
        toast(BASIC_FAIL);
        return;
      }

      const companyName = jobPostStore?.companyName ?? jobPost?.companyName ?? '';
      const applicationJob = jobPostStore?.applicationJob ?? jobPost?.applicationJob ?? '';
      const jobDescription = jobPostStore?.jobDescription ?? jobPost?.jobDescription ?? '';

      const request: AIGeneratorRequest = {
        question: questionList[index].question,
        assistantInput: [
          {
            type: 'emp' as AssistantType,
            message: `${companyName}, ${applicationJob}`,
          }, {
            type: 'jd' as AssistantType,
            message: jobDescription,
          },
          ...expListStore.originSelected.map(({ title, experienceDetailList }) => ({
            type: 'exp' as AssistantType,
            message: `${title.trim()}, ${
              experienceDetailList
                .filter(detail => detail)
                .map(detail => detail.content.trim())
                .join(',')}`,
          })),
        ],
      };

      CoverLetterApi.generateAICoverLetter(request)
                    .then(({ content }) =>
                      updateList(index, 'answer', content),
                    )
                    .catch(useErrorHandler);
    };

    const updateList = (index: number, field: string, value: string) => {
      const changedList = questionList.map((listItem, idx) => (
        index === idx ? { ...listItem, [field]: value } : listItem
      ));
      setQuestionList(changedList);
    };

    const saveCoverLetter = (index: number) => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id || !questionList[index].question) {
        toast(BASIC_FAIL);
        return;
      }

      CoverLetterApi.createCoverLetter(id, questionList[index])
                    .catch(useErrorHandler);
    };

    return <Flex h={'100%'}
                 gap={'50px'}
                 bgColor={'white'}
                 p={['50px 0px', '106px 120px 0px 120px']}>
      <Box flex={1}
           zIndex={1}
           color={'lightgrey4.500'}>
        <FormHeader options={jopPostOptions}
                    selectedJobPost={jobPost}
                    setSelectedJobPost={setJobPost} />
        <Tabs variant={'soft-rounded'}
              colorScheme={'sub1'}
              mt={'24px'}
        >
          <TabList alignItems={'center'}>
            {
              questionList.map((_, index) =>
                <Tab key={index}
                     w={'104px'}
                     h={'46px'}
                     fontSize={'sm'}
                     fontWeight={'normal'}
                     color={'lightgrey4.500'}
                     bgColor={'lightgrey1.500'}
                     boxShadow={`
                       1px 1px 2px 0 #ffffff30,
                       -1px -1px 2px 0 #D6D6D605,
                       inset -1px 1px 2px 0 #D6D6D620,
                       inset -1px 1px 2px 0 #D6D6D620,
                       inset -1px -1px 2px 0 #D6D6D690,
                       inset 1px 1px 3px 0 #D6D6D690;             
                       `}
                     mr={'40px'}>
                  {coverLetter.question} {index + 1}
                </Tab>)
            }
            {
              questionList.length < 5 && <Button onClick={addNewTab}
                                                 boxSize={'28px'}
                                                 backgroundImage={`url(${AddIcon})`}
                                                 backgroundPosition={'center center'}
                                                 backgroundSize={'contain auto'}
                                                 backgroundRepeat={'no-repeat'}
                                                 colorScheme={'none'} />
            }
          </TabList>
          <TabPanels>
            {
              questionList.map((question, index) =>
                <TabPanel key={index}>
                  <Text fontSize={'md'}
                        mb={'24px'}>
                    {coverLetter.question}
                  </Text>
                  <Input value={question.question}
                         onChange={e => updateList(index, 'question', e.target.value)}
                         fontSize={'md'}
                         border={'2px solid'}
                         borderColor={'lightgrey2.500'}
                         bgColor={'white'}
                         focusBorderColor={'sub1.500'}
                         borderRadius={'8px'}
                         mb={'56px'} />
                  <Text fontSize={'md'}
                        mb={'24px'}>
                    {coverLetter.myAnswer}
                  </Text>
                  <Textarea value={question.answer}
                            onChange={e => updateList(index, 'answer', e.target.value)}
                            fontSize={'md'}
                            border={'2px solid'}
                            borderColor={'lightgrey2.500'}
                            bgColor={'white'}
                            resize={'none'}
                            focusBorderColor={'sub1.500'}
                            borderRadius={'8px'}
                            h={'400px'}
                            mb={'40px'} />
                  <Box float={'right'}
                       mb={'58px'}
                       fontWeight={'normal'}>
                    <Button onClick={() => saveCoverLetter(index)}
                            colorScheme={'lightgrey2'}
                            borderRadius={'20px'}
                            mr={'56px'}>
                      {coverLetter.finalSave}
                    </Button>
                    <Button onClick={() => generatorNewCoverLetter(index)}
                            colorScheme={'main'}
                            fontWeight={'normal'}
                            borderRadius={'20px'}>
                      {coverLetter.save}
                    </Button>
                  </Box>
                </TabPanel>)
            }
          </TabPanels>
        </Tabs>
      </Box>
      <Box w={'603px'} />
      <AiAssistant />
    </Flex>
      ;
  }
;

export default CoverLetter;
