import React, { useState, useEffect } from "react";
import s from "./Students.module.scss";
import axios from "axios";
import MyCard from "../Card/Card";

const Students = () => {
  const [students, setStudents] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const getStudents = async () => {
    axios.get(BASE_URL + "/users").then((res) => {
      setStudents(res.data);
    });
  };
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className={s.students}>
      <div className={s.cards}>
        {students.map((student) => {
          return (
            <MyCard
              key={student.id}
              name={student.name}
              id={student.id}
              img="https://s0.rbk.ru/v6_top_pics/media/img/7/76/756686017039767.jpg"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Students;
