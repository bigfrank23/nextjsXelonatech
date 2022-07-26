import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PreviewIcon from '@mui/icons-material/Preview';
import StarIcon from '@mui/icons-material/Star';
import { Paper, Box, Modal, ButtonGroup, CardMedia, Card, CardActions, CardContent, Typography, Backdrop, Fade, IconButton } from '@mui/material';
import { red } from '@mui/material/colors'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { shadows } from '@mui/system';



const items = [
  {
    id: 1,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/hp.jpg',
    name: 'HP Notebook - 15-da2915nia',
    category: 'computer',
    desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    price: 'N450,000.00'
  },
  {
    id: 2,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/thermal-paper.jpg',
    name: 'POS THERMAL PAPER 57MM X 38MM PER ROLL',
    category: 'POS System',
    desc: 'Thermal paper is a fine paper that has been coated with a substance that changes color when subjected to heat. It’s found in thermal printers, especially in low-cost or portable devices like adding machines, cash registers, and credit card terminals. It does not require ink cartridges or ribbons, which saves money for retailers. thermal paper is used in credit card machines and portable POS systems. Our high-quality thermal paper roll lasts a long time, and the prints on it do as well.',
    price: 'N26,00.00'
  },
  {
    id: 3,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/therminal-roll.png',
    name: 'THERMAL PAPER ROLL 80MM X 80MM',
    category: 'POS System',
    desc: 'Thermal paper is a fine paper that has been coated with a substance that changes color when subjected to heat. It’s found in thermal printers, especially in low-cost or portable devices like adding machines, cash registers, and credit card terminals. It does not require ink cartridges or ribbons, which saves money for retailers. thermal paper is used in credit card machines and portable POS systems. Our high-quality thermal paper roll lasts a long time, and the prints on it do as well.',
    price: 'N34,000.00'
  },
  {
    id: 4,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/Bixolon-barcode-printer.png',
    name: 'BIXOLON BARCODE PRINTER XD5-40DK',
    category: 'POS System',
    desc: '4-inch Direct Thermal Desktop Label Printer The XD5 series printers are available in Direct Thermal or Thermal Transfer model, fully compatible with a market-leading programming language such as SLCS™, BPL-Z™ and BPL-E™, while supporting Smart Switch Programming Language. The XD5 series supports UHF RFID encode and print capability, easy installation and maintains with exceptional print quality at 300 dpi. The XD5 series can connect to a wired or wireless network – 10/100 Ethernet or WLAN 802.11a/b/g/n. The long-lasting print head, auto cutter and platen rollers with tool-less removable design minimize operation and maintenance costs. Simple out-of-box setup is ensured thanks to the easy media loading of its compact clamshell design with adjustable sensors and real-time calibration across a range of receipt, labels, tag or wristband media. The XD5 series offers easy integration with the availability of Windows, OPOS, Linux and MAC drivers, plus the development of your own applications via a suite of SDKs, and is backed by class-leading reliability.',
    price: 'N200,000.00'
  },
  {
    id: 5,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/SAM-TC-Touch.png',
    name: 'SAM TC TOUCH – A8 COMPLETE TOUCH SCREEN SYSTEM WITH DOUBLE SCREEN AND CARD READER',
    category: 'POS System',
    desc: '<p>The SAM TC TOUCH – A8 COMPLETE TOUCH SCREEN SYSTEM WITH DOUBLE SCREEN AND CARD READER is an aluminum alloy case, Stylish exterior and extended service life. The POS Terminal is waterproof, dust-proof, Easy to assemble and disassemble. It has Stand back cover can hide wires: All wires pass through the inside of the aluminum bracket of the POS terminal for improved safety and aesthetics. It has optional Customer Display such as: <br /> – 10.1 inch LCD <br /> – 2*20 LCD/ VFD <br /> – Double touch screen. <br /> The customer display of the windows pos terminal is very easy to install and remove. Customer Display can provide customers with a better shopping experience and create more sales transparency. It is equipped with MSR module design, easy to use, disassemble and assemble. It comes with fully Satisfying Abundant External Ports that You Need: The IO panel of the pos terminal is located at the top, making it easy to find the corresponding port.</p>',
    price: 'N460,000.00'
  },
  {
    id: 6,
    icon: '/logoAndIcons/touch.svg',
    img: '/images/Honeywell-orbit-barcode.gif',
    name: 'Honeywell-orbit-barcode',
    category: 'Uncategorized',
    desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    price: 'N95,000.00'
  },
]
// const items = [1,2,3,4,5,6,7,8,9]

