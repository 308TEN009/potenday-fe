import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import TipIcon from '@assets/icons/message-question.svg';
import { useState } from 'react';

interface LabelInput {
  label: string;
  placeholder?: string;
  value: any;
  onChange: (e) => void;
  inputType: 'TEXT' | 'TEXTAREA';
  isLast?: boolean;
  description?: string;
}

const FormLabelInput = ({
                          label, placeholder = '', value, onChange
                          , inputType, isLast, description,
                        }: LabelInput) => {
  const [showDesc, setShowDesc] = useState(false);
  return <Box mb={isLast ? 0 : '32px'} w={'100%'}>
    <Text fontSize={'sx'}
          mb={'12px'}
          as={'span'}
          color={'lightgrey3.500'}>
      {label}
    </Text>
    {
      description &&
      <Button colorScheme={'none'}
              backgroundImage={`url(${TipIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'60% auto'}
              backgroundRepeat={'no-repeat'}
              onClick={() => setShowDesc(!showDesc)}
              w={'20px'} />
    }
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
    {showDesc && <Text fontSize={'xs'} color={'sub2.500'}>
      {description?.split('\n').map(msg => <>{msg}<br /></>)}
    </Text>}
  </Box>;
};

export default FormLabelInput;
