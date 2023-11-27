import Mapel from "../model/mapel.js"

export default {

    // Menampilkan semua Mapel
    index: async (req, res) => {
        try {
            const mapel = await Mapel.find()
            if(mapel.length > 0){
                res.status(200).json({
                    status: true,
                    data: mapel,
                    method: req.method,
                    url: req.url,
                })
            } else {
                res.json({
                    status: false,
                    message: "Mapel masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
               
            })
        }
    },

    // Menampilkan Mapel
    show: async (req, res) => {
        try {
            const mapel = await Mapel.find({ namamapel: req.params.namamapel }).exec() 
            res.status(200).json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                
            })
        }
    },

    // Menambah Mapel
    store: async (req, res) => {
        try {
            const mapel = await Mapel.create(req.body)
            res.status(200).json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Mapel ditambahkan",
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                
            })
        }
    },

    // Update Mapel
    update: async (req, res) => {
        try {
        
        const mapel = await Mapel.updateOne(
            {namamapel: req.params.namamapel}, 
            req.body, {
                new: true,
                runValidators: true
            }
        ) // 
        res.json({
            status: true,
            data: mapel,
            method: req.method,
            url: req.url,
            message: "Mapel diupdate"
        })
        } catch (error) {
            res.status(400).json({
                status: false,
               
            })
        }
    },

    // Menghapus Mapel
    destroy: async (req, res) => {
        try {
            await Mapel.deleteOne({namamapel: req.params.namamapel})
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Mapel berhasil dihapus"
            })

        } catch (error) {
            res.status(400).json({
                status: false,
               
            })
        }
    },
}