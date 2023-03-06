import React, { useState, useEffect } from "react";
import s from "./Students.module.scss";
import axios from "axios";

const Students = () => {
  const [students, setstudents] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const getStudents = async () => {
    axios.get(BASE_URL + "/users").then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getStudents()
  }, []);

  return <div className={s.students}></div>;
};

export default Students;
