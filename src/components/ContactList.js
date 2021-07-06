import React from "react";
import Contact from "./Contact.js";

const contacts = [
  {
    name: "Ryan",
    avatar:
      "https://gravatar.com/avatar/c6edc999d67e59220de043666a610b41?s=400&d=robohash&r=x",
    online: true
  },
  {
    name: "Nigel",
    avatar:
      "https://gravatar.com/avatar/69b0e365d640cc1b505566487d7d00aa?s=400&d=robohash&r=x",
    online: false
  },
  {
    name: "Garin",
    avatar:
      "https://gravatar.com/avatar/5efd1bc2c70beddb6c90b5a6f0678d91?s=400&d=robohash&r=x",
    online: true
  }
];

const ContactList = () => (
  <div>
    {contacts.map((item, index) => (
      <Contact
        key={index}
        name={item.name}
        avatar={item.avatar}
        status={item.online}
      />
    ))}
  </div>
);

export default ContactList;
