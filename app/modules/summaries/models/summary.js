import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import {v4 as uuidv4} from 'uuid';

const SummarySchema = new Schema({
  userId: {
    type: String,
    required: 'User id is required',
  },
  hash: {
    type: String,
    unique: 'Hash mast be unique',
  },
  title: {
    type: String,
    required: 'Title is required',
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  skype: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: 'Description is required',
    trim: true,
  },
  tags: {
    type: [String],
    required: 'Tags are required',
    trim: true,
  },
  history: [{
    companyName: {
      type: String,
      required: 'Company name is required',
      trim: true,
    },
    title: {
      type: String,
      required: 'Title name is required',
      trim: true,
    },
    date: {
      start: {
        type: Date,
        required: 'Title name is required',
      },
      end: {
        type: Date,
      },
    },
    currentWork: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: 'Description is required',
      trim: true,
    },
  }],
});
SummarySchema.plugin(uniqueValidator);
SummarySchema.pre('save', function(next) {
  if (!this.hash) {
    this.hash = uuidv4();
  }
  next();
});
SummarySchema.statics.createFields = ['title', 'phone', 'skype', 'description', 'history', 'tags', 'hash'];

export default mongoose.model('summary', SummarySchema);
