import React from "react";
import PasswordDelete from "./PasswordDelete";

export default {
  title: "PW-Manager/Inputfield",
  parameters: { layout: "centered" },
  component: PasswordDelete,
};

export const deletePassword = () => <PasswordDelete />;
