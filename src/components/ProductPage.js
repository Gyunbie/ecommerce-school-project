import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductPage() {
  const index = useParams();
  const product = products.list[index.id - 1];

  return (
    <div className="p-5 px-10 flex w-3/4 mx-auto flex-wrap border border-gray-300 rounded-lg mt-3">
      <div className="flex items-center mb-5">
        <img
          src={product.image_url}
          alt=""
          className="h-[300px] w-[300px] object-contain mr-5"
        />

        <div className="py-10 flex flex-col">
          <div className="flex">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">, ${product.price}</p>
            <p className="flex-grow text-right text-2xl font-semibold">
              Rating: {product.rating}
            </p>
          </div>
          <p className="text-justify mt-1.5">{product.definition}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full p-3 border border-gray-300 rounded-md">
        <div className="col-span-2 p-1 px-2 border border-gray-300 rounded-md mx-2">
          <h1 className="text-lg font-bold mb-1">COMMENTS</h1>

          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
        </div>

        <div className="col-span-1 p-1 px-2 border border-gray-300 rounded-md mx-2">
          <h1 className="text-lg font-bold mb-1">OTHER SELLERS</h1>

          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
          <p className="p-1 border border-gray-300 rounded-md my-1">
            THIS HAS NOT BEEN IMPLEMENTED.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
