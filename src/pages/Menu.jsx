import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { name: "Raspberry", price: "£4", description: "Tangy and sweet raspberry delight" },
  { name: "Mint", price: "£4", description: "Cool and refreshing mint flavor" },
  { name: "Caramel", price: "£4", description: "Rich and creamy caramel indulgence" },
  { name: "Hazelnut", price: "£4", description: "Nutty and aromatic hazelnut gelato" },
  { name: "Walnut", price: "£4", description: "Crunchy walnut pieces in creamy gelato" },
  { name: "Mango Sorbet", price: "£4", description: "Tropical and refreshing mango sorbet" },
];

const Menu = () => {
  return (
    <div className="container mx-auto py-8 bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-amber-800 font-serif tracking-wider">Our Gelato Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index} className="border-amber-300 border-4 overflow-hidden">
            <CardHeader className="bg-amber-200">
              <CardTitle className="text-amber-800 font-serif">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="bg-white bg-opacity-70">
              <p className="text-lg font-semibold text-amber-700">{item.price}</p>
              <p className="text-amber-800">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
