import { useState } from 'react';

export const useMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  return [isOpen, openMenu, closeMenu];
};
