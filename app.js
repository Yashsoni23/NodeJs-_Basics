const express = require("express");

const app = express();
const port = 5000;

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

app.get("/user", (req, res) => {
  res.send("I am Yash");
});

app.listen(port, () => {
  console.log(`Welcome to the Backend !: ${port}`);
});
