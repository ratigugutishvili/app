const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080

// Shared state array
let sharedState = ["ვაჟა", "ეკა", "ყველაზე მაგარი რატი","თამუნა",'ნინო', "კესო", "გოგიტა"];

app.use(cors());

// Endpoint to get and remove a random element from the shared state
app.get('/getRandom', (req, res) => {
  const randomIndex = Math.floor(Math.random() * sharedState.length);
  const randomElement = sharedState.splice(randomIndex, 1)[0];
  res.json({ randomElement });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
