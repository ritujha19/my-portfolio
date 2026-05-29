/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
app.post("/contact", (req, res) => {
    const {name,email,subject,message} = req.body;
    if(!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
  console.log(req.body);

  return res.status(200).json({
    success: true,
    message: "Message received",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});