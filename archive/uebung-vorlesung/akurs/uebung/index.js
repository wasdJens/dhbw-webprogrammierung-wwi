import express from "express";

const server = express();
const port = 8080;
server.use(express.json());

const machines = [];
let id = 0;

server.post('/machines', (req, res) => {
  const {name, serialNo, location, on, data} = req.body;
  machines.push({
    name,
    serialNo,
    location,
    on,
    data,
    id
  });
  id++;

  res.status(201).json({
    name,
    serialNo,
    location,
    on,
    data,
    id
  });
});

server.get('/machines', (req, res) => {
  res.send(machines);
})

server.patch('/machines/:id', (req, res) => {
  const { id } = req.params;
  const { serialNo } = req.body;
  const machine = machines.find((machine) => machine.id === parseInt(id));
  if (!machine) {
    res.status(400).send('Not found');
  }
  machine.serialNo = serialNo;

  res.status(200).send('Updated!');
})

server.delete('/machines/:id', (req, res) => {
  const { id } = req.params;
  const machineIndex = machines.findIndex((machine) => machine.id === parseInt(id));
  if (machineIndex !== -1) {
    machines.splice(machineIndex, 1);
    res.status(200).send('Deleted');
  } else {
    res.status(400).send('Machine not found');
  }
})

server.listen(port, () => {
  console.log('Running');
})