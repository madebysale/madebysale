import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import Button from '@material-ui/core/Button';

function Pdfdownloadbutton() {
  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `download.txt`;
    link.href = './download.txt';
    link.click();
  };

  return (
    <>
      <Button onClick={onDownload} variant="contained" color="primary">
        <GetAppIcon /> Download Sample File
      </Button>
    </>
  );
}

export default Pdfdownloadbutton;
