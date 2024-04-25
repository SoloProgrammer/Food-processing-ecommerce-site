import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { ReactNode } from "react";

type ProductDetailModalProps = {
  modalTriggerElm: ReactNode;
  children: ReactNode;
};

const ProductDetailModal = ({
  modalTriggerElm,
  children,
}: ProductDetailModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTriggerElm}</DialogTrigger>
      <DialogContent className="md:!min-w-[700px]">{children}</DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
