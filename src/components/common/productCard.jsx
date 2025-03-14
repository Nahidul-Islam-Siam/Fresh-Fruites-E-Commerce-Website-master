import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { addToCart, clearError } from '@/redux/feature/productSlices/cartSlices';
import Link from 'next/link';
import { toast } from 'react-toastify'; 

const ProductCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const cartError = useSelector((state) => state.cart.error);


  const handleAddToCart = () => {
    const product = { id, name, price, image };
    

 
if (cartError) {
      toast.error(cartError, { position: "top-right", autoClose: 3000 });
      dispatch(clearError());
    } else {
      dispatch(addToCart(product));
      toast.success("Added to cart!", { position: "top-right", autoClose: 2000 });
    }
  

  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-2xl">
      <div className="relative w-full h-48">
        <Link href={`product-details/${id}`}>
          <Image
            src={image}
            alt={name}
            layout="fill" 
            objectFit="cover" 
          />
        </Link>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg text-[#212337] font-semibold mb-2">{name}</h3>
        <p className="text-[#4A4A52] text-lg mb-4">{price}</p>
        <button
          onClick={handleAddToCart}
          className="w-full text-lg font-[400px] shadow-2xl border border-[#D9D9D9] py-2 bg-[#D9D9D9] text-[#212337] rounded transition-all transform group-hover:scale-105 group-hover:bg-orange-600 duration-300 hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
