import Divider from "@/components/Divider/Divider";
import ProductDetailModal from "@/components/modals/ProductDetailModal/ProductDetailModal";
import Image from "next/image";
import ProductDetail from "../ProductDetail/ProductDetail";
import { Product } from "@/types/types";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mds:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 md:gap-10 mx-2 md:mx-10">
      {products.map((product, i) => (
        <div
          key={i}
          className={`mdl:min-w-[255px] mdl:max-w-[255px] 
                md:min-w-[200px] md:max-w-[200px] w-full group flex flex-col shadow-md items-center `}
        >
          <div className={`w-full aspect-[1/1] relative`}>
            <Image
              className="relative w-full h-full object-cover"
              fill
              src={product?.images[0]!}
              alt={product?.title!}
            />
            <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-[#0000003d] top-0 left-0 transition-all" />
          </div>
          <Divider className="mt-5 px-2" />
          <div className={`text-gray-500 flex-grow-[1] px-2 py-3`}>
            <h1>{product?.title}</h1>
          </div>
          <ProductDetailModal
            modalTriggerElm={
              <button className="py-2 bg-indigo-400 hover:bg-indigo-500 cursor-pointer text-white w-full text-center">
                view details
              </button>
            }
          >
            <ProductDetail product={product!} />
          </ProductDetailModal>
        </div>
      ))}
    </div>
  );
};
export default ProductsList;
