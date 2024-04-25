"use client";

import { useRouter } from "next/navigation";

const useRouterPush = () => {
  const router = useRouter();
  
  return function(query:string){
      router.push(query);
  }
};


export default useRouterPush