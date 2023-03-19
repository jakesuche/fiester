import { display, style } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Withclient = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
};

export default Withclient;