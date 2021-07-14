import useSaveStorage from '../../hooks/useSaveStorage';
import useSetStateFromStorage from '../../hooks/useSetStateFromStorage';

const StorageHandler = () => {
  useSetStateFromStorage();
  useSaveStorage();
  return null;
};

export default StorageHandler;
