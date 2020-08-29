import { toast } from 'react-toastify';

const useNotification = () => {
  const success = (message, settings) => {
    toast(message);
  };

  return {
    success,
  };
};

export default useNotification;
