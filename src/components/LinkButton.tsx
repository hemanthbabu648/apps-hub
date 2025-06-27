import { Button, ButtonProps } from '@mantine/core';
import React from 'react';
import { IconType } from 'react-icons';

interface LinkButtonProps extends ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  icon: IconType;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  active = false,
  children,
  onClick,
  icon,
  ...rest
}) => {
  const Icon = icon;

  return (
    <Button
      variant="subtle"
      onClick={onClick}
      fullWidth
      leftSection={<Icon className="w-5 h-5" />}
      styles={{
        root: {
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '0.5rem 1rem',
          color: 'white',
          backgroundColor: active ? '#758694' : 'transparent',
          transition: 'background-color 150ms ease',
        },
        label: {
          color: 'inherit', // inherits white from root
        },
        section: {
          marginRight: '0.5rem',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
