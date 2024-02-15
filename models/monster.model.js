import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: {type: String, required: true },
        imageUrl: { type: String },
        email: { type: String, required: true }, 
        address: {
          street: { type: String },
          suite: { type: String },
          city: { type: String },
          zipcode: { type: String },
          geo: {
            lat: { type: String },
            lng: { type: String }
          }
        },
        phone: { type: String },
        website: { type: String },
        company: {
          name: { type: String },
          catchPhrase: { type: String },
          bs: { type: String }
        },
        id: { type: Number, unique: true } // id field has unique constraint
    },
    { timestamps: true, strictQuery: true }
);


// middleware to auto-increment the id field
MonsterSchema.pre('save', async function(next) {
    try {
        if (!this.isNew) { // Check if monster is new
            return next(); // If not new, skip auto-increment
        }
        const highestMonster = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } }); // find the monster with the highest id
        if (highestMonster) {
            this.id = highestMonster.id + 1; // Set id to highest id + 1
        } 
        else {
            this.id = 1; // Set id to 1 if there are no existing monsters
        }
        next();
    } 
    catch (error) {
        next(error);
    }
});

const Monster = mongoose.model("Monster", MonsterSchema);

export default Monster;
