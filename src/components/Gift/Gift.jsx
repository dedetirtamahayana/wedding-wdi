import React from "react";
import { Button } from "@material-tailwind/react";
import clipboard from "clipboard-copy";
const Gift = () => {
  const copyToClipboard = () => {
    const rekeningText = "7730608190";
    clipboard(rekeningText);
  };
  return (
    <div className='mx-auto py-20 bg-gift'>
      <div className='text-center '>
        <h2 className='text-3xl text-gold custom-text'>Wedding Gift</h2>
        <div className='text-white'>
          <p className='w-3/5 mx-auto py-3'>
            Tanpa mengurangi rasa hormat, bagi yang ingin memberikan Wedding
            Gift sebagai hadiah untuk pernikahan kami, silakan transfer ke
            rekening
          </p>
          <div className='py-1'>
            <span>Bank BCA</span>
          </div>
          <div className='py-1'>
            <span>7730608190</span>
          </div>

          <div className='py-1'>
            <span> a/n Kadek Wahyudi Remondo</span>
          </div>
          <div className='flex items-center justify-center py-2'>
            <Button
              className='flex items-center bg-gold text-black'
              onClick={copyToClipboard}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z'
                  clipRule='evenodd'
                />
              </svg>
              Copy Rekening
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
