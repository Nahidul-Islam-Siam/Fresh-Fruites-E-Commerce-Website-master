import { useDispatch } from 'react-redux';

import Image from 'next/image';
import { addToCart } from '@/redux/feature/productSlices/cartSlices';
import Link from 'next/link';

const ProductCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    const product = { id, name, price, image };
    dispatch(addToCart(product));
    console.log(addToCart(product));
    
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full h-48">
    <Link href={`product-details/${id}`}>
    <Image src={image} alt={name} height={200} width={200} />
    </Link>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#212337] font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
        <button
          onClick={handleAddToCart} 
          className="w-full py-2 bg-orange-500 text-white rounded transition-all transform group-hover:scale-105 group-hover:bg-orange-600 duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
