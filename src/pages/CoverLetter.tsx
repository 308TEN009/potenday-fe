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
import MainButton from '@components/common/button/MainButton';

const CoverLetter = () => {
    const [jopPostOptions, setJobPostOptions] = useState<JobPost[]>([]);
    const [jobPost, setJobPost] = useState<JobPost | null>(null);
    const [expListStore, setExpListStore] = useRecoilState(selectedExpListStore);
    const [jobPostStore, setJobPostStore] = useRecoilState(selectedJobPostStore);
    const [questionList, setQuestionList] = useState<SaveCoverLetterRequest[]>([
      {
        question: '',
        answer: '',
      },
    ]);
    const toast = useToast();
    const [tabIdx, setTabIdx] = useState(0);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      setJobPost(jobPostStore);
      retrieveJobPostOptions();
      return () => {
        setExpListStore({
          currentSelected: [],
          originSelected: [],
        });
        setJobPostStore(null);
      };
    }, []);

    useEffect(() => {
      setDisabled((jobPostStore?.status ?? jobPost?.status) === 'complete');
      retrieveAllCoverLetters();
      setExpListStore({
        currentSelected: [],
        originSelected: [],
      });
      setTabIdx(0);
    }, [jobPost, jobPostStore]);

    const addNewTab = () => {
      if (questionList.length >= 5) {
        return;
      }
      setTabIdx(questionList.length);
      setQuestionList([...questionList, {
        question: '',
        answer: '',
      }]);
    };

    const retrieveJobPostOptions = () => {
      setLoading(true);
      HomeApi.retrieveJobPost()
             .then(setJobPostOptions)
             .catch(useErrorHandler)
             .finally(() => setLoading(false));
    };

    const retrieveAllCoverLetters = () => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id) {
        return;
      }
      setLoading(true);
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
                    .catch(useErrorHandler)
                    .finally(() => setLoading(false));
    };

    const generatorNewCoverLetter = () => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id || !questionList[tabIdx].question) {
        toast(BASIC_FAIL);
        return;
      }

      setLoading(true);
      const companyName = jobPostStore?.companyName ?? jobPost?.companyName ?? '';
      const applicationJob = jobPostStore?.applicationJob ?? jobPost?.applicationJob ?? '';
      const jobDescription = jobPostStore?.jobDescription ?? jobPost?.jobDescription ?? '';

      const request: AIGeneratorRequest = {
        question: questionList[tabIdx].question,
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
                      updateList(tabIdx, 'answer', content),
                    )
                    .catch(useErrorHandler)
                    .finally(() => setLoading(false));
    };

    const updateList = (index: number, field: string, value: string) => {
      const changedList = questionList.map((listItem, idx) => (
        index === idx ? { ...listItem, [field]: value } : listItem
      ));
      setQuestionList(changedList);
    };

    const saveCoverLetter = (index: number, isFinal: boolean) => {
      const id = jobPostStore?._id ?? jobPost?._id;
      if (!id || !questionList[index].question) {
        toast(BASIC_FAIL);
        return;
      }

      setLoading(true);
      CoverLetterApi.createCoverLetter(id, questionList[index])
                    .then(() => {
                      if (isFinal) {
                        const request = {
                          ...jobPost ?? jobPostStore,
                          status: 'complete',
                        };
                        return CoverLetterApi.updateCoverLetter(id, request);
                      }
                    })
                    .catch(useErrorHandler)
                    .finally(() => setLoading(false));
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
              index={tabIdx}
              onChange={setTabIdx}
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
              !disabled && questionList.length < 5 && <Button onClick={addNewTab}
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
                         isDisabled={disabled}
                         onChange={e => updateList(index, 'question', e.target.value)}
                         placeholder={coverLetter.questionPlaceholder}
                         fontSize={'md'}
                         border={'2px solid'}
                         borderColor={'lightgrey2.500'}
                         bgColor={'white'}
                         focusBorderColor={'sub1.500'}
                         borderRadius={'8px'}
                         color={'darkgrey2.500'}
                         mb={'56px'}
                         h={'74px'}
                         p={'22px 40px'}
                         lineHeight={'sm'} />
                  <Text fontSize={'md'}
                        mb={'24px'}>
                    {coverLetter.myAnswer}
                  </Text>
                  <Textarea value={question.answer}
                            disabled={disabled}
                            onChange={e => updateList(index, 'answer', e.target.value)}
                            placeholder={coverLetter.myAnswerPlaceholder}
                            fontSize={'md'}
                            border={'2px solid'}
                            borderColor={'lightgrey2.500'}
                            color={'darkgrey2.500'}
                            bgColor={'white'}
                            resize={'none'}
                            focusBorderColor={'sub1.500'}
                            borderRadius={'8px'}
                            p={'32px 40px'}
                            h={'400px'}
                            mb={'40px'} />
                  <Flex justifyContent={'end'}
                        mb={'58px'}
                        fontWeight={'normal'}>
                    <Button onClick={() => saveCoverLetter(index, true)}
                            disabled={disabled}
                            w={'196px'}
                            h={'56px'}
                            color={'darkgrey2.500'}
                            isLoading={loading}
                            colorScheme={'lightgrey2'}
                            borderRadius={'30px'}
                            boxShadow={`
                              inset 1px 1px 2px 0 #FBFBFB30,
                              inset -1px -1px 2px 0 #CDCDCD50,
                              -1px 1px 2px 0 #CDCDCD20,
                              1px -1px 2px 0 #CDCDCD20,
                              -1px -1px 2px 0 #FBFBFB90,
                              1px 1px 3px 0 #CDCDCD90
                            `}
                            mr={'56px'}>
                      {coverLetter.finalSave}
                    </Button>
                    <MainButton onClick={() => saveCoverLetter(index, false)}
                                rounded
                                w={'196px'}
                                h={'56px'}>
                      {coverLetter.save}
                    </MainButton>
                  </Flex>
                </TabPanel>)
            }
          </TabPanels>
        </Tabs>
      </Box>
      <Box w={'603px'} />
      <AiAssistant generatorCoverLetter={generatorNewCoverLetter}
                   isLoading={loading} />
    </Flex>
      ;
  }
;

export default CoverLetter;
