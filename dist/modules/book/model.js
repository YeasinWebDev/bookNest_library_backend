import mongoose, { Schema } from 'mongoose';
const bookSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    img: { type: String, required: true },
}, {
    timestamps: true,
});
export const Book = mongoose.model('Book', bookSchema);
//# sourceMappingURL=model.js.map