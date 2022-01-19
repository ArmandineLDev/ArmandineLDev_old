import React from "react";

const SocialItem = ({ item }) => {
  return (
    <a href={item.link} key={item.id}>
        <img
          src={item.icon}
          className="social-contact-icon-img"
          alt={item.platform}
        />
    </a>
  );
};

export default SocialItem;
