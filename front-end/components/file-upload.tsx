import React, { useState } from 'react';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  //   const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  //upload
  const handleFile = () => {};
  return (
    <label
      className="border-2 border-wisteria rounded-xl mt-20 text-center py-4 px-6 w-1/3 mx-auto cursor-pointer"
      onChange={changeHandler}
      htmlFor="trackinput"
    >
      <p className="text-white lofi-font ">Upload your track here</p>
      <input type="file" className="hidden" id="trackinput" />
    </label>
  );
}
