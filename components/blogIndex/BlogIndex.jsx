import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material'
import { textAlign } from '@mui/system';

export default function BlogIndex() {

  const items = [
    {
      id: 1,
      title: "Reasons Why You Need Digital Marketing for Your Business",
      date: "July 30, 2022",
      img: "/images/blogIndex1.png",
      label: "digital marketing",
      desc: "REASONS WHY YOU NEED DIGITAL MARKETING FOR YOUR BUSINESS Higher conversion rates with the right strategy One of the top benefits of digital marketing is providing higher conversion rates. The conversion rate is basically the percentage of visitors..."
    },
    {
      id: 2,
      title: "Office System Setup",
      date: "July 30, 2022",
      img: "/images/blogIndex2.jpg",
      label: "digital marketing",
      desc: "To #Setup your #office #System the #digital way, Here are the common items most small #business offices need: #Computers: Determine how many and what kind of computers you’ll need. #Software: Determine whether you need any new business software... Web-based apps, office suites, communication software, or ... "
    },
    {
      id: 3,
      title: "Professional, Creative & Responsive Websites",
      date: "July 30, 2022",
      img: "/images/blogIndex3.jpg",
      label: "digital marketing",
      desc: "Starting or running a business requires more than just a brilliant idea. We often tend to undermine the physical components of starting an office or a business. Investing in the right kind of website can save you a lot of time, money, and effort. They help in organizing daily tasks..."
    },
  ]
  return (
    // <div className="container-fluid" style={{background: 'url("https://img.freepik.com/free-photo/white-brush-stroke-texture-background_53876-132775.jpg?t=st=1657194230~exp=1657194830~hmac=a96d7825071211996733ca07daf464c736e73d542cf4370475d8af6265bd95be&w=900")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container" style={{marginBottom: '5rem'}}>
        <h3 className="text-center" style={{color: '#34548c'}}>Recent Blog</h3>
          <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        <Grid 
          container
          spacing={2}>
          {items.map((item, i)=> (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ maxWidth: 345 }} elevation={5}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label={item.label}>
                      E
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.title}
                  subheader={item.date}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt={item.label}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {item.desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{display: "flex", justifyContent: "center"}}>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <Button variant="outlined">Read more</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    // </div>
  );
}
