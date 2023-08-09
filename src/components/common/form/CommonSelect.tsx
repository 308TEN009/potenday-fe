import { Box, Button, HStack, List, ListItem, Text } from '@chakra-ui/react';
import { type ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface CommonSelectProps {
  title: string;
  selectedLabel?: string;
  defaultSelectedLabel?: string;
  children: ReactNode[];
}

const CommonSelect = ({
                        title,
                        selectedLabel,
                        defaultSelectedLabel = '',
                        children
                      }: CommonSelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Box sx={{ cursor: 'pointer' }} w={'100%'}>
      <Text w={'100%'}>
        {title}
      </Text>
      <Box w={'100%'}
           role={'select'}>
        <HStack
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          justifyContent={'space-between'}
          p={'8px'}>
          <Text>{selectedLabel ?? defaultSelectedLabel}</Text>
          <Button leftIcon={<ChevronDownIcon/>}
                  background={'transparent'}
                  m={0}
                  p={0}
                  _focus={{}}
                  _hover={{}}
                  _active={{}}/>
        </HStack>
        {isDropdownOpen &&
            <List onClick={() => { setIsDropdownOpen(false) }}>
              {children}
            </List>
        }
      </Box>
    </Box>
  );
}

const CommonSelectOption = ({ children }: { children: ReactNode }) => {
  return <ListItem w={'100%'}
                   boxShadow={'md'}
                   borderRadius={'base'}
                   p={2}
                   mb={1}> {children} </ListItem>
}

CommonSelect.Option = CommonSelectOption;
export default CommonSelect;
