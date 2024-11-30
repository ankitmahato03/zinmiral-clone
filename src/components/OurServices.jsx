import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Social Media Management",
    description:
      "Achieve social success without lifting a finger! While you dive into your favorite podcasts, we&apos;ll make sure your brand stands out on all platforms.",
  },
  {
    title: "Meta Ads & Google Ads",
    description:
      "Optimize Your Ads For More Profit. We will help you to get more profit from your ads. We will help you to get more profit from your ads.",
  },
  {
    title: "Website Development",
    description:
      "We specialize in creating user-friendly, responsive WordPress websites that provide a seamless experience across all devices, ensuring easy navigation and accessibility for all users.",
  },
];


const OurServices = () => {
 
  return (
    <section id="services" className="mt-12">
      <h1 className="text-black text-center text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[62px] mb-12">
        Our Services
      </h1>

      {/* Services Overview */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
      >
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-all w-full max-w-[350px] mx-auto bg-gray-100"
          >
            <CardHeader>
              <CardTitle className="font-bold text-[22px] sm:text-[26px] lg:text-[30px] leading-[30px] sm:leading-[35px] lg:leading-[39px]">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[16px] sm:text-[18px] text-gray-700 mt-2">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Services */}
      <div className="mt-12 grid grid-cols-1 gap-8">
        {/* Social Media Management */}
        <div className="flex flex-col md:flex-row items-center gap-6 overflow-hidden">
          <div className="w-full md:w-1/2 h-[350px] p-3">
            <img
              src="./images/social-management.gif"
              alt="social-management"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h2 className="text-black text-[24px] sm:text-[28px] lg:text-[30px] font-bold leading-[32px] lg:leading-[39px]">
              Social Media Management
            </h2>
            <p className="text-black text-[16px] sm:text-[18px] mt-4">
              Achieve social success without lifting a finger! While you dive
              into your favorite podcasts, we&apos;ll make sure your brand
              stands out on all platforms.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>Facebook</Badge>
              <Badge>Instagram</Badge>
              <Badge>Twitter</Badge>
              <Badge>YouTube</Badge>
              <Badge>LinkedIn</Badge>
            </div>
          </div>
        </div>

        {/* Meta Ads & Google Ads */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 overflow-hidden">
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h2 className="text-black text-[24px] sm:text-[28px] lg:text-[30px] font-bold leading-[32px] lg:leading-[39px]">
              WordPress Development
            </h2>
            <p className="text-black text-[16px] sm:text-[18px] mt-4">
              Elevate your online presence with Zinmiral&apos;s professional
              WordPress website design services. At Zinmiral, we offer tailored
              solutions, on-time project delivery, and budget-friendly pricing.
              Collaborate with us to enhance your digital presence and drive
              your business to new heights.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>Website Development</Badge>
              <Badge>Landing Pages</Badge>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[350px] p-3">
            <img
              src="./images/wordpress-development.gif"
              alt="wordpress-development"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Advertisement */}
        <div className="flex flex-col md:flex-row items-center gap-6 overflow-hidden">
          <div className="w-full md:w-1/2 h-[350px] p-3">
            <img
              src="./images/advertisement.png"
              alt="advertisement"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h2 className="text-black text-[24px] sm:text-[28px] lg:text-[30px] font-bold leading-[32px] lg:leading-[39px]">
              Advertisement
            </h2>
            <p className="text-black text-[16px] sm:text-[18px] mt-4">
              Optimize Your Ads For More Profit. We will help you to get more
              profit from your ads. We will help you to get more profit from
              your ads.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>Facebook Ads</Badge>
              <Badge>Instagram Ads</Badge>
              <Badge>Google Ads</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices