import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.plugin(uniqueValidator);

const UserShema = new Schema({
  email: {
    type: String,
    unique: 'User with email "{VALUE}" already exist',
    lowercase: true,
    required: 'Email is required',
    trim: true,
  },
  hash: {
    type: String,
    unique: 'Hash mast be unique',
  },
  password: {
    type: String,
    required: 'Password is required',
    trim: true,
  },
  firstName: {
    type: String,
    lowercase: true,
    required: 'First name is required',
    trim: true,
  },
  lastName: {
    type: String,
    lowercase: true,
    required: 'Last name is required',
    trim: true,
  },
}, {
  timestamps: true,
});

UserShema.statics.createFields = ['email', 'password', 'firstName', 'lastName'];

UserShema.pre('save', function(next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  if (!this.hash) {
    this.hash = uuidv4();
  }
  next();
});

UserShema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('user', UserShema);
