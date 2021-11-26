import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';
import './FileUpload.css';

const FileUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    //let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      //fileIsValid = true;
    } else {
      setIsValid(false);
      //fileIsValid = false;
    }
//    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
  
    filePickerRef.current.click();
    props.getFile(file) ;
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg,.mkv,.mp3,.mp4,.wav"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
      <Button type="button" onClick={pickImageHandler}>
          PICK FILE
        </Button>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>You can pick a file.</p>}
        </div>
        
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default FileUpload;
