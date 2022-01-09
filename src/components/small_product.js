import { FaShare } from "react-icons/fa";
export default function SmallProductView({ product }) {
 
  const price = `UGX ${product.price}`
 
  return (
    <div key={product.id}className="border rounded mb-5 flex flex-col">
      <div className="flex justify-between">
        <div className=""></div>
        <FaShare className="mt-3 mr-3"/></div>
      <img
        className="self-center h-72 m-0 p-0"
        src={product.image}
        alt=""
      />
      <div className="border-t"></div>
      <div className="self-center">
        <h1 className="pt-6 text-xl">{product.title}</h1>
        <h4 className="font-safira pb-6 ml-2 text-gold font-extrabold">{price}</h4>
      </div>
    </div>
  );
}

