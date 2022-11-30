import { Toaster } from 'react-hot-toast';
import { useToaster } from 'react-hot-toast/headless';

export const Notification = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      //   toastOptions={{
      //     // Define default options
      //     className: '',
      //     duration: 5000,
      //     style: {
      //       background: '#363636',
      //       color: '#fff',
      //     },

      //     // Default options for specific types
      //     success: {
      //       duration: 3000,
      //       theme: {
      //         primary: 'green',
      //         secondary: 'black',
      //       },
      //     },
      //   }}
    />
  );
};
