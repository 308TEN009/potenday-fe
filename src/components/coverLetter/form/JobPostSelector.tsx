import type { JobPostOption } from '@/model/coverLetter';
import CommonSelect from '@components/common/form/CommonSelect';
import { Box, Text } from '@chakra-ui/react';

interface JobPostSelectorProps {
  options: JobPostOption[];
  selectedJobPost: JobPostOption;
  setSelectedJobPost: (selected: JobPostOption) => void;
}

const JobPostSelector = ({
                           options,
                           selectedJobPost,
                           setSelectedJobPost
                         }: JobPostSelectorProps) => {
  return <Box w={'400px'}>
    <CommonSelect title={'지원 공고'} defaultSelectedLabel={'선택'} selectedLabel={selectedJobPost.companyName}>
      {
        options.map((option) =>
          <CommonSelect.Option key={option.id}>
            <Text onClick={() => {
              setSelectedJobPost(option);
            }}>
              {option.companyName} | {option.duty}
            </Text>
          </CommonSelect.Option>
        )
      }
    </CommonSelect>
  </Box>
};

export default JobPostSelector;
