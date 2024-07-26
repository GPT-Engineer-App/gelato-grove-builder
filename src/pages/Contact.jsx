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
    <div className="container mx-auto py-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-green-200 mt-4">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
              />
              <Textarea 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-green-200">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Our Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 bg-white">
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <p>123 Gelato Street, Ice Cream City, 12345</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <p>info@gelatoparadise.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
