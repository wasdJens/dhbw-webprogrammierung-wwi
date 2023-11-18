import express from "express";

const server = express();
server.use(express.json());
const port = 8080;

const machines = [];

server.post('/machines', (req, res) => {
  machines.push(req.body);
  res.status(201).send('Geklappt!');
})

server.get('/machines', (req, res) => {
  res.json(machines);
})

server.patch('/machines/:serialNo', (req, res) => {
  let body = req.body;
  let serialNo = req.params.serialNo;

  for (const machine of machines) {
    if (serialNo === machine.serialNo) {
      machine.serialNo = body.serialNo;
    }
  }
  res.status(200).send('updated');
})

server.delete('/machines/:serialNo', (req, res) => {
  const serialNo = req.params.serialNo;
  const index = machines.findIndex(machine => machine.serialNo === serialNo);
  if (index !== -1) {
    machines.splice(index, 1);
    res.status(200).send('deleted');
  } else {
    res.status(404).send('not found');
  }
})

server.listen(port, () => {
  console.log('Running...');
})