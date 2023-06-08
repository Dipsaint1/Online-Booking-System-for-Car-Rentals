export type CarouselObject = {
  img: string,
  name: string,
  make:  string,
  price: number
}

export type CarouselType = CarouselObject[];

const CarouselData: CarouselType = [
  {
    img: new URL('../assets/car-1.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  },

  {
    img: new URL('../assets/car-2.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  },

  {
    img: new URL('../assets/car-3.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  },
  {
    img: new URL('../assets/car-4.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  },

  {
    img: new URL('../assets/car-5.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  },

  {
    img: new URL('../assets/car-6.jpg', import.meta.url).href,
    name: 'Mercedes Grand Sedan',
    make: 'Chevrolet',
    price: 500
  }
]


export default CarouselData;