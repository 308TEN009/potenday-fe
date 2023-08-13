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
import ActiveCheckIcon from '@assets/icons/checkmark-active.svg';
import InActiveCheckIcon from '@assets/icons/checkmark-inactive.svg';
import { useEffect, useMemo, useState } from 'react';
import LinkIcon from '@assets/icons/link-01.svg';
import DeleteIcon from '@assets/icons/delete-icon.svg';
import NewsApi from '@/api/NewsApi';
import useErrorHandler from '@/hooks/useErrorHandler';

interface NewsTableProps {
  tableData: NewsContents[];
  callback: () => any;
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
const NewsTable = ({ tableData, callback }: NewsTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [renderTableData, setRenderTableData] = useState<NewsContents[]>([]);
  const [orderByOlder, setOrderByOlder] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);
  const sortedTableData = useMemo(() => {
    const sortedData = [...renderTableData];
    if (orderByOlder) {
      sortedData.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    } else {
      sortedData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
    return sortedData;
  }, [renderTableData, orderByOlder]);
  const filteredTableData = useMemo(() => {
    return sortedTableData.filter(row => {
      return row.companyName.toLowerCase().includes(keyword.toLowerCase());
    });
  }, [sortedTableData, keyword]);

  useEffect(() => {
    setRenderTableData(tableData.map(data => ({ ...data, isChecked: false })));
  }, [tableData]);

  const onSearchKeyword = (value) => {
    setKeyword(value);
  };

  const onCheck = (id) => {
    setRenderTableData(renderTableData.map(
      data => data._id === id
        ? ({ ...data, isChecked: !data.isChecked })
        : data,
    ));
  };

  const onAllSelect = () => {
    if (!deleteMode) {
      setDeleteMode(true);
      return;
    }
    const isAllSelected = renderTableData.filter(data => data.isChecked).length === renderTableData.length;
    setRenderTableData(renderTableData.map(
      data => ({ ...data, isChecked: !isAllSelected }),
    ));
  };

  const onDelete = () => {
    Promise.all(renderTableData
      .filter(data => data.isChecked)
      .map(async (data) => NewsApi.deleteNews(data._id)))
           .then(callback)
           .catch(useErrorHandler);
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
        <Button colorScheme={'none'} mr={'40px'} onClick={onAllSelect}>
          <Img src={CheckIcon} mr={'16px'} boxSize={'28px'} />
          <Text fontSize={'sm'}
                color={'lightgrey4.500'}>
            {deleteMode
              ? newsClipping.selectAll
              : newsClipping.select}
          </Text>
        </Button>
        {deleteMode
          ? <Button colorScheme={'none'} onClick={onDelete}>
            <Img src={DeleteIcon}
                 mr={'16px'}
                 boxSize={'28px'} />
            <Text fontSize={'sm'}
                  color={'lightgrey4.500'}>
              {newsClipping.delete}
            </Text>
          </Button>
          : <Popover onClose={onClose}
                     isOpen={isOpen}
                     onOpen={onOpen}>
            <PopoverTrigger>
              <Button colorScheme={'none'}>
                <Img src={deleteMode ? DeleteIcon : SortIcon}
                     mr={'16px'}
                     boxSize={'28px'} />
                <Text fontSize={'sm'}
                      color={'lightgrey4.500'}>
                  {deleteMode ? newsClipping.delete : newsClipping.sort}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent w={'113px'}
                            h={'94px'}
                            p={'12px 0'}>
              <Button colorScheme={'none'}
                      fontSize={'sm'}
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
                      fontSize={'sm'}
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
        }
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
            <Th {...tableHeaderStyle} textAlign={'center'}>
              {deleteMode ? newsClipping.select : newsClipping.tableHeader.rowNo}
            </Th>
            <Th {...tableHeaderStyle} textAlign={'center'}>{newsClipping.tableHeader.companyName}</Th>
            <Th {...tableHeaderStyle} textAlign={'center'}>{newsClipping.tableHeader.articleTitle}</Th>
            <Th {...tableHeaderStyle} textAlign={'center'}>{newsClipping.tableHeader.memo}</Th>
            <Th {...tableHeaderStyle} textAlign={'center'} borderRight={'none'}>{newsClipping.tableHeader.link}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTableData
            .map((row, index) =>
              <Tr fontSize={'sm'} key={row._id}>
                <Td {...tableCellStyle}>
                  {deleteMode
                    ? <Button colorScheme={'none'}
                              bgImg={row.isChecked ? ActiveCheckIcon : InActiveCheckIcon}
                              m={'auto'}
                              bgRepeat={'no-repeat'}
                              bgPos={'center'}
                              onClick={() => onCheck(row._id)}
                              bgSize={'100%'} />
                    : index + 1}
                </Td>
                <Td {...tableCellStyle}>{row.companyName}</Td>
                <Td {...tableCellStyle}>{row.title}</Td>
                <Td {...tableCellStyle}>{row.content}</Td>
                <Td {...tableCellStyle}>
                  {
                    row.url &&
                    <Button colorScheme={'none'}
                            bgImg={LinkIcon}
                            m={'auto'}
                            bgRepeat={'no-repeat'}
                            bgPos={'center'}
                            bgSize={'100%'}
                            onClick={() => window.open(row.url)}
                    />
                  }
                </Td>
              </Tr>)}
        </Tbody>
      </Table>
    </Box>
  </>;
};

export default NewsTable;
