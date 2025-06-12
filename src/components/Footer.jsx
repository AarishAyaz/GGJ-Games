import React from 'react';
import { Mail, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 space-y-5  ml-50">
          <div className="flex gap-6">
            <h5 className="hover:underline cursor-pointer">Privacy Policy</h5>
            <h5 className="hover:underline cursor-pointer">Code of Conduct</h5>
          </div>
          <h5>© Copyright 2020 Global Game Jam, Inc. All Rights Reserved.</h5>
          <h6 className="text-sm">website by make a spectacle</h6>
        </div>
        <div className="w-full md:w-1/2 flex justify-center gap-6">
          <Mail className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
          <Youtube className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
