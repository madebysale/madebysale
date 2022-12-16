import { useRef, useState, React } from 'react';
import { Icon } from '@iconify/react';
import { makeStyles } from '@material-ui/core/styles';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CustomizedDialogs from '../dialog/CustomizedDialog';
import face from '../../../../../src/public/assets/images/face.jpg';
// material
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  Typography,
} from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

// import CloseIcon from '@material-ui/icons/Close';
// ----------------------------------------------------------------------
// import { EditForm } from '../../Forms/index';

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
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  new4: {
    marginBottom: '0px',
    padding: '0px',
    marginTop: '0px',
  },
  bt6: {
    padding: '8px !important',
    background: '#c50912',
    fontSize: '11px',
    color: '#fff',
  },
  bt7: {
    padding: '8px !important',
    background: '#e5e0e0',
    fontSize: '11px',
    color: '#000',
  },
}));
const DialogContent1 = styled(MuiDialogContent)(({ theme }) => ({
  '&.root': { padding: theme.spacing(2) },
}));

const DialogActions1 = styled(MuiDialogActions)(({ theme }) => ({
  '&.root': { margin: 0, padding: theme.spacing(1) },
}));

const DialogTitle1 = (props) => {
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
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          {/* <CloseIcon /> */}
          Close
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function UserMoreMenu(props) {
  const classes = useStyles();
  const [premiumContent, setPremiumContent] = useState([]);
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /// delete popup
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const deleterow = () => {
    const Livechaturl = `http://3.23.210.57:3000/api/v1/auth/deleteinterviews`;
    axios
      .post(Livechaturl, {
        interview_id: props.id,
      })
      .then((response) => {
        const outlook = response;
        alert(outlook.data.message);
        window.location.href = '/dashboard/interview';
      });
    setOpen(false);
  };
  const editrow = () => {
    alert(JSON.stringify(props.id));
  };
  /// image popup
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem component={RouterLink} to="/Product/Productdetail">
          <ListItemIcon>
            <AssignmentIcon width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            className={classes.new4}
            primary="Product Details"
            // primaryTypographyProps={{ variant: 'body2' }}
            // onClick={editrow}
          />
        </MenuItem>
        <MenuItem component={RouterLink} to="#">
          <ListItemIcon>
            <DataSaverOnIcon width={24} height={24} onClick={handleClickOpen} />
          </ListItemIcon>
          <ListItemText className={classes.new4} primary="Duplicate Product" onClick={editrow} />
        </MenuItem>

        <MenuItem component={RouterLink} to="/Product/Editproduct" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} onClick={handleClickOpen} />
          </ListItemIcon>
          <ListItemText className={classes.new4} primary="Edit Product" onClick={editrow} />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to="#"
          sx={{ color: 'text.secondary' }}
          onClick={handleClickOpen2}
        >
          <ListItemIcon>
            <AddPhotoAlternateIcon width={24} height={24} onClick={handleClickOpen2} />
          </ListItemIcon>
          <ListItemText className={classes.new4} primary="View Image" />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to="/Product/PrintBarcode"
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <LocalPrintshopIcon width={24} height={24} onClick={handleClickOpen} />
          </ListItemIcon>
          <ListItemText className={classes.new4} primary="Print Barcode/Label" onClick={editrow} />
        </MenuItem>

        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} onClick={handleClickOpen1} />
          </ListItemIcon>
          <ListItemText
            className={classes.new4}
            primary="Delete Product"
            onClick={handleClickOpen1}
          />
        </MenuItem>
      </Menu>
      <div>
        {/* /// delete product */}

        <Dialog
          onClose={handleClose1}
          open={open1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="sm"
        >
          <MuiDialogTitle id="customized-dialog-title" onClose={handleClose1}>
            Delete Product
          </MuiDialogTitle>

          <DialogContent1 dividers>
            <Typography gutterBottom>Are you sure</Typography>
          </DialogContent1>

          <DialogActions1>
            <Button onClick={handleClose1} className={classes.bt6}>
              Yes I'am Sure
            </Button>
            <Button onClick={handleClose1} className={classes.bt7}>
              No
            </Button>
          </DialogActions1>
        </Dialog>
        {/* /// end delete product */}
        {/* /// View image */}
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <MuiDialogContent>
            <img src={face} style={{ width: '100%' }} />
          </MuiDialogContent>
        </Dialog>
        {/* /// View image end*/}
      </div>
    </>
  );
}
