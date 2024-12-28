import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abdullah-naeem-63b259247',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/say_abd.allah',
      icon: <Instagram className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Let's Connect</h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;