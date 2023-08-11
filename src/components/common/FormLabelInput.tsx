import { Box, Input, Text, Textarea } from '@chakra-ui/react';

interface LabelInput {
  label: string;
  placeholder?: string;
  value: any;
  onChange: (e) => void;
  inputType: 'TEXT' | 'TEXTAREA';
  isLast?: boolean;
}

const FormLabelInput = ({ label, placeholder = '', value, onChange, inputType, isLast }: LabelInput) => {
  return <Box mb={isLast ? 0 : '32px'} w={'100%'}>
    <Text fontSize={'sx'}
          mb={'12px'}
          color={'lightgrey3.500'}>
      {label}
    </Text>
    {inputType === 'TEXT'
      ? <Input fontSize={'sm'}
               placeholder={placeholder ?? ''}
               _placeholder={{ color: 'lightgrey4.500' }}
               focusBorderColor={'main.500'}
               variant={'flushed'}
               value={value}
               borderBottomWidth={'2px'}
               onChange={e => onChange(e.target.value)} />
      : <Textarea fontSize={'sm'}
                  h={'180px'}
                  placeholder={placeholder ?? ''}
                  _placeholder={{ color: 'lightgrey4.500' }}
                  focusBorderColor={'main.500'}
                  borderWidth={'2px'}
                  borderRadius={'8px'}
                  resize={'none'}
                  value={value}
                  onChange={e => onChange(e.target.value)} />
    }
  </Box>;
};

export default FormLabelInput;
