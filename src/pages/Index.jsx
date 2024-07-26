import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">Gelato Paradise</h1>
      <p className="text-xl md:text-2xl text-green-600 mb-8 text-center">Experience the taste of authentic Italian gelato</p>
      <img src="/gelato-stock-photo.jpg" alt="Delicious Gelato" className="mx-auto object-cover w-full max-w-md h-64 rounded-lg shadow-lg mb-8" />
      <div className="space-x-4">
        <Button asChild>
          <Link to="/menu">View Menu</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
