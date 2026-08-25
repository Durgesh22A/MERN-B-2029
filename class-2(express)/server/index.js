const express = require("express");

const app = express();

app.use(express.json())

const courses = [
  { id: 1, courseName: "Java", instructor: "Anisha", ratings: 4.7 },
  { id: 2, courseName: "JavaScript", instructor: "Shounak", ratings: 4.8 },
  { id: 3, courseName: "DBMS", instructor: "EkamJeet", ratings: 4.9 },
  { id: 4, courseName: "Python", instructor: "Kunal", ratings: 5 },
];

// Read -> get

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/topics/courses", (req, res) => {
  res.send(courses);
});

app.get("/topics/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  res.send(course);
});

//Create - post If you are making a mistake that you need to go on battle pressure plocks present ma'am the WhatsApp group and in case you have not received the mail, then let me know that everyone are received so we have six days right now. I'll introduce you one scriptin third garden ready and sixth part. So in this tab we will be you will be setting TMI so that it's easy for them and you to connect a mutual A one all the entities should sit in P no V S following both the various right side and let Shankar D and we call them so accordingly shift we write no ship from next onward according to show to your team for the lab and the previous session that stuff to start marice and so element, badly sort of zero, is going to take rule to the lab as means you are not allowed to leave this root not even for equal to the year even also you have to learn you cannot ask to take any reason to leave the last rooms you cannot do all respective assignments or not if you have bigger assignments ninety minutes that means you have to study practice on your room to whatever you want to do you cannot eat the room in any circumstances should not be available on your test decide your bags only ten people can do finds any mobile phone and student to the mobile phone will be directed to your data simple extra activity is the only four U it is not something which is a regular part of this college or this course so use this line in the basic possible for yourself you have to test programmers from the college with US use that time when others verify your doubts but waste your time directly jobs for split down selects decided picture is complexity battle set of plugin, patch message to me n number bartay, curtain to move already to me, utilizationset


app.post("/topics/courses", (req, res) => {
  courses.push(req.body)
  res.send('Course Created')
})

// update
app.put('/topics/courses/:id', (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  course.courseName = req.body.courseName
  course.ratings = req.body.ratings

  res.send(course)
})


// , delete

app.delete('/topics/courses/:id', (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  // Delete the course
})


// patch 

app.listen(8002, () => {
  console.log("Server Started at port 8002");
});
