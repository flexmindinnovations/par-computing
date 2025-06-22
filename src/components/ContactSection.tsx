import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import NoiseBackground from "./ui/NoiseBackground";
import DotPattern from "./ui/DotPattern";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    content: "SR.No 317, Near Orchids North Main Road, Lane E,Shefali Apartment,Office 01,Koregoan Park, Pune - 411001",
  },
  {
    icon: Phone,
    title: "Talk To Expert",
    content: "Rizvi : (+91)98221554090",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "razvi@parcomputing.com",
  },
];

const ContactSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NoiseBackground />
        <DotPattern />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
              <p className="text-muted-foreground max-w-xs">{detail.content}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto">
          <form className="relative flex items-center p-2 border border-muted rounded-full">
            <Mail className="h-5 w-5 text-muted-foreground ml-4" />
            <Input
              type="email"
              placeholder="Your Email Address..."
              className="flex-1 !bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full"
            >
              Submit <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 