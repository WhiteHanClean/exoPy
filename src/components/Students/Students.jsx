import React, { useState, useEffect } from "react";
import s from "./Students.module.scss";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const getStudents = async () => {
    axios.get(BASE_URL + "/users").then((res) => {
      setStudents(res.data)
    });
  };
  useEffect(() => {
    getStudents()
  }, []);

  return <div className={s.students}>
    {
        students.map(student => {
            return (
                <h1>{student.name}</h1>
            )
        })
    }
  </div>;
};

export default Students;
