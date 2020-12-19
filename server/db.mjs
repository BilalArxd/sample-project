import mysql from "promise-mysql";

var connection = await mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "pass",
  database: "home",
});

export const getPersons = async () => {
  let persons = [];
  let rows = await connection.query("SELECT * FROM Person");
  rows.map((row) => {
    persons.push({ id: row.id, name: row.name, image: row.image });
  });
  return persons;
};

export const addPerson = async (name) => {
  let persons = [];
  let rows = await connection.query("SELECT * FROM Person");

  let addResposne = await connection.query(
    `INSERT INTO person (name,id,image) VALUES ('${name}',${
      rows.length + 1
    },'')`
  );
  rows = await connection.query("SELECT * FROM Person");
  rows.map((row) => {
    persons.push({ id: row.id, name: row.name, image: row.image });
  });
  return persons;
};
