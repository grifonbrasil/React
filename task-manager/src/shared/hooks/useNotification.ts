import { toast } from 'react-toastify';

const useNotification = () => {
  const success = (message: string) => {
    toast(message);
  };

  return {
    success,
  };
};

export default useNotification;
