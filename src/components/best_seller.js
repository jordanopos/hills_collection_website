import SmallProductView from "./small_product";

export default function BestSellerProducts() {


    const products = [
        { "__typename": "Product", "id": "1", "title": "Rolex Aventador", "image": "https://htmldemo.hasthemes.com/ruiz/ruiz/assets/images/product/product-06.png", "details": "this is another cool product man", "price": "300000", "created_at": "1641661038663" },
        { "__typename": "Product", "id": "2", "title": "Hublot Controller", "image": "https://htmldemo.hasthemes.com/ruiz/ruiz/assets/images/product/product-07.png", "details": "this is another cool product man", "price": "50,000", "created_at": "1641661038663" },
    ]
    return (
        <div className="px-10 pt-5">
            <h1 className="mb-4 mt-4 font-bold text-md">Best Selling</h1>
            {products.map((product) => (<SmallProductView product={product} />))}
        </div>
    );
}
