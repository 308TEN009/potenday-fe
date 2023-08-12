import {
  Box,
  Button, Center,
  Heading,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { newsClipping } from '@/messages.json';
import SearchIcon from '@assets/icons/search-02.svg';
import NewsTable from '@components/newsClipping/NewsTable';
import SortIcon from '@assets/icons/text-align-center.svg';
import AddIcon from '@assets/icons/plus-sign-circle-grey.svg';

const NewsClipping = () => {
  return <Box wordBreak={'keep-all'} m={['50px 0px', '106px 120px 0px 120px']}>
    <Heading fontWeight={'normal'}>
      {newsClipping.title}
    </Heading>
    <Text fontSize={'sm'} color={'lightgrey4.500'}>
      {newsClipping.description}
    </Text>
    <HStack justifyContent={'space-between'}
            alignItems={'center'}
            mt={'60px'}>
      <InputGroup w={'645px'}
                  h={'60px'}>
        <InputLeftElement pointerEvents={'none'} p={'28px 0'} ml={'28px'}>
          <Img src={SearchIcon} />
        </InputLeftElement>
        <Input fontSize={'sm'}
               borderColor={'transparent'}
               bgColor={'white'}
               focusBorderColor={'sub1.500'}
               boxShadow={`
                         -2px 2px 4px 0 rgba(230, 230, 230, 0.2),
                         2px -2px 4px 0 rgba(230, 230, 230, 0.2),
                         -2px -2px 4px 0 rgba(255, 255, 255, 0.9),
                         2px 2px 5px 0 rgba(230, 230, 230, 0.9)`}
               p={'28px 18px 28px 68px'} />
      </InputGroup>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme={'none'}>
            <Img src={SortIcon} mr={'16px'} />
            <Text fontSize={'sx'}
                  color={'lightgrey4.500'}>
              {newsClipping.sort}
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent w={'113px'} h={'90px'}>
          <Button colorScheme={'none'}
                  fontSize={'sx'}
                  color={'lightgrey4.500'}>
            {newsClipping.lastOrder}
          </Button>
          <hr />
          <Button colorScheme={'none'}
                  fontSize={'sx'}
                  color={'lightgrey4.500'}>
            {newsClipping.oldestOrder}
          </Button>
        </PopoverContent>
      </Popover>
    </HStack>
    <NewsTable tableData={[]} />
    <Center>
      <Button colorScheme={'none'}
              backgroundImage={`url(${AddIcon})`}
              backgroundPosition={'center center'}
              backgroundSize={'contain auto'}
              backgroundRepeat={'no-repeat'} />
    </Center>
  </Box>;
};

export default NewsClipping;
