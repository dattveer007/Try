const app=require('express')();
const fs=require('fs');
const compression =require('compression');
const data=fs.readFileSync('src/sample xml/2.Fetch a company details.txt');
app.use(compression({
    level:9
}));
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server is running ');
})
app.get('/',(req,res)=>{
    // return res.send("veer");
    return res.sendFile('/Users/veer/Desktop/Payload/src/sample xml/2.Fetch a company details.txt');
})
app.get('/home',(req,res)=>{
    // return res.send("veer");
    return res.sendFile('/Users/veer/Desktop/Payload/Accounting Voucher 8.44.17 AM.xml');
})