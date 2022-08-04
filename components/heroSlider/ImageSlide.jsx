import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/HeroSlider.module.css'
// import Footer from "./Footer";

const images = [{
    id: 1,
    src: "/images/heroImg/img1.jpg",
    alt: "Image 1"
},
{
    id: 2,
    src: "/images/heroImg/img2.jpg",
    alt: "Image 2 "
},
{
    id: 3,
    src: "/images/heroImg/img3.png",
    alt: "Image 3"
}
];

const ImageSlider = () => {
  
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 5000,
     
    };
    return (
      <>
        <div className={styles.imgSliderContainer}>
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item.id}>
                <img loading="lazy" src={item.src}  alt={item.alt} style={{width: "100%", height: "500px", objectFit: "cover"}} />
                {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Button</a> */}
              </div>
            ))}
          </Slider>
        </div>
            </>
    )
  }
  export default ImageSlider;