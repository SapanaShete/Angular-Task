
const User = require('../models/users-model');


exports.addUser = (req, res) => {
    console.log(req)


var user ={
    name: req.body.name,
    surname:req.body.surname,
    email: req.body.email,
    skills: JSON.stringify(req.body.skills),
    gender:req.body.gender,
    city: req.body.city,
    profile: req.body.uploadFileName
}
let UserSave = User.build(user);
if(req.body.id==="" && req.body.id===undefined && req.body.id===null){
  UserSave.save()
  .then((result) => {
    res.json({ msg: "Record is successfully added" });
  })
  .catch((err) => {
    console.log(err)
    return res.json({ "success": false, "err": err});
  })
}
else{ 
        User.update(user,
            { where: { id: req.body.id } })
            .then((result) => {
                return res.json({ "success": true, "msg": "User updated successfully" })
            }).catch((err) => {
                return res.json({ "success": false, "err":err });
            })

}
}


exports.getAllUser = (req, res) => {
  User.findAll({
    //where: [{ isActive: 1, isDeleted: 0, clientId: clientId }]
}).then(result => {

    return res.json(result);
}).catch((err) => {
    return res.json({ "success": false, "err": messages.genericServerError });
})
}


exports.getUser = (req, res) => {
  User.findOne({
    where: { email: req.params.id }
  }).then(result => {
    console.log("result",result)
      return res.json(result);
  }).catch((err) => {
      return res.json({ "success": false, "err": messages.genericServerError });
  })
 
}
exports.deleteUser = (req, res) => {
User.destroy({
  where: {id:req.params.id}
})
.then(result => {
  console.log("result",result)
  return res.json({ "success": true, "msg": "User Deleted successfully" })
}).catch((err) => {
    return res.json({ "success": false, "err": messages.genericServerError });
})
}
