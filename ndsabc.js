// console.log("I Am Node JS App")

var ModuleVar = require("./name-module")
// console.log(ModuleVar.NamVak + "\n", ModuleVar.MobVak + "\n", ModuleVar.EmailVak + "\n")
// console.log(ModuleVar.CubeVaf(2))


// console.log(ModuleVar.NamVak)
// ModuleVar.NamVaf()

// var ChethanVar = ModuleVar.UserVak
// ChethanVar.EmpID = "12432"
// ChethanVar.Desg = "Trainee"

// var AkashVar = ModuleVar.UserVak
// AkashVar.EmpID = "11324"
// AkashVar.Desg = "Employee"


// var ChethanVar = ModuleVar.UserVaf()
// ChethanVar.EmpID = "12432"
// ChethanVar.Desg = "Trainee"

// var AkashVar = ModuleVar.UserVaf()
// AkashVar.EmpID = "11324"
// AkashVar.Desg = "Employee"

// var CubeVar = ModuleVar.CubeVaf(2)

// console.log(ChethanVar)
// console.log(AkashVar)
// console.log(CubeVar)

var InfoVar = require("./info.json")
// console.log(InfoVar)

ModuleVar.MultiTaskVaf(1)
ModuleVar.MultiTaskVaf(2)
ModuleVar.MultiTaskVaf(3)
ModuleVar.MultiTaskVaf(4)
ModuleVar.MultiTaskVaf(5)





// var NamVar = "Chethan"
// var MobVar = "1826729489"

// module.exports.NamVak = NamVar
// module.exports.MobVak = MobVar

// module.exports = {
//     NamVak: NamVar,
//     MobVak: MobVar,
//     EmailVak: "chethanshenoy21@gmail.com",
//     AddVak: "Mangalore",
//     PinVak: "575006"
// }



// function CubeFnc(IptVar)
// {
//     return IptVar ** 3
// }

// module.exports.CubeVaf = CubeFnc


// module.exports = {
//     NamVak: "Chethan",
//     NamVaf: () =>
//     {
//         console.log("This is an exportable function")
//     },
//     UserVak: {
//         EmpID: "",
//         Desg: ""
//     },
//     UserVaf: function ()
//     {
//         return {
//             EmpID: "",
//             Desg: ""
//         }
//     },
//     CubeVaf: (val) =>
//     {
//         return val ** 3
//     }
// }


// module.exports.MultiTaskVaf = function (ReqVar)
// {
//     console.log("Customer Request Number", ReqVar)
//     setTimeout(() =>
//     {
//         console.log("Order Delivered Request Number", ReqVar)
//     }, 500);
// }