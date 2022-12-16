import { FolderOpenOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  file: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ffffff',
  },
}));

const Multipleimage = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size="large"
  > */}
      <Upload action="" listType="picture" maxCount={3} multiple>
        <Button icon={<FolderOpenOutlined />} className={classes.file}>
          {' '}
          Multiple image
        </Button>
      </Upload>
      {/* </Space>
       */}
    </>
  );
};

export default Multipleimage;
