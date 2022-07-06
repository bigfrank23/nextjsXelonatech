import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'

const CardIndex = () => {
  return (
    <div className="container my-5">
      <div className="whatWeDoTitle mb-5">
            <h2 className="text-center">Why elonatech</h2>
            <hr className="bg-secondary m-auto my-3" style={{width: '50px', height: "2px"}}/>
            <h4 className="text-center text-secondary">Top-notch technology service providers</h4>
      </div>
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header header header"
            "main main sidebar sidebar"
            "footer footer footer footer"`,
            }}
            >
            {/* <Box sx={{ gridArea: 'header', bgcolor: 'blue' }}>Header</Box> */}

            {/* 1st two box */}
            <Box elevation={3} sx={{ 
              gridArea: 'main', transition: "background .5s ease", background: 'url("https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', p: '3rem',
              '&:hover': {background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80")',}
               }}>
              <Box sx={{p: '1rem', bgcolor: "rgba(0,0,0,0.5)", width: '500px', transition: "border .5s linear", '&:hover': {border: "1px solid", borderImage: "linear-gradient( to bottom, red, rgba(0, 0, 0, 0) ) 1 100%"}}}>
                {/* <Item> */}
                  <Typography variant='h5' color="#fff">Website and App Solutions</Typography>
                  <hr style={{background: '#fff', width: '50px', height: "2px", border: 0}} />
                  <Typography variant='body2' color="#fff">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, adipisci ab. Nihil deserunt rerum provident? Nemo modi magni rerum iure!</Typography>
                  <Button variant='contained' color='secondary' sx={{my: '1rem'}}>Learn more <KeyboardArrowRightIcon /></Button>
                {/* </Item> */}
              </Box>
            </Box>

            <Box elevation={3} sx={{ 
              gridArea: 'sidebar', transition: "background .5s ease", background: 'url("https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', p: '3rem',
              '&:hover': {background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',}
               }}>
              <Box sx={{p: '1rem', bgcolor: "rgba(0,0,0,0.5)", width: '500px', transition: "border .5s linear", '&:hover': {border: "1px solid", borderImage: "linear-gradient( to bottom, lightblue, rgba(0, 0, 0, 0) ) 1 100%"}}}>
                {/* <Item> */}
                <Typography variant='h5' color="#fff">Flexible, Scalable IT Solutions</Typography>
                  <hr style={{background: '#fff', width: '50px', height: "2px", border: 0}} />
                  <Typography variant='body2' color="#fff">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, adipisci ab. Nihil deserunt rerum provident? Nemo modi magni rerum iure!</Typography>
                  <Button variant='contained' color='secondary' sx={{my: '1rem'}}>Learn more <KeyboardArrowRightIcon /></Button>
                {/* </Item> */}
              </Box>
            </Box>

                {/* Last box */}
            <Box elevation={3} sx={{ 
              gridArea: 'footer', transition: "background .5s ease", background: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px', p: '5rem',
              '&:hover': {background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',}
               }}>
              <Box sx={{p: '2rem', bgcolor: "rgba(0,0,0,0.5)", width: '500px', transition: "border .5s linear", '&:hover': {border: "1px solid #fff"}}}>
                {/* <Item> */}
                <Typography variant='h5' color="#fff">Well seasoned Experts on Demand</Typography>
                  <hr style={{background: '#fff', width: '50px', height: "2px", border: 0}} />
                  <Typography variant='body2' color="#fff">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, adipisci ab. Nihil deserunt rerum provident? Nemo modi magni rerum iure!</Typography>
                  <Button variant='contained' sx={{my: '1rem'}}>Learn more <KeyboardArrowRightIcon /></Button>
                {/* </Item> */}
              </Box>
            </Box>
        </Box>
    </div>
  )
}

export default CardIndex