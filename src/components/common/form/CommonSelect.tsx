import { Box, Button, Collapse, HStack, List, ListItem, useDisclosure } from '@chakra-ui/react';
import { type ReactNode, type RefObject, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface CommonSelectProps {
  selectedLabel?: string;
  defaultSelectedLabel?: string;
  children: ReactNode[];
}

const CommonSelect = ({
                        selectedLabel,
                        defaultSelectedLabel = '',
                        children,
                      }: CommonSelectProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const button = useRef<RefObject<HTMLButtonElement> | null>(null);

  const onButtonBlur = () => {
    (button.current as any).blur!();
    onClose();
  };
  return (
    <Box sx={{ cursor: 'pointer' }}
         w={'100%'}>
      <Box w={'100%'}
           role={'select'}>
        <HStack
          onClick={onToggle}
          justifyContent={'space-between'}
          boxShadow={'base'}
          p={'8px'}>
          <Button ref={button}
                  rightIcon={<ChevronDownIcon />}
                  background={'transparent'}
                  w={'100%'}
                  justifyContent={'space-between'}
                  m={0}
                  fontSize={'sm'}
                  onBlur={onClose}
                  p={'0 10px'}
                  _focus={{}}
                  _hover={{}}
          >
            {selectedLabel ?? defaultSelectedLabel ?? ''}
          </Button>
        </HStack>
        <Box position={'relative'} zIndex={999}>
          <Collapse animateOpacity
                    in={isOpen}
                    style={{ zIndex: 10 }}>
            <List position={'absolute'}
                  top={0}
                  w={'100%'}
                  maxH={'500px'}
                  overflowY={'scroll'}
                  boxSizing={'border-box'}
                  onClick={onButtonBlur}>
              {children}
            </List>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

const CommonSelectOption = ({ children }: { children: ReactNode }) => {
  return <ListItem w={'100%'}
                   boxShadow={'md'}
                   borderRadius={'base'}
                   boxSizing={'border-box'}
                   backgroundColor={'white'}
                   zIndex={999}
                   p={3}
                   mb={1}> {children} </ListItem>;
};

CommonSelect.Option = CommonSelectOption;
export default CommonSelect;
