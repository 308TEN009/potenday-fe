import type { UseToastOptions } from '@chakra-ui/react';

export type ToastStatus = 'success' | 'error' | 'warning' | 'info';

export const BASIC_SUCCESS: UseToastOptions = {
  title: 'Success',
  position: 'top',
  status: 'success',
  isClosable: true,
  duration: 3000,
};
