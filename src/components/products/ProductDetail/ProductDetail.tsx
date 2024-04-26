import Divider from "@/components/Divider/Divider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product, ProductDetails } from "@/types/types";
import { useCallback } from "react";

const ProductDetail = ({ product }: { product: Product }) => {
  const renderTableHeadings = useCallback((headings: string[]) => {
    return headings.map((k, i) => {
      return (
        <th
          key={i}
          className="px-3 py-3 border-2 border-gray-200 whitespace-nowrap"
        >
          {k}
        </th>
      );
    });
  }, []);
  const renderTableData = useCallback((data: string[]) => {
    return data.map((v, i) => {
      return (
        <td
          key={i}
          className="text-center px-3 py-2 border-2 border-gray-200 whitespace-nowrap"
        >
          {v as string}
        </td>
      );
    });
  }, []);

  return (
    <>
      <h1 className={`text-2xl font-medium`}>{product.title}</h1>
      <Divider className="mt-3" />
      <div>
        <Accordion
          defaultValue="Nature of products"
          type="single"
          collapsible
          className="w-full"
        >
          {Object.keys(product.details as ProductDetails).map((key) => {
            let detailsKey = product.details[key as keyof ProductDetails]!;
            return (
              <AccordionItem key={key} value={key} className="max-w-[88vw]">
                <AccordionTrigger>{key}?</AccordionTrigger>
                <AccordionContent>
                  {typeof detailsKey === "string" ? (
                    detailsKey
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          {renderTableHeadings(Object.keys(detailsKey))}
                        </thead>
                        <tbody>
                          <tr>{renderTableData(Object.values(detailsKey))}</tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default ProductDetail