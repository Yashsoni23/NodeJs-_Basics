const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
let users = [];

app.use(bodyParser());
app.use(bodyParser({ extended: true }));

// Basics CRUD of APIs

app.get("/users", (req, res) => {
  try {
    res.json({
      status: true,
      totalUsers: users.length,
      data: users,
    });
  } catch (error) {
    res.json({
      status: true,
      data: error.message,
    });
    console.log(error.message);
  }
});

app.post("/user/post", async (req, res) => {
  try {
    const userData = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };

    users.push(userData);
    res.json({ status: true, data: userData });
    console.log(userData);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/user/delete", async (req, res) => {
  try {
    users.pop();

    res.json({
      status: true,
      totalUsers: users.length,
      data: users,
    });
  } catch (error) {
    res.json({
      status: false,
      totalUsers: users.length,
      data: "error",
      error: error.message,
    });
    console.log(error.message);
  }
});

// Basics introduction of APIs
app.get("/demo", async (req, res) => {
  try {
    const userData = [
      {
        name: "Yash",
        age: 21,
        email: "user@example.com",
        skills: ["cpp", "python", "javascript"],
        friends: [
          {
            name: "Rajiv",
            age: 21,
            email: "user@example.com",
          },
          {
            name: "Vimarsh",
            age: 21,
            email: "user@example.com",
          },
        ],
      },
      {
        name: "Rajiv",
        age: 21,
        email: "user@example.com",
      },
      {
        name: "Vimarsh",
        age: 21,
        email: "user@example.com",
      },
      {
        name: "Abhay",
        age: 21,
        email: "user@example.com",
      },
      {
        name: "Jaiman",
        age: 21,
        email: "user@example.com",
        image:
          "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.webp?b=1&s=612x612&w=0&k=20&c=srEu7bQ9CBkYi_BIIr4Y36kcQ1OqD_SqfQ0_T316Zcw=",
      },
    ];
    res.json(userData);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/", async (req, res) => {
  res.json({
    status: true,
    msg: "Welcome to the Backend",
  });
});

app.get("/promise", async (req, res) => {
  const promise1 = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("I am a promise");
      }, 5000);
    } catch (error) {
      reject(error);
    }
  });
  promise1.then((data) => {
    console.log(data);
    res.json({ data: data });
  });
});

app.get("/user", (req, res) => {
  res.send("I am Yash");
});

app.listen(port, () => {
  console.log(`Welcome to the Backend !: ${port}`);
});
