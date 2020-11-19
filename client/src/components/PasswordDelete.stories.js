import React from "react";
import PasswordDelete from "./PasswordDelete";

export default {
  title: "PW Manager",
  component: PasswordDelete({ onSearch: "pin" }),
};

const deletePassword = () => <PasswordDelete />;
