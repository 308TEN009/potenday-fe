import { Box, Button, Flex, Heading, HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
import { common, myPage } from '@/messages.json';
import ExperienceList from '@components/myPage/ExperienceList';
import addIcon from '@assets/icons/plus-sign-circle.svg';
import ExperienceModal from '@components/myPage/ExperienceModal';
import { useEffect, useState } from 'react';
import type { ExperienceListResponse } from '@/model/mypage';
import MyPageApi from '@/api/MyPageApi';
import useErrorHandler from '@/hooks/useErrorHandler';

export const ExperienceContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [experienceList, setExperienceList] = useState<ExperienceListResponse[]>([]);

  useEffect(() => {
    retrieveExperienceList();
  }, []);

  const retrieveExperienceList = () =>
    MyPageApi.retrieveExperienceList()
             .then(setExperienceList)
             .catch(useErrorHandler);
  return <Box>
    <HStack justifyContent={'space-between'}>
      <Box>
        <Heading fontSize={'md'}
                 fontWeight={'normal'}>
          {myPage.myExperienceList}
        </Heading>
        <Text fontSize={'sm'}
              color={'lightgrey4.500'}>
          {myPage.myExperienceListDesc}
        </Text>
      </Box>
      <Flex justifyContent={'end'} p={5}>
        <Button fontSize={['sm', 'md']}
                colorScheme={'white'}
                bg={'white'}
                color={'darkgrey2.500'}
                p={'20px 25px'}
                border={'1px solid'}
                borderColor={'lightgrey4.500'}
                onClick={onOpen}>
          <Image src={addIcon} boxSize={['20px', '24px']} mr={['16px', '10px']} />
          {common.add}
        </Button>
        <ExperienceModal isOpen={isOpen} onClose={onClose} callBack={retrieveExperienceList} />
      </Flex>
    </HStack>
    <ExperienceList experienceList={experienceList} />
  </Box>;
};

export default ExperienceContainer;
