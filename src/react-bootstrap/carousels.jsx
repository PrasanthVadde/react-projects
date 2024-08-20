import Carousel from 'react-bootstrap/Carousel';

function DefaultCarousel() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75" 
          src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc_d1IBWl8gbEh-rornoIUCfsxlW9v01bGIFqESDqOjqhwPpMID-7dRW6Bntm-VzdTnzXGAZOI_CGRr48Eck4qbqqfndbxEwplkA6fPL9nvr.png?r=241/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKBZzK13-GBYcl3Zdyd67rIWlZZ-P8UBKfA&s/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"500px"}}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBDFlX5s1jwzeQ_gfa0LD7EhrjODZJ8oe3Q&s/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default  DefaultCarousel;