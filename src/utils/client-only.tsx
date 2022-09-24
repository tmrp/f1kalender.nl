import { useEffect, useState } from 'preact/hooks';

const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return {
    [`${hasMounted === true}`]: <div {...delegated}>{children}</div>,
    [`${hasMounted === false}`]: null,
  }.true;
};
export default ClientOnly;
