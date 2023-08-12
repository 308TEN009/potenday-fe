import { Button } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface MainButtonProps {
  onClick: (e: any) => void;
  w: string;
  h: string;
  fontSize?: string;
  children: ReactNode;
  rounded?: boolean;
}

const MainButton = ({ onClick, w, h, fontSize, rounded = false, children }: MainButtonProps) => {
  return <Button fontSize={fontSize ?? 'md'}
                 colorScheme={'white'}
                 bgColor={'main.500'}
                 color={'white'}
                 onClick={onClick}
                 boxSizing={'border-box'}
                 borderRadius={rounded ? '30px' : '12px'}
                 boxShadow={`
                 1px 1px 2px 0 #778DBD30,
                 -1px 1px 2px 0 #61739B50,
                 inset -1px 1px 2px 0 #61739B20,
                 inset 1px -1px 2px 0 #61739B20,
                 inset 1px 1px 2px 0 #778DBD90,
                 inset 1px 1px 3px 0 #61739B90;
                 `}
                 w={w}
                 h={h}
                 p={'16px 32px'}>
    {children}
  </Button>;
};

export default MainButton;
