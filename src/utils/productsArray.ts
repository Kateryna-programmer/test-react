type Product = {
  id: number;
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
  image: string;
};
const productsArray: Product[] = [
  {
    id: 1,
    title: 'Iphone 15',
    description:
      'Maximeeveniet cumque magni esse, quaerat voluptatum cum iusto quos harum est exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore rerum error ex reprehenderit ut ullamtempore ab?',
    type: 'phone',
    capacity: '256',
    price: 1300,
    image: '/images/iphone-15.webp',
  },
  {
    id: 2,
    title: 'Iphone 12 PRO',
    description:
      ' !uaerat voluptatum cum iusto quos harum est exercitationem. Inventore rerum error ex reprehenderit ut ullamtempore ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeeveniet cumque magni esse,',
    type: 'phone',
    capacity: '128',
    price: 1100,
    image: '/images/iphone-14.webp',
  },
  {
    id: 3,
    title: 'Iphone 10',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeeveniet cumque magni esse, quaerat voluptatum cum iusto quos harum est exercitationem. Inventore rerum error ex reprehenderit ut ullamtempore ab?',
    type: 'phone',
    capacity: '128',
    price: 1200,
    image: '/images/iphone-13.webp',
  },
  {
    id: 4,
    title: 'Samsung Galaxy 8',
    description:
      'Maximeeveniet cumque magni esse, quaerat voluptatum cum iusto quos Lorem ipsum dolor sit, amet consectetur adipisicing elit.  harum est exercitationem. Inventore rerum error ex reprehenderit ut ullamtempore ab?',
    type: 'phone',
    capacity: '64',
    price: 800,
    image: '/images/samsung-black.webp',
  },
  {
    id: 5,
    title: 'Samsung Galaxy 9',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeeveniet cumque magni esse, quaerat voluptatum cum iusto quos harum est exercitationem. Inventore rerum error ex reprehenderit ut ullamtempore ab?',
    type: 'phone',
    capacity: '164',
    price: 900,
    image: '/images/samsung-green.webp',
  },
  {
    id: 6,
    title: 'Samsung Galaxy 10',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeeveniet cumque magni esse, quaerat voluptatum cum iusto quos harum est exercitationem. Inventore rerum error ex reprehenderit ut ullamtempore ab?',
    type: 'phone',
    capacity: '256',
    price: 1000,
    image: '/images/samsung-pink.webp',
  },
];

export default productsArray;
