import type { StoryObj, Meta } from '@storybook/react';
import CommonModal from '@components/common/modal/CommonModal';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';

const commonModalMeta: Meta<typeof CommonModal> = {
  title: 'Common/CommonModal',
  component: CommonModal,
  decorators: [(story) => <ChakraProvider theme={theme}>{story()}</ChakraProvider>]
};

export default commonModalMeta;
type Story = StoryObj<CommonModal>;

export const Common: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <>
    <CommonModal.Header>헤더</CommonModal.Header>
    <CommonModal.Body>콘텐츠</CommonModal.Body>
    </>
  },
};
