import { useState } from 'react';

export const Start = () => {
  const [lorem, setLorem] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, numquam!'
  );

  return <div>{lorem}</div>;
};
