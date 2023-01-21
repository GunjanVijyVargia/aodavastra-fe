import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import app_store from '../../Assets/Images/app_store.svg';
import google_play from '../../Assets/Images/google_play.svg'
import './index.scss';

export const BecomeInfluencer = ({ open, handleClose }) => {
  return (
    <Dialog maxWidth={'lg'}
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className='creator_title'>
        <Box sx={{ paddingBottom: '8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%' }}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            Become a ModaVastra Creator
          </Box>
          <IconButton sx={{ position: 'absolute', left: '91%' ,top:'9%'}} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{padding:'0px 27px 41px 27px'}}>
        <DialogContentText sx={{ width: '464px' }} className='creator_text'>
          <Typography variant='span' sx={{ color: theme.primaryColor, fontWeight: 600 }}> Hi Anjali! </Typography>
          <Typography variant='span' sx={{ color: theme.lightBlack, fontWeight: 400 }}>to begin your journey with us please download our App Now.</Typography>
        </DialogContentText>
        <Box sx={{ width: '532.36px', display: 'flex', justifyContent: 'space-between', margin: 'auto' }}>
          <Box component="img" sx={{ width: 252.89, height: 74.62 }} src={google_play} alt='google_play' />
          <Box component="img" sx={{ width: 250.36, height: 74.18 }} src={app_store} alt='app_store' />
        </Box>
      </DialogContent >

      <DialogActions>
      </DialogActions>
    </Dialog>

  )
}
