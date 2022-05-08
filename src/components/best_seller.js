import SmallProductView from "./small_product";

export default function BestSellerProducts() {


    const products = [
        { "__typename": "Product", "id": "1", "title": "The Vintage Rose Gold Casio Illuminator Watch", "image": "https://cdn.filestackcontent.com/resize=width:399,height:399,fit:crop,align:center/ss4dFdOUTeGRML1ubY4s", "details": "this is another cool product man", "price": "250,000", "created_at": "1641661038663" },
        { "__typename": "Product", "id": "2", "title": "Women's Rose Gold Michael Kors Darci Watch", "image": "https://cdn.filestackcontent.com/resize=width:430,height:430,fit:crop,align:center/H3afBGuORg68nVbrapLM", "details": "this is another cool product man", "price": "350,000", "created_at": "1641661038663" },
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
