import React from "react";
import SocialMedia from "./commons/SocialMedia";

const Footer = () => {
  return (
    <div className="text-center">
      <div className="px-6 pt-6">
        <div className="flex justify-center mb-6">
          <SocialMedia />
        </div>

        <div className="mb-6">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p> */}
        </div>
        <div className="text-center p-4">
          © 2022 Copyright -
          <a href="/">
            &nbsp;ArmandineLDev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
