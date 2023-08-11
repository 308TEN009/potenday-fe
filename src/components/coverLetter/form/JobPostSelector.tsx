import CommonSelect from '@components/common/form/CommonSelect';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';
import type { JobPost } from '@/model/home';
import SelectedJobPost from '@components/home/coverLetter/addJobPost/SelectedJobPost';
import SelectJobPostDropdownButton from '@components/home/coverLetter/addJobPost/SelectJobPostDropdownButton';

interface JobPostSelectorProps {
  options: JobPost[];
  selectedJobPost: JobPost | null;
  setSelectedJobPost: (selected: JobPost) => void;
}

const JobPostSelector = ({
                           options,
                           selectedJobPost,
                           setSelectedJobPost,
                         }: JobPostSelectorProps) => {
  const { isOpen, onClose } = useDisclosure();

  const getSelectedNode = () =>
    selectedJobPost
      ? <SelectedJobPost {...selectedJobPost} />
      : '지원공고 선택하기';

  const onSubmit = () => {
// TODO
  };

  return <Box>
    <CommonSelect defaultSelectedLabel={'선택'}
                  selectedNode={getSelectedNode()}
                  dropDownButton={<SelectJobPostDropdownButton />}>
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

  </Box>;
};

export default JobPostSelector;
