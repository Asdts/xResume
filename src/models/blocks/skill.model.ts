import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  skillsObj: {
    type: Map,
    of: [String],
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export default Skill;
