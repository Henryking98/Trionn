"use client"

import React from 'react';

import { useCursorMovement } from '@/hooks/useCursorMovement';
import { useHoverEffects } from '@/hooks/useHoverEffects';
import { useMagneticEffects } from '@/hooks/useMagneticEffects';

const CustomCursor: React.FC = () => {
  useCursorMovement();
  useHoverEffects();
  useMagneticEffects();

  return <div className="tr__cursor"></div>;
};

export default CustomCursor;
