import { useMediaQuery } from '@chakra-ui/react';

const useFlexDir = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return isMobile ? "column" : "row";
}

export default useFlexDir;
