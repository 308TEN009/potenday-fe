import type { Meta } from '@storybook/blocks';
import CoverLetter from '@pages/CoverLetter';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import type { StoryObj } from '@storybook/react';

const coverLetterMeta: Meta<typeof CoverLetter> = {
  title: 'Page/CoverLetter',
  component: CoverLetter,
  decorators: [(story) =>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {story()}
      </ChakraProvider>
    </BrowserRouter>,
  ],
};

export default coverLetterMeta;
type Story = StoryObj<CoverLetter>;
export const Common: Story = {
  args: {},
};
