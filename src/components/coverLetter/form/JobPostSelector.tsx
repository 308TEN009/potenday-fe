import type { JobPostOption } from '@/model/coverLetter';
import CommonSelect from '@components/common/form/CommonSelect';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import AddJobPostingModalButton from '@components/home/coverLetter/addJobPost/AddJobPostingModalButton';

interface JobPostSelectorProps {
  options: JobPostOption[];
  selectedJobPost: JobPostOption | null;
  setSelectedJobPost: (selected: JobPostOption) => void;
}

const JobPostSelector = ({
                           options,
                           selectedJobPost,
                           setSelectedJobPost,
                         }: JobPostSelectorProps) => {
  const { isOpen, onClose } = useDisclosure();
  const getSelectedLabel = () =>
    selectedJobPost
      ? `${selectedJobPost.companyName} | ${selectedJobPost.duty}`
      : '지원공고 선택하기';

  const onSubmit = () => {
// TODO
  };
  return <Box w={'400px'}>
    <CommonSelect defaultSelectedLabel={'선택'} selectedLabel={getSelectedLabel()}>
      {
        options.map((option) =>
          <CommonSelect.Option key={option.id}>
            <Text onClick={() => {
              setSelectedJobPost(option);
            }}>
              {option.companyName} | {option.duty}
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
