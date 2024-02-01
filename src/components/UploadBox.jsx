import React, { useState } from "react";
import uploadIcon from "../assets/UploadIcon1.png";
import excel from "../assets/Microsoft_Office_Excel.png";

const UploadBox = () => {
  const [fileName, setFileName] = useState("");
  const [fileLabel, setFileLabel] = useState("browse");

  function updateFileLabel(e) {
    if (e.target.files.length > 0) {
      setFileLabel('Remove');
      setFileName(e.target.files[0].name);
    } else {
      setFileLabel('browse');
      setFileName('');
    }
  }

  function removeFile() {
    setFileLabel('browse');
    setFileName('');
    document.getElementById('file-upload').value = ''; // Clear the selected file
  }

  return (
    <div className="w-[90%] md:w-[60%] m-auto bg-white p-1 rounded-md">
      <div className="h-[400px] border m-4 mb-5 rounded font-semibold flex flex-col justify-center">
        <div>
          <img src={excel} className="m-auto" />
          <span id="text-label">
            {fileName ? `File: ${fileName} ` : 'Drop your excel sheet here or '}
          </span>
          <label htmlFor="file-upload" className={`text-blue-700 cursor-pointer ${fileLabel}`} onClick={removeFile}>
            {fileLabel}
          </label>
          <input type="file" id="file-upload" hidden onChange={updateFileLabel} />
        </div>
      </div>

      <div className="flex">
        <button className="flex-grow bg-[#605BFF] text-white flex justify-center gap-1">
          <img src={uploadIcon} />
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
