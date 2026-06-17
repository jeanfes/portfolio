import { useFBO } from '@react-three/drei';
import { useRef } from 'react';

const useDoubleFBO = (width, height, options) => {
  const read = useFBO(width, height, options);
  const write = useFBO(width, height, options);

  const fboRef = useRef({
    read,
    write,
    swap: () => {
      const temp = fboRef.current.read;
      fboRef.current.read = fboRef.current.write;
      fboRef.current.write = temp;
    },
    dispose: () => {
      fboRef.current.read?.dispose();
      fboRef.current.write?.dispose();
    },
  });

  const lastRead = useRef(read);
  const lastWrite = useRef(write);
  if (lastRead.current !== read || lastWrite.current !== write) {
    fboRef.current.read = read;
    fboRef.current.write = write;
    lastRead.current = read;
    lastWrite.current = write;
  }

  return fboRef.current;
};

export default useDoubleFBO;
