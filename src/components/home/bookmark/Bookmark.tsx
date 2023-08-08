import { Button, Card, CardBody, CardHeader, Flex, HStack, Text } from '@chakra-ui/react';
import BookMarkItem from '@components/home/bookmark/BookMarkItem';

const Bookmark = () => {
  return <Card w={'500px'} h={'280px'}>
    <CardHeader>
      <HStack justifyContent={'space-between'}>
        <Text>
          즐겨찾기
        </Text>
        <Button size={'sm'}>
          수정
        </Button>
      </HStack>
    </CardHeader>
    <CardBody>
      <Flex justifyContent={'center'}
            flexWrap={'wrap'}
            gap={5}>
        <BookMarkItem />
        <BookMarkItem />
        <BookMarkItem />
        <BookMarkItem />
        <Button boxShadow='md'
                borderRadius={'base'}
                textAlign={'center'}
                w={'190px'}
                h={'40px'}> +
        </Button>
      </Flex>
    </CardBody>
  </Card>;
};

export default Bookmark;
