import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    ckt: {
     height:"200px",
    },
  }));

export default function Appeditor() {
    const classes = useStyles();
  return (
    <>

                 <CKEditor
                  
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                        
                    } }
                />
    </>
  );
};
