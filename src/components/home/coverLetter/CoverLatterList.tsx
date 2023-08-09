import { Grid } from '@chakra-ui/react';
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

  return <Grid mt={'10px'} templateColumns={'repeat(2, 470px)'} gap={1}>
    {dummyData.map(it => <CoverLatterItem key={it.coverLatterKey} {...it} />)}
  </Grid>;
};

export default CoverLatterList;
