import mongoose, { connect } from 'mongoose';

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://priyasneh511:AdityaSaandHai@cluster0.fwelpqi.mongodb.net/')
        console.log('mongo DB is connected');
    }
    catch (e) {
        console.log(e);
    }
};

export default connectToDB;