import type { ExperienceListResponse } from '@/model/mypage';
import { Box, Flex, Img, ListItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import selectedExpListStore from '@/store/selectedExpListStore';
import CheckedIcon from '@/assets/icons/checked-icon.svg';
import UnCheckedIcon from '@/assets/icons/unchecked-icon.svg';

interface CheckExperienceItemProps {
  index: null;
  experience: ExperienceListResponse;
}

const CheckExperienceItem = ({ index, experience }: CheckExperienceItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [checkedExpItem, setCheckedExpItem] = useRecoilState(selectedExpListStore);

  useEffect(() => {
    setIsChecked(checkedExpItem.currentSelected.map(it => it._id).includes(experience._id));
  }, []);

  const onCheck = () => {
    console.log(checkedExpItem);
    const checked = !isChecked;
    if (!checked) {
      setCheckedExpItem((pre) =>
        ({
          ...pre,
          currentSelected: pre.currentSelected.filter(({ _id }) => _id !== experience._id),
        }));
    }
    if (checked && checkedExpItem.currentSelected.length < 3) {
      setCheckedExpItem(prev => ({
        ...prev,
        currentSelected: [...prev.currentSelected, experience],
      }));
      setIsChecked(checked);
    }
  };

  const getFontColor = () => isChecked ? 'sub1.500' : 'darkgrey2.500';

  return <ListItem>
    <Flex border={'2px solid'}
          borderRadius={'8px'}
          p={'20px 35px'}
          borderColor={'main.500'}
          bgColor={isChecked ? '#6C74CD22' : 'white'}
          onClick={onCheck}
          mt={'24px'}>
      <Box w={'68px'} m={'auto 0'}>
        <Img w={'38px'} src={isChecked ? CheckedIcon : UnCheckedIcon} />
      </Box>
      <Box fontSize={'xs'}>
        <Text mb={'8px'}
              color={getFontColor()}
              fontSize={'sm'}>
          {experience.title}
        </Text>
        <Text color={getFontColor()}>
          {experience.experienceDetailList[0].content}
        </Text>
        <Text color={getFontColor()}>
          {experience.experienceDetailList[1].content}
        </Text>
      </Box>
    </Flex>
  </ListItem>;
};

export default CheckExperienceItem;
