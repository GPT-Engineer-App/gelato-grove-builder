import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Message sent! (Check console for details)");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="container mx-auto py-8 bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-amber-800 font-serif tracking-wider">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-amber-300 border-4 overflow-hidden mt-4">
          <CardHeader className="bg-amber-200">
            <CardTitle className="text-amber-800 font-serif">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="bg-white bg-opacity-70 mt-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
              />
              <Textarea 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleInputChange}
                className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
              />
              <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-amber-300 border-4 overflow-hidden">
          <CardHeader className="bg-amber-200">
            <CardTitle className="text-amber-800 font-serif">Our Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 bg-white bg-opacity-70 mt-4">
            <div className="flex items-center">
              <MapPin className="mr-2 text-amber-700" />
              <p className="text-amber-800">123 Gelato Street, Ice Cream City, 12345</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-amber-700" />
              <p className="text-amber-800">(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-amber-700" />
              <p className="text-amber-800">info@gelatoparadise.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
