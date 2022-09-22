import { useLazyQuery } from '@apollo/client';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { SignatureResolver } from '@root/api/graphql';
import axios from 'axios';
import { FC, useEffect, useRef, useState } from 'react';
import { ProgressBar } from '../progress-bar/ProgressBar.component';
import classes from './file-upload.module.css';

interface FileUploadProps {
  callback?: any;
}
const FileUpload: FC<FileUploadProps> = ({ ...props }) => {
  // let timer: any;
  const { callback } = props;
  const [s3Url, setUrl] = useState<any>(null);
  const [done, setDone] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any>(false);
  const [progress, setProgress] = useState<number | null>(null);
  const hiddenInput = useRef<HTMLElement | HTMLFormElement | any>(null);
  const formUpload = useRef<HTMLElement | HTMLFormElement | any>(null);
  // const submitForm = useRef<HTMLElement | HTMLFormElement | any>(null);

  const uploadFile = async () => {
    const config = {
      headers: {
        'Content-Type': selectedFile.type,
        'Content-Length': selectedFile.size,
      },
      onUploadProgress: (progressEvent: any) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      },
    };

    if (s3Url)
      await axios
        .put(s3Url, selectedFile, config)
        .then((_response) => {
          console.log(_response);
        })
        .catch((error) => console.log(error));
  };

  const [getUrl] = useLazyQuery(SignatureResolver.GET_SIGNATURE, {
    onCompleted: (data) => {
      setUrl(data.getUrl);
      formUpload.current.click();
    },
  });

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileToUpload = event.target.files && event.target.files[0];
    if (!fileToUpload) return;
    setSelectedFile(fileToUpload);
    try {
      await getUrl({ variables: { me: true } });
    } catch (error) {
      if (callback) callback(error);
      console.log('error', error);
    }
  };

  const handleClick = (event: any) => {
    console.log(event.target);
    hiddenInput.current.click();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await uploadFile();
  };

  useEffect(() => {
    if (selectedFile && s3Url) uploadFile();
  }, [selectedFile, s3Url]);

  useEffect(() => {
    if (progress == 100) {
      if (callback) callback(s3Url);
      setProgress(null);
      setSelectedFile(null);
      setDone(true);
      // timer = setTimeout(() => {
      //   setDone(false);
      // }, 2500);
    }
  }, [progress, s3Url]);

  return (
    <div className={classes['file-upload-wrapper']}>
      <div className={classes['file-upload-btn']} onClick={handleClick}>
        <ArrowUpTrayIcon className={classes['upload-icon']} />
        <span>upload file</span>
      </div>
      <div className={classes['file-upload-body']}>
        <input type="file" ref={hiddenInput} style={{ display: 'none' }} onChange={handleChange} accept="image/*" />
        <button type="submit" onClick={handleSubmit} style={{ display: 'none' }} ref={formUpload}></button>
        {progress && <ProgressBar progress={progress} />}

        {done && (
          <div className={classes['complete-indicator']}>
            <CheckCircleIcon className={classes['complete-icon']} />
          </div>
        )}
      </div>
    </div>
  );
};
export { FileUpload };
