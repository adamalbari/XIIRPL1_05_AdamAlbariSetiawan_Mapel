import express from 'express';
const router = express.Router()

import MapelController from '../controllers/MapelControllers.js'


router.get('/Mapel', MapelController.index)
router.get('/Mapel/:namamapel', MapelController.show)
router.post('/Mapel', MapelController.store)
router.put('/Mapel/:namamapel', MapelController.update)
router.delete('/Mapel/:namamapel', MapelController.destroy)

export default router