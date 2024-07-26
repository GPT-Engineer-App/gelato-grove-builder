import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { name: "Vanilla", price: "$3.50", description: "Classic creamy vanilla" },
  { name: "Chocolate", price: "$3.50", description: "Rich dark chocolate" },
  { name: "Strawberry", price: "$3.75", description: "Fresh strawberry delight" },
  { name: "Pistachio", price: "$4.00", description: "Nutty pistachio flavor" },
  { name: "Lemon Sorbet", price: "$3.50", description: "Refreshing lemon sorbet" },
  { name: "Stracciatella", price: "$4.00", description: "Creamy vanilla with chocolate chips" },
];

const Menu = () => {
  return (
    <div className="container mx-auto py-8 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Our Gelato Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index} className="border-red-200">
            <CardHeader className="bg-red-100">
              <CardTitle className="text-red-800">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-red-600">{item.price}</p>
              <p className="text-red-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
