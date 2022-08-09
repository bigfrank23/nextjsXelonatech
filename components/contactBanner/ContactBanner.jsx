import { Box, Button, Typography, Modal, Fade, Backdrop, TextField, TextareaAutosize } from '@mui/material'
import ForwardIcon from '@mui/icons-material/Forward';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ContactBanner = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box sx={{background: 'url("/images/banner3.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', minHeight: '350px', width: '100%', display: 'flex', }}>
        {/* <img src="/images/banner3.png" style={{height: '300px', width: '100%'}} alt="" /> */}
        <Box sx={{flex: 1, p: 7, display: 'flex', flexDirection: 'column', gap: '4rem'}}>
            <Box>
                <Typography variant="h3" fontWeight={700} color='red'>Get Ahead of your Competitors</Typography>
                <Typography variant="subtitle2" color= '#fff' mt={2}>If you are ready to become the best in your industry and also stand out from a sea of hungry competitors,
                then Elonatech is the partner you need. Get in touch with us below, let's take your busines to the next level.
                </Typography>
            </Box>
            <Box sx={{display: 'flex', gap: '2rem'}}>
                <Typography variant="h4" fontWeight={700} mb={1} color="#fff">Ready to Start your Project?</Typography>
                <Button variant='contained' startIcon={<ForwardIcon/>} onClick={handleOpen} sx={{background: 'red', textTransform: 'unset', fontSize: '20px', fontWeight: 700, '&:hover': {background: '#1976d2'}}}>Request a Quote</Button>
            </Box>
        </Box>
        <Box sx={{flex: 1}}></Box>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
        >
        <Fade in={open}>
        <Box sx={style}>
            <Box component='form' autoComplete='off' noValidate>
                <Typography id="transition-modal-title" variant="h6" fontWeight={700} color='#34548c' textAlign='center' mb={2} component="h2">
                Request a Quote
                </Typography>
                <Box component='div' sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <TextField fullWidth required variant='outlined' label='Full Name' />
                <TextField fullWidth required variant='outlined' label='Company Name' />
                <TextField fullWidth required variant='outlined' label='Email' />
                <TextField fullWidth required variant='outlined' label='Phone Number ' />
                <TextField fullWidth required variant='outlined' label='Title of Project ' />
                <TextField fullWidth required variant='outlined' label='Project Location ' />
                <TextField fullWidth required helperText='Please describe your project' variant='outlined' label='Description of Project ' />
                </Box>
                <Box mt={2}>
                    <Button variant='contained' color='primary' sx={{width: '100%'}}>Send</Button>
                    <Typography variant='h6' fontWeight={700} mt={2}>
                        For clarity, please call +2349014544520
                    </Typography>
                </Box>
            </Box>

        </Box>
        </Fade>
        </Modal>
    </Box>
  )
}

export default ContactBanner