const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');
const User = require ('./models/user.model.js');

app.use (cors ());
app.use (express.json ());

mongoose.connect (
  'mongodb+srv://yashzoworkid:IwpsfTZDZbWx1ain@cluster0.zfbnx41.mongodb.net/?retryWrites=true&w=majority',
  {useUnifiedTopology: true, useNewUrlParser: true}
);



require ('./routes/auth.routes') (app);

require ('./routes/company.routes') (app);

require ('./routes/developer.routes') (app);




app.listen (1337, () => {
  console.log ('Server started on 1337');
});
