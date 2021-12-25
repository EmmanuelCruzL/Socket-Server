import { Router, Response, Request } from "express";

const router = Router();

router.get('/mensajes', (req:Request, res:Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien',
    });
});


router.post('/mensajes', (req:Request, res:Response) => {
    
    const message = req.body.message;
    const from = req.body.from;

    res.json({
        ok: true,
        message,
        from,
    });
});



router.post('/mensajes/:id', (req:Request, res:Response) => {
    
    const message = req.body.message;
    const from = req.body.from;
    const id = req.params.id;

    res.json({
        ok: true,
        message,
        from,
        id,
    });
});




export default router;