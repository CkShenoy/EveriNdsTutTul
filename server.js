// const { request, raw } = require("express")
var ServerVap = require("express");
var ServerVaj = ServerVap();
ServerVaj.use(ServerVap.json()); //Doubt

//database connection
var SdbCncVap = require("mysql");
var SdbCncVaj = SdbCncVap.createConnection({
  host: "localhost",
  user: "SdbUsr",
  password: "UsrPwd4Sdb",
  database: "NamSdb",
});

SdbCncVaj.connect((ErrSdbVar) => {
  if (ErrSdbVar) throw ErrSdbVar;
  else console.log("Sdb Connected");
});

// till here
var JoiVap = require("joi");
var ValidatorVap = require("express-joi-validation").createValidator({});

//Server Connection
ServerVaj.listen(8000, () => {
  console.log("Server has started and running....");
});

//For Getting the Information
ServerVaj.get("/", (req, res) => {
  res.send("<h1>Welcome to my Awesome Website</h1>");
});

ServerVaj.get("/contact", (req, res) => {
  res.send("<h1>You can contact me on 100</h1>");
});

ServerVaj.get("/about", (req, res) => {
  res.send("<h1>Hey there I am Chethan Kumar Shenoy</h1>");
});

ServerVaj.get("/user/:username/:bill", (req, res) => {
  var UsernameVar = req.params.username;
  var BillVar = req.params.bill; //Parameters=Params
  res.send(
    `<h1>Hello ${UsernameVar}... Nice meeting You! Please Pay the ${BillVar}</h1>`
  );
});

//For Add or Creating the Information
ServerVaj.post("/info", (req, res) => {
  var UserPwdVar = req.body.PwdVak;
  if (
    UserPwdVar.length < 8 ||
    !UserPwdVar.search(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) ||
    !UserPwdVar.match(/ \!|\@|\#|\$|\%|\^|\&|\*/)
  ) {
    res.send(`<h1>Password not Accepted</h1>`);
  }
  res.send(`<h1>Password is ${UserPwdVar}</h1>`);
});

//Update Entire Information
ServerVaj.put("/info/:uid", (req, res) => {
  var UidVar = req.params.uid;
  var MobVar = req.body.MobVak;
  res.send(`<h1>${MobVar} has been updated for ID ${UidVar}</h1>`);
});

//Update only one Information
ServerVaj.patch("/info/:uid", (req, res) => {
  var UidVar = req.params.uid;
  var MobVar = req.body.MobVak;
  res.send(`<h1>${MobVar} has been updated for ID ${UidVar}</h1>`);
});

//Delete Entire Information
ServerVaj.delete("/info/:uid", (req, res) => {
  var UidVar = req.params.uid;
  res.send(`<h1>The Info related to ID  ${UidVar} has been Deleted!</h1>`);
});

ServerVaj.get("/resume", (req, res) => {
  res.sendFile("resume.html", { root: __dirname });
});

ServerVaj.get("/DownloadAdhaar", (req, res) => {
  let FileVar = `${__dirname}/storage/Adhaar_Card.pdf`;
  res.download(FileVar);
});

//Using CRUD Operation
var WishAryVar = ["Phone", "Clothes", "Watch", "Shoes", "EarBuds"];

ServerVaj.get("/wish", (req, res) => {
  res.json(WishAryVar);
});

ServerVaj.get("/wish/:idx", (req, res) => {
  var IdxVar = req.params.idx;
  res.json(WishAryVar[IdxVar]);
});

ServerVaj.post("/wish", (req, res) => {
  var WishVar = req.body.WishVak;
  var check = CheckItem(WishVar, res);
  if (check == 1) WishAryVar.push(WishVar);
  res.json(WishAryVar);
});

ServerVaj.put("/wish/:idx", (req, res) => {
  var WishVar = req.body.WishVak;
  var IdxVar = req.params.idx;
  var check = CheckItem(WishVar, res);
  if (check == 1) WishAryVar[IdxVar] = WishVar;
  res.json(WishAryVar);
});

ServerVaj.delete("/wish/:idx", (req, res) => {
  var IdxVar = req.params.idx;
  WishAryVar.splice(IdxVar, 1);
  res.json(WishAryVar);
});

function CheckItem(itm, res) {
  if (WishAryVar.includes(itm)) {
    res.send("Get Lost");
  } else if (itm.trim() == "") {
    res.send("Enter a Valid Input");
  } else return 1;
}

var DreamAryVar = [
  {
    Name: "Shadab",
    Plan: "Buy Mustang",
    Cost: 10000000,
    Year: "20 Jan 2032",
  },
  {
    Name: "Chethan",
    Plan: "MacBook Pro",
    Cost: 579900,
    Year: "27 Feb 2027",
  },
  {
    Name: "Thanuja",
    Plan: "Independent House",
    Cost: 20000000,
    Year: "1 October 2032",
  },
  {
    Name: "Karthik",
    Plan: "Mercedes Benz",
    Cost: 20000000,
    Year: "28 Feb 2030",
  },
  {
    Name: "Akash",
    Plan: "Sneakers Collection",
    Cost: 200000,
    Year: "30 Nov 2025",
  },
];

//Get All Dream
ServerVaj.get("/dream", (req, res) => {
  res.json(DreamAryVar);
});

//Get one Dream
ServerVaj.get("/dream/:idx", (req, res) => {
  var IdxVar = req.params.idx;
  res.json(DreamAryVar[IdxVar]);
});

//Post a Dream
ServerVaj.post("/dream", (req, res) => {
  var DreamVar = req.body.DreamVak;
  DreamAryVar.push(DreamVar);
  res.json(DreamAryVar);
});

//Update a Dream
ServerVaj.put("/dream/:idx", (req, res) => {
  var IdxVar = req.params.idx;
  var DreamVar = req.body.DreamVak;
  DreamAryVar[IdxVar] = DreamVar;
  res.json(DreamAryVar);
});

//Delete a Dream
ServerVaj.delete("/dream/:idx", (req, res) => {
  var IdxVar = req.params.idx;
  DreamAryVar.splice(IdxVar, 1);
  res.json(DreamAryVar);
});

ServerVaj.get("/user", (ReqNdsVar, ResNdsVar) => {
  var SqlQryVar = "SELECT UidCol, NamCol, MblCol, MylCol From NamTbl";
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.get("/user/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var SqlQryVar = `SELECT UidCol, NamCol, MblCol, MylCol From NamTbl WHERE UidCol=${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar[0]);
  });
});

