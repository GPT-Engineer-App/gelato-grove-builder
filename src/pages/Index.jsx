import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-4">
      <div className="border-8 border-double border-amber-800 p-8 bg-white bg-opacity-70">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6 font-serif tracking-wider">Gelato Paradise</h1>
        <p className="text-xl md:text-2xl text-amber-700 mb-12 text-center max-w-2xl font-light">Experience the taste of authentic Italian gelato, crafted with passion and the finest ingredients</p>
        <div className="space-x-4 flex justify-center">
          <Button asChild className="bg-amber-800 hover:bg-amber-900 text-white">
            <Link to="/menu">View Menu</Link>
          </Button>
          <Button asChild variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
