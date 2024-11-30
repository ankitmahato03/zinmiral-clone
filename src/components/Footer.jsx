import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialMedias = [
  { name: "Twitter", url: "#" },
  { name: "Youtube", url: "https://www.youtube.com/@Zinmiral" },
  { name: "LinkedIn", url: "#" },
  { name: "Instagram", url: "https://www.instagram.com/zinmiral_/" },
  { name: "Facebook", url: "https://www.facebook.com/zinmiral/" },
];

const IconMap = {
  Twitter: Twitter,
  Youtube: Youtube,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
};

const Footer = () => {
  return (
    <footer className="mt-12 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <p>
        © 2024 Zinmiral All Rights Reserved. |{" "}
        <span>
          <a href="#" className="text-blue-400">Privacy Policy</a>
        </span>
      </p>
      <div className="flex gap-2">
        {SocialMedias.map((socialmedia, index) => {
          const Icon = IconMap[socialmedia.name];
          return (
            <a
              key={index}
              href={socialmedia.url}
              target="_blank"
              className="bg-black p-3 rounded-full hover:bg-gray-700"
            >
              <Icon className="text-white text-center" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
