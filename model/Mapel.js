import mongoose from 'mongoose'

const MapelSchema = new mongoose.Schema({
    namamapel: {
        type: String,
        unique: true,
        required: [true, "Masukkan Nama Mapel"]
    },
    gurumapel: {
        type: String,
        unique: true,
        required: [true, "Masukkan Nama Guru Mapel tersebut"]
    },
    kelas: {
        type: String,
        required: [true, "Masukkan Kelas"]
    },
    hari: {
        type: String,
        required: [true, "Masukkan Hari"]
    },
    waktu: {
        type: String,
        required: [true, "Masukkan Waktu"]
    },
})

export default mongoose.model("mapel", MapelSchema)