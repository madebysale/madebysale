import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useState } from 'react';

const DialogTitleRoot = styled(MuiDialogTitle)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  '& .closeButton': {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogTitle = (props) => {
  const { children, onClose } = props;
  return (
    <DialogTitleRoot disableTypography>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className="closeButton" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleRoot>
  );
};

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  '&.root': { padding: theme.spacing(2) },
}));

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  '&.root': { margin: 0, padding: theme.spacing(1) },
}));

const CustomizedDialogs = () => {
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => setOpen1(true);

  const handleClose1 = () => setOpen1(false);

  return (
    <div>
      {/* <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Delete product
      </Button> */}

      <Dialog onClose={handleClose1} open={open1}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
          <Typography gutterBottom style={{ fontWeight: '600' }}>
            Delete Product
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>Are you sure</Typography>
        </DialogContent>

        <DialogActions>
          <Button style={{ background: '#1976d2', color: '#fff' }} onClick={handleClose1}>
            Yes I'am Sure
          </Button>
          <Button onClick={handleClose1} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomizedDialogs;
