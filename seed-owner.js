// اجرا فقط یک‌بار روی کامپیوتر خودت (بک‌اند). رمز را در فایل ننویس:
// OWNER_PASSWORD='رمز-جدید' node seed-owner.js
const admin=require("firebase-admin");
admin.initializeApp({credential:admin.credential.cert(require("./serviceAccount.json"))});
const email=process.env.OWNER_EMAIL||"hawre.kh.89@gmail.com",password=process.env.OWNER_PASSWORD;
if(!password){console.error("hawreh");process.exit(1)}
(async()=>{let u;try{u=await admin.auth().getUserByEmail(email);await admin.auth().updateUser(u.uid,{password})}
catch{u=await admin.auth().createUser({email,password,displayName:"مالک"})}
await admin.firestore().doc("users/"+u.uid).set({name:"مالک",role:"owner"},{merge:true});console.log("owner ready",u.uid);process.exit(0)})();
