const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const readline = require("readline");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const port = process.env.PORT || 3002;
server.listen(port);

// socket
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const sendData = (data) => {
   io.emit("receive_data", data); // Use io.emit to send data to all connected clients
};

// Handle socket.io connections
io.on("connection", (socket) => {
  console.log("A client connected.");
});


// Defining the functionality of the input and output from the terminal
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// object that contains the values
const monitor = {
  Altitude: "",
  His: "",
  ADI: "",
};

// Function to get Altitude input
const getAltitudeInput = () => {
  reader.question(
    "Please enter Altitude Between 0 and 3000: ",
    (inputAltitude) => {
      if (inputAltitude >= 0 && inputAltitude <= 3000) {
        monitor.Altitude = inputAltitude;
        getHisInput();
      } else {
        console.log("Invalid input. Altitude must be between 0 and 3000.");
        getAltitudeInput(); // Repeat the question
      }
    }
  );
};

// Function to get His input
const getHisInput = () => {
  reader.question("Please enter His between 0 and 360: ", (inputHis) => {
    if (inputHis >= 0 && inputHis <= 360) {
      monitor.His = inputHis;
      getADIInput();
    } else {
      console.log("Invalid input. His must be between 0 and 360.");
      getHisInput(); // Repeat the question
    }
  });
};

// Function to get ADI input
const getADIInput = () => {
  reader.question("Please enter ADI Between -100 and 100: ", (inputADI) => {
    if (inputADI >= -100 && inputADI <= 100) {
      monitor.ADI = inputADI;
      reader.question("prees any key to send:", (inputKey) => {
        if (inputKey) {
          sendData(monitor);
        }
        console.log("sending data!");
        reader.close();
      });
    } else {
      console.log("Invalid input. ADI must be between -100 and 100.");
      getADIInput(); // Repeat the question
    }
  });
};

// Initial call to start the input process
getAltitudeInput();


