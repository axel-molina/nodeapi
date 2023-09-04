import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send({data:'All products'});
});

export default router;