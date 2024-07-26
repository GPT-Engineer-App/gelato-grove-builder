import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-red-200">
          <CardHeader className="bg-red-100">
            <CardTitle className="text-red-800">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="bg-red-600 hover:bg-red-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-red-200">
          <CardHeader className="bg-red-100">
            <CardTitle className="text-red-800">Our Information</CardTitle>
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
