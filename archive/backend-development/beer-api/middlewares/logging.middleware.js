export default function logger(req, res, next) {
  console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
  console.log('HTTP METHOD', req.method);
  console.log('HTTP BODY', req.body);
  console.log('URL PARAMETER', req.params);
  next();
}

