import type { CommonModalProps } from '@/model/common';
import CommonModal from '@components/common/modal/CommonModal';
import { Box, Button, Heading, Spacer, Text, useToast } from '@chakra-ui/react';
import { common, myPage } from '@/messages.json';
import type { ExperienceRequest, ExperienceListResponse } from '@/model/mypage';
import { useEffect, useState } from 'react';
import FormLabelInput from '@components/common/FormLabelInput';
import useErrorHandler from '@/hooks/useErrorHandler';
import MyPageApi from '@/api/MyPageApi';
import { BASIC_FAIL } from '@/model/toast';

interface ExperienceModalProps extends CommonModalProps {
  isEdit: boolean,
  originExp: ExperienceListResponse | null
}

const ExperienceModal =
  ({ isEdit, originExp, isOpen, callBack, onClose }: ExperienceModalProps) => {
    const toast = useToast();
    const [title, setTitle] = useState('');
    const [experience1, setExperience1] = useState('');
    const [experience2, setExperience2] = useState('');
    useEffect(() => {
      if (isEdit && originExp) {
        initData(originExp);
        return;
      }
      initData();
    }, [isOpen, isEdit, originExp]);

    const onSubmit = (e) => {
      e.preventDefault();
      if (!title || title.length < 0) {
        toast(BASIC_FAIL);
        return;
      }

      const request: ExperienceRequest = {
        title,
        experienceDetailList: [
          { content: experience1 },
          { content: experience2 },
        ],
      };

      if (isEdit && originExp) {
        MyPageApi.updateExperience(originExp._id, request)
                 .then(callBack)
                 .catch(useErrorHandler)
                 .finally(onClose);
        return;
      }

      MyPageApi.createExperience(request)
               .then(callBack)
               .catch(useErrorHandler)
               .finally(onClose);
    };

    const initData = (data?: ExperienceRequest) => {
      setTitle(data?.title ?? '');
      setExperience1(data?.experienceDetailList[0].content ?? '');
      setExperience2(data?.experienceDetailList[1].content ?? '');
    };

    return <CommonModal isOpen={isOpen} onClose={onClose} w={'980px'}>
      <CommonModal.Header>
        <Heading textAlign={'center'}
                 pt={5}>
          {isEdit ? myPage.editMyExperience : myPage.addMyExperience}
        </Heading>
        <Text fontSize={'sm'}
              color={'lightgrey4.500'}
              fontWeight={'normal'}
              textAlign={'center'}>
          {myPage.addMyExperienceDesc}
        </Text>
      </CommonModal.Header>
      <form onSubmit={onSubmit}>
        <CommonModal.Body>
          <Box p={['0 20px', '0 80px']}>

            <FormLabelInput label={myPage.subTitle}
                            required
                            value={title}
                            onChange={setTitle}
                            placeholder={myPage.subTitlePlaceholder}
                            description={myPage.subtitleDesc}
                            inputType={'TEXT'} />
            <Spacer />
            <FormLabelInput label={myPage.detail1}
                            value={experience1}
                            onChange={setExperience1}
                            placeholder={myPage.detail1Placeholder}
                            description={myPage.detail1Desc}
                            inputType={'TEXT'} />
            <FormLabelInput label={myPage.detail2}
                            value={experience2}
                            onChange={setExperience2}
                            placeholder={myPage.detail2Placeholder}
                            description={myPage.detail2Desc}
                            inputType={'TEXT'} />

          </Box>
        </CommonModal.Body>
        <CommonModal.Footer>
          <Button colorScheme={'main'}
                  borderRadius={'50px'}
                  type={'submit'}
                  m={'auto'}
                  mb={'40px'}
                  w={'200px'}
                  h={'56px'}>
            {common.save}
          </Button>
        </CommonModal.Footer>
      </form>
    </CommonModal>;
  };

export default ExperienceModal;
