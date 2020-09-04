const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    company_name: {
        type: String,
          trim:true
      },
      design_name: {
        type: String,
          trim:true
      },
      count: {
        type: String,
          trim:true
      },
      reed_pick: {
        type: String,
          trim:true
      },
      owner_fixing_date: {
        type: Date,
          trim:true
      },
      assigned_to: {
        type: Number,
          trim:true
      },
      process_details:[{
        stage_name:String,
        stage_start_date:Date,
        stage_end_date:Date,
        description:String,
        status:String
      }],
      status:{
        type:String
      }
      

},{timestamps:true})


//class
jobSchema.statics.findAndupdateJobById=async(job_id)=>{
  console.log(job_id)
const job=await Job.findByIdAndUpdate({_id:job_id})
console.log(job)

}










const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
// name: {
//   first: String,
//   last: { type: String, trim: true }
// }

