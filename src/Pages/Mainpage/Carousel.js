import React from 'react';
 import './Css_folder/Carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='next-arrow' onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prev-arrow' onClick={onClick} />
  );
}

function Carousel () {
     const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const src = {
      src: './../media/star.png'
    }

    const alt = {
      alt : 'star'
    }
    return (
      <div className='main-container'>
        <h2>Самые популярные курсы</h2>
        <div className='slider-wrapper'>
        <Slider {...settings}>
          <div className='card-1 carousel-cards'>
            <h3>Путь в IT. Как найти своё призвание</h3>
            <div className='star'><img src={src} alt={alt}/> </div>
            <div className='price-link'>500 руб</div>
          </div>
          <div className='card-2 carousel-cards'>
            <h3>Изучаем JS с полного нуля!</h3>
          </div>
          <div className='card-3 carousel-cards'>
            <h3>Курс по безопасности в сети</h3>
          </div>
          <div className='card-4 carousel-cards'>
            <h3>Lorem ipsum dolor sit</h3>
          </div>
          <div className='card-5 carousel-cards'>
            <h3>Lorem ipsum dolor sit</h3>
          </div>
          <div className='card-6 carousel-cards'>
            <h3>Lorem ipsum dolor sit</h3>
          </div>
        </Slider>
        </div>
      </div>
    );
  }


export default Carousel





// const PAGE_WIDTH = 924

// function Carousel({ children }) {
//   const [pages, setPages] = useState([])

//   const hadleLeftArrowClick = () => {
//     console.log('hadleLeftArrowClick')
//   }
//   const hadleRightArrowClick = () => {
//     console.log('hadleRightArrowClick')
//   }

//   useEffect(() => {
//     setPages(
//       Children.map(children, (child) => {
//         return cloneElement(child, {
//           style: {
//             height: '100%',
//             minwidth: `${PAGE_WIDTH}px`,
//             maxwidth: `${PAGE_WIDTH}px`
//           },
//         })
//       })
//     )
//   }, [])

//   return (
//     <div className='main-container'>
//       <div className='arrow-left'>
//         <button className='arrow-btn' onClick={hadleLeftArrowClick}>
//           <span className='up-left'></span>
//           <span className='line-left' ></span>
//           <span className='down-left'></span>
//         </button>
//       </div>
//       <div className='window'>
//         <div className='all-cards-container'>
//           {children}
//         </div>
//       </div>
//       <div className='arrow-right'>
//         <button className='arrow-btn' onClick={hadleRightArrowClick}>
//           <span className='up-right'></span>
//           <span className='line-right' ></span>
//           <span className='down-right'></span>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Carousel
