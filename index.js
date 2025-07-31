const express= require("express");
const app= express();
app.use(express.json());
app.get('/',function(req,res)
{
    const p=req.query.a;
    const t=req.query.t;
    const r=req.query.r;
    const si=(p*t*r)/100;
    res.json({
        result:"the simle interest is "+si
    })
})
app.listen(3000);
