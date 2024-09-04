const express = require("express");
const userRoutes = require("./routes/user.route");
const PORT = 5000;
const app = express();

// const knex = require("knex")({
//   client: "postgresql",
//   connection: {
//     connectionString:
//       "postgres://default:oKxBNMv20bdw@ep-fancy-pine-a1ckflya-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
//   },
// });

app.use(express.json());

app.use("/api/users", userRoutes);

// app.get("/", async (req, res) => {
//   const result = await knex.select().table("users");
//   res.json(result);
// });

// app.get("/about", (req, res) => {
//   res.send("About route 🎉 ");
// });

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
