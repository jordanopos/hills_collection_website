import SmallProductView from "./small_product";

export default function BestSellerProducts() {


    const products = [
        { "__typename": "Product", "id": "1", "title": "Rolex Aventador", "image": "https://htmldemo.hasthemes.com/ruiz/ruiz/assets/images/product/product-06.png", "details": "this is another cool product man", "price": "300000", "created_at": "1641661038663" },
        { "__typename": "Product", "id": "2", "title": "Hublot Controller", "image": "https://htmldemo.hasthemes.com/ruiz/ruiz/assets/images/product/product-07.png", "details": "this is another cool product man", "price": "50,000", "created_at": "1641661038663" },
    ]
    return (
        <div className="px-10 pt-10">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Best Selling</h1>
           <div className="flex flex-col md:grid md:grid-cols-4">

               {products.map((product) => (<SmallProductView product={product} />))}
               </div> 

        </div>
    );
}
