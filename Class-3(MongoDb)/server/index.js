const express = require("express");
const mongoose = require("mongoose");



const dbUri =
  "mongodb+srv://mrinalbhattacharya_db_user:hOptSy87PqHkFLH7@cluster0.anop7ki.mongodb.net/LMS?appName=Cluster0";

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("DB Connection OK");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json())

// Course Manamegmet Platform

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
  },

  isPublished: {
    type: Boolean,
    required: true,
  },
});

let CourseModel = mongoose.model('course', courseSchema)

app.get("/", (req, res) => {
  res.send("Hello from the Server");
});


// Create a Course

app.post('/api/courses', async (req, res) => {
  await CourseModel.create({
    course_name: req.body.course_name,
    instructor: req.body.instructor,
    ratings: req.body.ratings,
    isPublished: req.body.isPublished
  })


  res.send('Course Created')
})

app.listen(8004, () => {
  console.log("Server Started");
});
//  If you are making a mistake that you need to go on battle pressure plocks present ma'am the WhatsApp group and in case you have not received the mail, then let me know that everyone are received so we have six days right now. I'll introduce you one scriptin third garden ready and sixth part.So in this tab we will be you will be setting TMI so that it's easy for them and you to connect a mutual A one all the entities should sit in P no V S following both the various right side and let Shankar D and we call them so accordingly shift we write no ship from next onward according to show to your team for the lab and the previous session that stuff to start marice and so element, badly sort of zero, is going to take rule to the lab as means you are not allowed to leave this root not even for equal to the year even also you have to learn you cannot ask to take any reason to leave the last rooms you cannot do all respective assignments or not if you have bigger assignments ninety minutes that means you have to study practice on your room to whatever you want to do you cannot eat the room in any circumstances should not be available on your test decide your bags only ten people can do finds any mobile phone and student to the mobile phone will be directed to your data simple extra activity is the only four U it is not something which is a regular part of this college or this course so use this line in the basic possible for yourself you have to test programmers from the college with US use that time when others verify your doubts but waste your time directly jobs for split down selects decided picture is complexity battle set of plugin, patch message to me n number bartay, curtain to move already to me, utilizationset.