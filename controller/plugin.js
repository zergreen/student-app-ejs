const connection = require("../database.connect/connector");

class Plugin {
  createStudentPlugin = (student, res) => {
    let sql = `INSERT INTO Student
        (
            student_id, 
            name,
            last_name
        )
        VALUES
        (
            ?, ?, ?
        )`;
    connection.query(sql, mapping, err);
    connection.query(
      sql,
      [student.student_id, student.name, student.last_name],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          //   console.log("student : " + student.student_id);
          console.log("create student finish");
          return res.status(201).send({ response: "create student finish" });
          // console.log("create student finish");
        }
      }
    );
  };

  deleteStudentPlugin = (student, res) => {
    let sql = ` DELETE FROM Student 
                    WHERE student_id = ? `;
    connection.query(sql, [student.student_id], function (err) {
      if (err) {
        console.log(err);
      } else {
        return res.status(201).send({ response: "delete student finish" });
      }
    });
  };

  getAllStudentPlugin = (res) => {
    let sql = ` SELECT st.student_id,name,last_name,sj.subject_name,sc.score 
                    FROM Student st 
                    INNER JOIN Score sc   on sc.student_id = st.student_id
                    INNER JOIN Subject sj on sc.subject_id = sj.subject_id
                    `;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        return res.render("homepage", { data: result });
      }
    });
  };

  getUserStudentPlugin = (student, res) => {
    let sql = ` SELECT st.student_id,name, last_name, sj.subject_name, sc.score
                    FROM Student st
                    INNER JOIN Score sc on sc.student_id = st.student_id
                    INNER JOIN Subject sj on sc.subject_id = sj.subject_id 
                    WHERE st.student_id = ? `;
    connection.query(sql, [student.student_id], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).send({ response: result });
      }
    });
  };

  updateStudentNamePlugin = (student, res) => {
    // console.log(student);
    let sql = `UPDATE Student
        SET name = ?, last_name = ?
        WHERE student_id = ?`;

    connection.query(
      sql,
      [student.name, student.last_name, student.student_id],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("update student finished");
          return res.status(201).send({ response: "update student finished" });
        }
      }
    );
  };

  addSubjectPlugin = (subject, res) => {
    let sql = `
            INSERT INTO Subject
                (
                    subject_id,
                    subject_name,
                    teacher_name
                )
            VALUES
                ( ?
                    , ? , ?
                )
            `;
    connection.query(
      sql,
      [subject.subject_id, subject.subject_name, subject.teacher_name],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("add subject finished");
          return res.status(201).send({ response: "create subject finished" });
        }
      }
    );
  };

  addScorePlugin = (score, res) => {
    // console.log(score);
    let sql = `
            INSERT INTO Score
                (
                    student_id,
                    subject_id,
                    score
                )
            VALUES
                ( ?, ? , ?
                )
            `;
    connection.query(
      sql,
      [score.student_id, score.subject_id, score.score],
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("add score finished");
          return res.status(201).send({ response: "add score finished" });
        }
      }
    );
  };

  updateScorePlugin = (score, res) => {
    let sql = `
            UPDATE Score
            SET score = ?
                WHERE student_id = ? AND subject_id = ? `;
    connection.query(
      sql,
      [score.score, score.student_id, score.subject_id],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log("update score finished");
          return res.status(201).send({ response: result });
        }
      }
    );
  };

  updateSubjectPlugin = (subject, res) => {
    let sql = `
            UPDATE Subject
            SET subject_name = ? , teacher_name = ?
                WHERE subject_id = ? `;
    connection.query(
      sql,
      [subject.subject_name, subject.teacher_name, subject.subject_id],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log("update subject finished");
          return res.status(201).send({ response: result });
        }
      }
    );
  };

  getOnlyStudentPlugin = (res) => {
    let sql = `SELECT * FROM Student;`;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        return res.status(200).send({ response: result });
      }
    });
  };

  // meanPointPlugin = (score, res) => {
  //     let sql = ` SELECT sj.subject_name, sc.score
  //                 FROM  Score sc
  //                 INNER JOIN Subject sj on sc.subject_id = sc.subject_id

  //                 WHERE st.student_id = ? `
  //     connection.query(sql, [student.student_id],
  //         function(err, result) {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 return res.status(200).send({ response: result });
  //             }
  //         })
  // }

  getStudentByIdPlugin = (req, res) => {
    console.log("ID : " + req.params.id);
    let sql = `SELECT * from Student WHERE student_id = ?`;
    connection.query(sql, [req.params.id], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        // console.log("getStudentById (ID) : " + id + "\t finished");
        console.table(result);
        console.log(JSON.stringify(result));
        return res.status(200).send({ response: result });
      }
    });
  };
}
module.exports = {
  Plugin,
};
