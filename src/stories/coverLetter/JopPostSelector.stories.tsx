import type { Meta, StoryObj } from '@storybook/react';
import JobPostSelector from '@components/coverLetter/form/JobPostSelector';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

const JobPostSelectorMeta: Meta<typeof JobPostSelector> = {
  component: JobPostSelector,
  title: 'CoverLetter/JobPostSelector',
  decorators: [(story) =>
    <ChakraProvider theme={theme}>
      {story()}
    </ChakraProvider>],
}

export default JobPostSelectorMeta;
type Story = StoryObj<JobPostSelector>;

const options = [
  {
    companyName: 'test',
    duty: '1',
    id: '1',
  },
  {
    companyName: 'test2',
    duty: '2',
    id: '2',
  },
  {
    companyName: 'test3',
    duty: '3',
    id: '3',
  }
]

let selectedJobPost = options[0];
export const Common: Story = {
  args: {
    options,
    selectedJobPost,
    setSelectedJobPost: (option) => { selectedJobPost = option },
  },
};
