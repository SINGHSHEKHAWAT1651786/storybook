const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifieTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongoose Connected: ${process.env.MONGO_URI}`);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB Connection Error', error);
        process.exit(1);
    }
}
module.exports = connectDB;