import { useState } from 'react';

export const useMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prevState => !prevState);
  return [isOpen, toggleMenu];
};
