import CommonSelect from '@components/common/form/CommonSelect';
import { Box, Divider, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';
import type { JobPost } from '@/model/home';
import SelectedJobPost from '@components/home/coverLetter/addJobPost/SelectedJobPost';
import { useRecoilValue } from 'recoil';
import selectedJobPostStore from '@/store/selectedJobPostStore';

interface JobPostSelectorProps {
  options: JobPost[];
  selectedJobPost: JobPost | null;
  setSelectedJobPost: (selected: JobPost) => void;
}

const FormHeader = ({
                      options,
                      selectedJobPost,
                      setSelectedJobPost,
                    }: JobPostSelectorProps) => {
  const { isOpen, onClose } = useDisclosure();
  const jobPostStore = useRecoilValue(selectedJobPostStore);

  const getSelectedNode = () =>
    selectedJobPost
      ? <SelectedJobPost {...selectedJobPost} />
      : '지원공고 선택하기';

  const onSubmit = () => {
// TODO
  };

  return <Box>
    {jobPostStore !== null
      ? <VStack alignItems={'start'}>
        <HStack justifyContent={'start'}>
          <Text fontSize={'lg'}
                mr={'40px'}>{jobPostStore.companyName}</Text>
          <Text fontSize={'lg'}>
            {jobPostStore.applicationJob}
          </Text>

        </HStack>
        <Divider />
      </VStack>
      : <CommonSelect defaultSelectedLabel={'선택'}
                      selectedNode={getSelectedNode()}>
        {
          options.map((option) =>
            <CommonSelect.Option key={option._id}>
              <Text onClick={() => {
                setSelectedJobPost(option);
              }}>
                {option.companyName} | {option.applicationJob}
              </Text>
            </CommonSelect.Option>,
          )
        }
        {/* @ts-ignore */}
        <AddJobPostingModalButton isOpen={isOpen}
                                  position={'DROPDOWN'}
                                  callBack={onSubmit}
                                  onClose={onClose} />
      </CommonSelect>
    }
  </Box>;
};

export default FormHeader;
