import { List } from '@chakra-ui/react';
import CoverLatterItem from '@components/home/coverLetter/CoverLatterItem';

const CoverLatterList = () => {
  const dummyData = [
    {
      coverLatterKey: 0,
      companyName: '삼성전자',
      duty: '마케팅',
      status: '작성중',
    },
    {
      coverLatterKey: 1,
      companyName: '삼성전자',
      duty: '마케팅',
      status: '작성중',
    },
  ];

  return <List mt={'10px'}>
    {dummyData.map(it => <CoverLatterItem key={it.coverLatterKey} {...it} />)}
  </List>;
};

export default CoverLatterList;
