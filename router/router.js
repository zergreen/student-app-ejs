const express = require("express");
const router = express.Router();

// const url = "/";

const { Endpoint } = require("../controller/endpoint.js");

//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

//delete student
router.delete("/deleteStudent", new Endpoint().deleteStudentEndpoint);

//get student
router.get("/getStudent", new Endpoint().getStudentEndpoint);

//get student by id
router.get("/getUserStudent", new Endpoint().getUserStudentEndpoint);

//update student
router.put("/updateStudentName", new Endpoint().updateStudentNameEndpoint);
// router.put("/updateStudent/:id", new Endpoint().updateStudentEndpoint);

//add subject
router.post("/addSubject", new Endpoint().addSubjectEndpoint);

//add score
router.post("/addScore", new Endpoint().addScoreEndpoint);

//update score
router.put("/updateScore", new Endpoint().updateScoreEndpoint);

//update subject
router.put("/updateSubject", new Endpoint().updateSubjectEndpoint);

router.get("/getOnlyStudent", new Endpoint().getOnlyStudentEndpoint);

router.get("/getStudentById/:id", new Endpoint().getStudentByIdEndpoint);

//mean
//router.get("/meanPoint", new Endpoint().meanPointEndpoint);

// เทสลองพิมพ์ภาษาไทย

// "../views/pages/homepage"
// "pages/homepage" : is equal like above

router.get("/", (req, res) => {
  // console.log(__dirname);
  // res.render("pages/homepage", {
  //   title: "Home",
  // });
  return res.status(201).send({ response: "hello world from serever" });
});

router.get("/table", function (req, res) {
  res.render("pages/table", {
    title: "Table",
  });
});

router.get("/create", function (res, res) {
  // this.url = "/getOnlyStudent";
  // axios
  //   .get("/getOnlyStudent")
  //   .then((res) => console.log(res))
  //   .catch((error) => {
  //     console.log(error);
  //   });
  res.render("pages/create", {
    title: "Create",
  });
});

module.exports = router;
