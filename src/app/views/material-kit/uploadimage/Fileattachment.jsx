import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, TextField, FormHelperText } from '@material-ui/core';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import ReactFileReader from 'react-file-reader';
import { read } from 'xlsx';

function Fileattachment(props) {
  const [data1, setdata] = useState({});
  console.log(props);
  useEffect(() => {
    setdata(props.props);
  }, [props]);

  // 1. Register the column and header name to be extracted in excel.
  const sheetInfo = {
    sheet: 'ProductLibrary',
    cell: [
      { col: null, header: null }, // cell[0]
      { col: 'A', header: 'Attr' }, // cell[1]
      { col: 'B', header: 'Item' }, // cell[2]
      { col: 'C', header: 'Value' }, // cell[3]
    ],
  };

  const [BtnPlaceholder, setBtnPlaceholder] = useState('Click to upload file');
  const [UploadMsg, setUploadMsg] = useState('');

  function handleFiles(e) {
    var files = e[0],
      f = files;
    let name = e[0].name;
    console.log(name);
    setBtnPlaceholder(name);
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);

      var workbook = read(data, { type: 'array' });
      let finaldata = [];
      let cell_length = sheetInfo.cell.length;

      if (workbook.Sheets[sheetInfo.sheet] !== undefined) {
        for (let i = 1; i < cell_length; i++) {
          let row_count = 2; // skip row1 header
          do {
            finaldata[row_count] = {
              ...finaldata[row_count],
              [sheetInfo.cell[i].header]:
                workbook.Sheets[sheetInfo.sheet][sheetInfo.cell[i].col + row_count].v,
            };

            row_count++;
          } while (workbook.Sheets[sheetInfo.sheet][sheetInfo.cell[i].col + row_count]);
        }
        console.log('Correct Excel Uploaded!');
        setUploadMsg('Uploaded Successfully!');
      } else {
        console.log('Wrong Excel Uploaded!');
        setUploadMsg('Wrong Excel Uploaded!');
      }
      console.log(finaldata);
      // setExcelDataFN(finaldata,true,name);
    };
    // reader.readAsText(files);
    reader.readAsArrayBuffer(f);
  }

  return (
    <>
      <FormControl
        fullWidth
        variant="outlined"
        margin="0px"
        style={{
          userSelect: 'none',
        }}
      >
        <InputLabel
          variant="outlined"
          shrink
          // required={true}
          style={{
            marginLeft: -4,
            background: 'white',
            paddingLeft: 6,
            paddingRight: 4,
          }}
        >
          {data1.label}
        </InputLabel>

        <ReactFileReader handleFiles={handleFiles} fileTypes={'.xlsx'}>
          <TextField
            variant="outlined"
            fullWidth
            InputProps={{ style: { color: 'black' } }}
            value={BtnPlaceholder}
            disabled={true}
          />
          <VerticalAlignTopOutlined
            type="upload"
            style={{
              position: 'absolute',
              padding: '18px',
              right: 0,
              top: 0,
              color: 'grey',
            }}
          />
          <Icon />
        </ReactFileReader>
        <FormHelperText id="component-error-text">{UploadMsg}</FormHelperText>
      </FormControl>
    </>
  );
}
export default Fileattachment;
