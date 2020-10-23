import { useState } from 'react';

export const useWeatherId = () => {
  const [id, setId] = useState(0);
  const changeId = id => setId(id);
  return [id, changeId];
};
