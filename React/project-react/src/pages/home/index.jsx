import { Button, Input } from '@/components/ui';
import axios from 'axios';
import { useState } from 'react';
const HomePage = () => {
  return (
    <div className='container py-4'>
      <h1 className='border-b-2 border-b-[#444444] text-center text-4xl'>
        Multiple File Upload
      </h1>
      <MultiFileUploader />
    </div>
  );
};

export default HomePage;

const MultiFileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleSelectFiles = (e) => {
    if (e.target.files) {
      console.log([...e.target.files]);
      setFiles([...e.target.files]);
    }

    console.log(files);
  };
  const handleResetFiles = () => {
    setFiles([]);
  };

  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex items-center justify-center gap-3'>
        <Input
          type='file'
          multiple
          className=' w-1/3 border-white text-white'
          onChange={handleSelectFiles}
        />
        <Button className='w-1/3'>Upload</Button>
        <Button className='w-1/3' onClick={handleResetFiles}>
          Clear Files
        </Button>
      </div>

      <div className='min-h-0 flex-1 flex-col gap-3 overflow-y-auto'>
        {files.map((file, index) => (
          <div key={index} className='mb-2 rounded-md bg-[#444444] px-3 py-5'>
            {file && file?.name && <p>{file.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

