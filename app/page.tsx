import SiteLayout from "@/src/layout";
import Home from "@/src/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SudLabs - All-in-one software powering small business growth at every step",
  description: "All-in-one software powering small business growth at every step",
};
  
export default function HomePage() {
  return (
   <SiteLayout>
     <Home/>
   </SiteLayout>
  );
}
