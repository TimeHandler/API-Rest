import { Router } from "express";

const router = Router()

/**
 * http://localhost:3002/items [GET]
 */

router.get("/", (req, res) => {
    res.send({data: 'AQUI_VAN_LOS_MODELOS'})
})

export { router }