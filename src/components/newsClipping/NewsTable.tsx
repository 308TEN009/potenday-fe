import { Box, Table, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { newsClipping } from '@/messages.json';
import type { NewsContents } from '@/model/newsClipping';

interface NewsTableProps {
  tableData: NewsContents[];
}

const tableHeaderStyle = {
  color: 'lightgrey4.500',
  fontWeight: 'normal',
  borderRight: '1px solid',
  borderColor: 'lightgrey2.500',
};

const { color, ...tableCellStyle } = tableHeaderStyle;
const NewsTable = ({ tableData }: NewsTableProps) => {
  return <Box bg={'white'}
              mt={'20px'}
              boxShadow={`
              inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3),
              inset -1px -1px 2px 0 rgba(237, 237, 237, 0.5),
              6px -6px 12px 0 rgba(237, 237, 237, 0.2),
              6px -6px 12px 0 rgba(255, 255, 255, 0.2),
              6px -6px 15px 0 rgba(237, 237, 237, 0.9),
              `}
              borderRadius={'8px'}>
    <Table color={'lightgrey4.500'} variant={'striped'}>
      <colgroup>
        <col width={'77px'} />
        <col width={'225px'} />
        <col width={'518px'} />
        <col width={'741px'} />
        <col width={'119px'} />
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
    </Table>
    <Table>
      <colgroup>
        <col width={'77px'} />
        <col width={'225px'} />
        <col width={'518px'} />
        <col width={'741px'} />
        <col width={'119px'} />
      </colgroup>
      <Thead>
        {tableData.map((row, index) =>
          <Tr fontSize={'xs'}>
            <Td {...tableCellStyle}>{index + 1}</Td>
            <Td {...tableCellStyle}>{row.title}</Td>
            <Td {...tableCellStyle}>{row.title}</Td>
            <Td {...tableCellStyle}>{row.content}</Td>
            <Td {...tableCellStyle}>{row.title}</Td>
          </Tr>)}
      </Thead>
    </Table>
  </Box>;
};

export default NewsTable;
