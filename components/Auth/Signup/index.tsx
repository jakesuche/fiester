import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  Grow,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import CustomButton from '@/components/custom-button';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function SignupDialog() {
  const [open, setOpen] = React.useState(false);
  const [actionType, setType] = React.useState<'signin' | 'signup'>('signin');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSwitch = () => {
    if (actionType == 'signin') setType('signup');
    if (actionType == 'signup') setType('signin');
  };

  const checked = actionType == 'signin';

  return (
    <div>
      <BootstrapDialog
        fullWidth={true}
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {actionType !== 'signin' ? 'Sign In' : 'Sign Up'}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <ButtonGroup variant="contained" fullWidth>
            <Button startIcon={<GoogleIcon />} sx={{ height: 50 }}>
              Continue with google {actionType !== 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </ButtonGroup>
          <Divider sx={{ m: 2 }} orientation="horizontal" flexItem>
            Or
          </Divider>
          <Stack spacing={3}>
            {checked && <TextField  placeholder='Full Name' id="outlined-controlled" fullWidth={true} />}

            <TextField type={"email"} placeholder='Email Address' id="outlined-controlled" fullWidth={true} />
            <TextField  type="password" placeholder='Password' id="outlined-controlled" fullWidth={true} />
            <CustomButton size="large" sx={{ height: 50 }} variant="contained">
              {actionType !== 'signin' ? 'Sign In' : 'Sign Up'}
            </CustomButton>
          </Stack>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
            spacing={0}
          >
            <Typography>Already have an account</Typography>
            <Button onClick={handleSwitch} variant="text">
            {actionType == 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
