const express = require("express");
const Job = require("../model/job-model");
const router = new express.Router();
router.use(express.json());
//const checkAuth=require('../middleware/check-auth')


router.post("/api/job/createnew", async (req, res) => {
  const job = await new Job(req.body);
  try {
   // console.log(job);
    await job.save();
    res.send(job);
  } catch (e) {
    res.status(400);
    res.send();
  }
});

router.get("/api/job/alljobs", async (req, res) => {
  try {
    res.send(await Job.find({}));
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

router.patch("/api/job/updatejob/:id", async (req, res) => {
  const a=req.body
  //console.log(a);
  try {
    console.log("true");

    const j = await Job.findByIdAndUpdate(req.params.id, a, {
      new: true,
      useFindAndModify:false
    });
    console.log("true","ads");
   await res.status(200);
   await  res.send(j);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

router.delete("/api/job/deletejob/:id", async (req, res) => {
  try {
    await Job.findByIdAndRemove(req.params.id);
    res.status(200)
    res.send("Deleted Job");
  } catch (e) {
    res.status(400)
   res.send(e)
  }
});

module.exports = router;
