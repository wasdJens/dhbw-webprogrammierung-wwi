import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('A list of all cars');
})

router.get('/about', (req, res) => {
    res.send('About cars');
})

export default router;