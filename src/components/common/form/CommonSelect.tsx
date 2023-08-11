import { Box, Button, Collapse, HStack, List, ListItem, useDisclosure } from '@chakra-ui/react';
import { type LegacyRef, type ReactNode, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface CommonSelectProps {
  selectedLabel?: string;
  selectedNode?: ReactNode;
  defaultSelectedLabel?: string;
  dropDownButton?: ReactNode;
  children: ReactNode[];
}

const CommonSelect = ({
                        selectedLabel,
                        selectedNode,
                        defaultSelectedLabel = '',
                        dropDownButton,
                        children,
                      }: CommonSelectProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const button = useRef<LegacyRef<HTMLButtonElement | null>>(null);
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
           w={'100%'}
          justifyContent={'space-between'}
          borderBottom={'1px solid'}
          borderBottomColor={'lightgrey4.500'}
          p={'8px'}>
          {/* @ts-ignore */}
          <Button ref={button}
                  rightIcon={(dropDownButton ?? <ChevronDownIcon />) as any}
                  background={'transparent'}
                  w={'100%'}
                  justifyContent={'space-between'}
                  m={0}
                  fontSize={'sm'}
                  onBlur={onClose}
                  colorScheme={'white'}
                  color={'black'}
                  p={'0 10px'}
                  _focus={{}}
                  _hover={{}}
          >
            {selectedNode ?? selectedLabel ?? defaultSelectedLabel ?? ''}
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
