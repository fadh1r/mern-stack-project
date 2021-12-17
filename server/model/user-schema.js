import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    sex: String,
    rank: String,
    startdate: [Date],
    phone: Number,
    email: String,
    superior: String,
    numberofds: Number,
    //avatar: Schema.Types.Mixed
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const User = mongoose.model('user', userSchema);

export default User;