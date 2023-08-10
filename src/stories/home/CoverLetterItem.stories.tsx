import CoverLatterCardItem from '@components/home/coverLetter/CoverLatterCardItem';
import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import theme from '@/theme';

const CoverLatterTestComponent = (props) => {
  return <Grid>
    <CoverLatterCardItem {...props}/>
  </Grid>
}
const CoverLetterItemMeta: Meta<typeof CoverLatterCardItem> = {
  title: 'Home/CoverLetterItem',
  component: CoverLatterTestComponent,
  decorators: [(story) =>
    <ChakraProvider theme={theme}>
      {story()}
    </ChakraProvider>],
}

export default CoverLetterItemMeta;

type Story = StoryObj<CoverLatterCardItem>;
export const Common: Story = {
  args: {
    companyName: 'companyName',
    status: 'status',
    coverLatterKey: '0',
    duty: 'duty',
  }
}