// ServerVaj.post('/user', (ReqNdsVar, ResNdsVar) =>
// {
//     var UsrVar = ReqNdsVar.body
//     console.log(UsrVar.NamVak)
//     var ProperCseVar = UsrVar.NamVak.split(" ").map((ItmVar) => ItmVar.charAt(0).toUpperCase() + ItmVar.slice(1)).join(" ")
//     console.log(ProperCseVar)
//     if (UsrVar.NamVak.trim() == "" || UsrVar.MobVak.trim() == "" || UsrVar.MylVak.trim() == "")
//         ResNdsVar.send("Please Give all Valid Input, It can't be Empty")
//     else if (UsrVar.NamVak != ProperCseVar || !UsrVar.NamVak.match(/^[A-Za-z ]+$/g))
//         ResNdsVar.send("Naam Sahi se Likh le bhaii")
//     else if (UsrVar.MobVak.length != 10 || !UsrVar.MobVak.match(/^[0-9]+$/g) || UsrVar.MobVak[0] < 6)
//         ResNdsVar.send("Enter a valid number")
//     else if (!UsrVar.MylVak.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g))
//         ResNdsVar.send("Email Sahi nahi hai beta jiii")
//     else
//     {
//         var SqlQryVar = `INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NameVak}","${UsrVar.MblVak}","${UsrVar.MylVak}")`
//         SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//         {
//             if (ErrSdbVar) throw ErrSdbVar
//             ResNdsVar.json(ResSdbVar)
//         })
//     }
// })

let UsrSchemaVar = JoiVap.object({
  NamVak: JoiVap.string().alphanum().min(3).max(30).required(),
  MobVak: JoiVap.string()
    .length(10)
    .regex(/^[6-9][0-9]{9}$/)
    .required(),
  MylVak: JoiVap.string().email({ minDomainAtoms: 2 }).required(),
  // "PwdVak": JoiVap.string().regex(/^[a-zA-Z0-9]{8,20}$/).required(),
});

ServerVaj.post("/user", ValidatorVap.query(UsrSchemaVar), (Req, Res) => {
  var UsrVar = Req.body;
  var SqlQryVar = `INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NameVak}","${UsrVar.MblVak}","${UsrVar.MylVak}")`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.put("/user/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var UsrVar = ReqNdsVar.body;
  var SqlQryVar = `UPDATE NamTbl SET NamCol="${UsrVar.NamVak}", MblCol="${UsrVar.MblVak}", MylCol="${UsrVar.MylVak}" WHERE UidCol=${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.patch("/user/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var UsrVar = ReqNdsVar.body;
  var SqlQryVar = `UPDATE NamTbl SET MylCol="${UsrVar.MylVak}" WHERE UidCol=${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.delete("/user/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var SqlQryVar = `DELETE FROM NamTbl WHERE UidCol=${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.post("/product", (req, res) => {
  var ProDet = req.body;
  var SqlQryVar = `INSERT INTO PrdTbl (TitCol,DetCol,CostCol) VALUES ("${ProDet.TitVak}","${ProDet.DetVak}","${ProDet.CostVak}")`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    res.json(ResSdbVar);
  });
});

ServerVaj.post("/order", (req, res) => {
  var OrdDet = req.body;
  var SqlQryVar = `INSERT INTO OrdTbl (UsrUidCol,PrdUidCol,QntCol) VALUES (${OrdDet.UsrUidVak},${OrdDet.PrdUidVak},${OrdDet.QntColVak})`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    res.json(ResSdbVar);
  });
});

ServerVaj.get("/prod", (ReqNdsVar, ResNdsVar) => {
  var SqlQryVar = "SELECT UidCol, TitCol, DetCol, CostCol From PrdTbl";
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.get("/prod/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var SqlQryVar = `SELECT UidCol, TitCol, DetCol, CostCol From PrdTbl WHERE UidCol=${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.post("/prod", (ReqNdsVar, ResNdsVar) => {
  var ProdBod = ReqNdsVar.body;
  var SqlQryVar = `INSERT INTO PrdTbl (TitCol, DetCol, CostCol) VALUES ("${ProdBod.TitVak}", "${ProdBod.DetVak}", "${ProdBod.CostVak}")`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar[0]);
  });
});

ServerVaj.put("/prod/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var ProdBod = ReqNdsVar.body;
  var SqlQryVar = `UPDATE PrdTbl SET TitCol="${ProdBod.TitVak}", DetCol="${ProdBod.DetVak}", CostCol="${ProdBod.CostVak}" WHERE UidCol = ${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});

ServerVaj.delete("/prod/:uid", (ReqNdsVar, ResNdsVar) => {
  var UidVar = ReqNdsVar.params.uid;
  var SqlQryVar = `DELETE FROM PrdTbl WHERE UidCol = ${UidVar}`;
  SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar;
    ResNdsVar.json(ResSdbVar);
  });
});