const buttons = [
  <Button  variant='contained' key="one"><RemoveIcon /></Button>,
  <Button key="two" sx={{color: "black"}}>0</Button>,
  <Button  variant='contained' key="three"><AddIcon /></Button>,
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: { xs: 'block', sm: 'block', md: 'flex' },
  gap: '3rem',
  // width: 400,
  height: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  outline: 0,
  boxShadow: 24,
  p: 4,
};

const left = {
  flex: 1,
  width: {xs: "200px", sm: "200px", md: "350px", lg: "100%"}
}

const right = {
  flex: 2
}

const ShopIndex = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleOpen = (item) => {
    setOpen(true)
    setModalData(item)
  };
  const handleClose = () => setOpen(false);

    const color = red[500];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 640 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      };


  return (
    <div className="container" style={{marginBottom: '9rem'}}>
      <h3 className="text-center" style={{color: '#34548c'}}>Latest Product</h3>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        <Carousel
        // showDots={true}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="px-3"
        autoPlay
        infinite
        showDots={false}
        >
          {items.map((item, i)=> (
            <Card sx={{ maxWidth: 345, boxShadow: '2px 22px 22px  pink' }} key={item.id}>
                {/* <Box sx={{textAlign: "right", padding: "3px", cursor: "pointer", '&:hover': {transform: "rotate(2deg)"}}}>
                    <img src='/logoAndIcons/touch.svg' width={20} />
                </Box> */}
                  <PreviewIcon onClick={()=>handleOpen(item)} sx={{fill: 'rgba(52, 84, 140, 1)', float: "right", fontSize: '2rem', padding: "3px", cursor: "pointer", '&:hover': {transform: "rotate(6deg)", color: 'red'}}} />
                <CardMedia
                    component="img"
                    alt={item.name}
                    height="140"
                    image={item.img}
                    sx={{objectFit: "contain"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: "hidden"}}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.category}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box color={'#ffdc12'}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Box>
                </CardActions>
                <CardActions sx={{display: "flex", justifyContent: "space-between", cursor: "pointer"}}>
                    <Typography variant="body2" color={color}>{item.price}</Typography>
                    <Box component='div' sx={{'&:hover': {transform: "rotate(4deg)"}}}>
                    <AddShoppingCartIcon  />
                    </Box>
                </CardActions>
            </Card>
          ))}
        </Carousel>
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Box component='div' sx={modalStyle}>
              <Card sx={left}>
              <CardMedia
               component='img'
               alt={modalData.name}
               image={modalData.img}
              />
              </Card>
              <Box sx={right}>
                <Typography id="spring-modal-title" variant="h6" component="h2">
                  {modalData.name}
                </Typography>
                <Typography id="spring-modal-title" variant="caption" color='red' component="h2">
                  {modalData.price}
                </Typography>
                <Typography id="spring-modal-description" variant='body2' sx={{ mt: 2 }} dangerouslySetInnerHTML={{__html: modalData.desc}} />
                <CardActions sx={{py: "1rem", pl: 0, display: { xs: 'block', sm: 'block'}}}>
                  <IconButton aria-label='Add to cart' sx={{p: 0, mb: {xs: "1rem", sm: '1rem', md: 0, lg: 0}}}>
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                      {buttons}
                    </ButtonGroup>
                  </IconButton>
                  <Button variant='outlined' color='secondary'>Add to cart</Button>
                </CardActions>
                <Box sx={{cursor:'pointer', mt: '1rem', display: { xs: 'block', sm: 'block', md: 'flex', gap: '1rem', '&:hover': {gap: '5px', transition: 'gap .5s linear', color: 'red'} } }}>
                  <Typography component='a' variant='subtitle1'>Go to product page</Typography>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ShopIndex