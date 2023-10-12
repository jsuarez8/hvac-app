import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  return {};
};
export default Register;
