import type { CommonModalProps } from '@/model/common';
import CommonModal from '@components/common/modal/CommonModal';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { myPage, common } from '@/messages.json';
import type { ExperienceRequest } from '@/model/mypage';
import { useEffect, useState } from 'react';
import FormLabelInput from '@components/common/FormLabelInput';
import MyPageApi from '@/api/MyPageApi';
import useErrorHandler from '@/hooks/useErrorHandler';

interface ExperienceModalProps extends CommonModalProps {
  originExperience?: ExperienceRequest;
}

const ExperienceModal =
  ({ isOpen, onClose, originExperience, callBack }: ExperienceModalProps) => {
    const [title, setTitle] = useState(originExperience?.title ?? '');
    const [experience1, setExperience1] = useState(originExperience?.experienceDetailList[0].content ?? '');
    const [experience2, setExperience2] = useState(originExperience?.experienceDetailList[0].content ?? '');

    useEffect(() => {
      setTitle('');
      setExperience1('');
      setExperience2('');
    }, [isOpen]);

    const onSubmit = (e) => {
      e.preventDefault();

      const request: ExperienceRequest = {
        title,
        experienceDetailList: [
          { content: experience1 },
          { content: experience2 },
        ],
      };

      console.log(request);
      MyPageApi.createExperience(request)
               .then(callBack)
               .catch(useErrorHandler)
               .finally(onClose);
    };

    return <CommonModal isOpen={isOpen} onClose={onClose} w={'980px'}>
      <CommonModal.Header>
        <Heading textAlign={'center'}
                 pt={5}>
          {myPage.addMyExperience}
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
          <Box p={'0 20px'}>

            <FormLabelInput label={myPage.subTitle}
                            value={title}
                            onChange={setTitle}
                            placeholder={myPage.subTitlePlaceholder}
                            description={myPage.subtitleDesc}
                            inputType={'TEXT'} />
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
