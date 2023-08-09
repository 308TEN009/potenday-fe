import CoverLatterItem from '@components/home/coverLetter/CoverLatterItem';
import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import theme from '@/theme';

const CoverLatterTestComponent = (props) => {
  return <Grid>
    <CoverLatterItem {...props}/>
  </Grid>
}
const CoverLetterItemMeta: Meta<typeof CoverLatterItem> = {
  title: 'Home/CoverLetterItem',
  component: CoverLatterTestComponent,
  decorators: [(story) =>
    <ChakraProvider theme={theme}>
      {story()}
    </ChakraProvider>],
}

export default CoverLetterItemMeta;

type Story = StoryObj<CoverLatterItem>;
export const Common: Story = {
  args: {
    companyName: 'companyName',
    status: 'status',
    coverLatterKey: '0',
    duty: 'duty',
  }
}
