import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import GlobalSetting from '@/theme/GlobalSetting';
import CommonSelect from '@components/common/form/CommonSelect';

const CommonSelectorMeta: Meta<typeof CommonSelect> = {
  component: CommonSelect,
  title: 'Common/Selector',
  decorators: [(story) =>
    <ChakraProvider theme={theme}>
      <GlobalSetting/>
      {story()}
    </ChakraProvider>],
}

export default CommonSelectorMeta;
type Story = StoryObj<CommonSelect>;
export const Common: Story = {
	args: {
    title: 'dropdown test',
    defaultSelectedLabel: '선택',
    children: [
      <CommonSelect.Option key={1}>옵션1</CommonSelect.Option>,
      <CommonSelect.Option key={2}>옵션2</CommonSelect.Option>,
      <CommonSelect.Option key={3}>옵션3</CommonSelect.Option>,
    ]
  },
};
