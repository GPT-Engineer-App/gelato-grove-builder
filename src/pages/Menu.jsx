import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { name: "Raspberry", price: "$3.75", description: "Tangy and sweet raspberry delight" },
  { name: "Mint", price: "$3.50", description: "Cool and refreshing mint flavor" },
  { name: "Caramel", price: "$3.75", description: "Rich and creamy caramel indulgence" },
  { name: "Hazelnut", price: "$4.00", description: "Nutty and aromatic hazelnut gelato" },
  { name: "Walnut", price: "$4.00", description: "Crunchy walnut pieces in creamy gelato" },
  { name: "Mango Sorbet", price: "$3.50", description: "Tropical and refreshing mango sorbet" },
];

const Menu = () => {
  return (
    <div className="container mx-auto py-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Our Gelato Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index} className="border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-green-600">{item.price}</p>
              <p className="text-green-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
