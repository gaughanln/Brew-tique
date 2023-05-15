import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

// TODO changed username to firstName, lastName

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
    // trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
 
  
  // TODO
  // address:{

  // }
});

// TODO we need to hash the password information-does this do that? 

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;