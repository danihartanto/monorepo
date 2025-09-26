// packages/shared/src/components/CustomButton.tsx
import React from 'react';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export const CustomButton: React.FC<ButtonProps> = ({ onPress, title }) => {
  return (
    <button onClick={onPress} style={{ padding: 10, backgroundColor: 'blue', color: 'white' }}>
      {title}
    </button>
  );
};