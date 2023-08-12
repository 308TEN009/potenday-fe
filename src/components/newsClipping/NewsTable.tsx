import {
  Box,
  Button,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { newsClipping } from '@/messages.json';
import type { NewsContents } from '@/model/newsClipping';
import SearchIcon from '@assets/icons/search-02.svg';
import SortIcon from '@assets/icons/text-align-center.svg';
import CheckIcon from '@assets/icons/checkmark-circle-grey.svg';
import { useMemo, useState } from 'react';

interface NewsTableProps {
  tableData: NewsContents[];
}

const tableHeaderStyle = {
  color: 'lightgrey4.500',
  fontWeight: 'normal',
  borderRight: '1px solid',
  borderColor: 'lightgrey2.500',
  overflow: 'hidden',
  fontSize: 'sm',
};

const { color, ...tableCellStyle } = tableHeaderStyle;
const NewsTable = ({ tableData }: NewsTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderByOlder, setOrderByOlder] = useState(false);
  const [keyword, setKeyword] = useState('');
  const sortedTableData = useMemo(() => {
    const sortedData = [...tableData];
    if (orderByOlder) {
      sortedData.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    } else {
      sortedData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
    return sortedData;
  }, [tableData, orderByOlder]);

  const filteredTableData = useMemo(() => {
    return sortedTableData.filter(row => {
      return row.companyName.toLowerCase().includes(keyword.toLowerCase());
    });
  }, [sortedTableData, keyword]);

  const onSearchKeyword = (value) => {
    setKeyword(value);
  };

  return <>
    <HStack justifyContent={'space-between'}
            alignItems={'center'}
            mt={'60px'}>
      <InputGroup w={'645px'}
                  h={'60px'}>
        <InputLeftElement pointerEvents={'none'} p={'28px 0'} ml={'28px'}>
          <Img src={SearchIcon} />
        </InputLeftElement>
        <Input fontSize={'sm'}
               value={keyword}
               onChange={e => onSearchKeyword(e.target.value)}
               borderColor={'transparent'}
               bgColor={'white'}
               focusBorderColor={'sub1.500'}
               placeholder={newsClipping.description}
               boxShadow={`
                         -2px 2px 4px 0 rgba(230, 230, 230, 0.2),
                         2px -2px 4px 0 rgba(230, 230, 230, 0.2),
                         -2px -2px 4px 0 rgba(255, 255, 255, 0.9),
                         2px 2px 5px 0 rgba(230, 230, 230, 0.9)`}
               p={'28px 18px 28px 68px'} />
      </InputGroup>
      <Box>
        <Button colorScheme={'none'} mr={'40px'}>
          <Img src={CheckIcon} mr={'16px'} />
          <Text fontSize={'sm'}
                color={'lightgrey4.500'}>
            {newsClipping.select}
          </Text>
        </Button>
        <Popover onClose={onClose}
                 isOpen={isOpen}
                 onOpen={onOpen}>
          <PopoverTrigger>
            <Button colorScheme={'none'}>
              <Img src={SortIcon} mr={'16px'} />
              <Text fontSize={'sm'}
                    color={'lightgrey4.500'}>
                {newsClipping.sort}
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent w={'113px'}
                          h={'94px'}
                          p={'12px 0'}>
            <Button colorScheme={'none'}
                    fontSize={'sx'}
                    lineHeight={'20px'}
                    color={'lightgrey4.500'}
                    p={'0'}
                    pb={'18px'}
                    onClick={() => {
                      setOrderByOlder(false);
                      onClose();
                    }}>
              {newsClipping.lastOrder}
            </Button>
            <Button colorScheme={'none'}
                    lineHeight={'20px'}
                    fontSize={'sx'}
                    color={'lightgrey4.500'}
                    p={'0'}
                    onClick={() => {
                      setOrderByOlder(true);
                      onClose();
                    }}>
              {newsClipping.oldestOrder}
            </Button>
          </PopoverContent>
        </Popover>
      </Box>
    </HStack>

    <Box bg={'white'}
         mt={'20px'}
         boxShadow={`
              inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3),
              inset -1px -1px 2px 0 rgba(237, 237, 237, 0.5),
              6px -6px 12px 0 rgba(237, 237, 237, 0.2),
              6px -6px 12px 0 rgba(255, 255, 255, 0.2),
              6px -6px 15px 0 rgba(237, 237, 237, 0.9),
              `}
         borderRadius={'8px'}>
      <Table>
        <colgroup>
          <col width={'77px'} />
          <col width={'225px'} />
          <col width={'518px'} />
          <col width={'741px'} />
          <col width={'119px'} />
          <col />
        </colgroup>
        <Thead>
          <Tr>
            <Th {...tableHeaderStyle}>{newsClipping.tableHeader.rowNo}</Th>
            <Th {...tableHeaderStyle}>{newsClipping.tableHeader.companyName}</Th>
            <Th {...tableHeaderStyle}>{newsClipping.tableHeader.articleTitle}</Th>
            <Th {...tableHeaderStyle}>{newsClipping.tableHeader.memo}</Th>
            <Th {...tableHeaderStyle} borderRight={'none'}>{newsClipping.tableHeader.link}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTableData
            .map((row, index) =>
              <Tr fontSize={'sm'} key={row._id}>
                <Td {...tableCellStyle}>{index + 1}</Td>
                <Td {...tableCellStyle}>{row.companyName}</Td>
                <Td {...tableCellStyle}>{row.title}</Td>
                <Td {...tableCellStyle}>{row.content}</Td>
                <Td {...tableCellStyle}>{row.url}</Td>
              </Tr>)}
        </Tbody>
      </Table>
    </Box>
  </>;
};

export default NewsTable;
