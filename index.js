
const yargs=require("yargs")
const data1=require("./data1")
//Add person //
 yargs.command({
    command:"add",
    describe:"to add person from 1 to 7",
    builder :{
        fname:{
            describe: " to add first name",
            demandOption: true,
            type :"string"
        },
        lname:{
            describe: " to add last name",
            demandOption: true,
            type :"string"
        },
        age:{
            describe: " to add age ",
            demandOption: true,
            type :"string"
        },
        city:{
            describe: "to add city",
            demandOption: true,
            type :"string"
        } 
    },
    handler: (x)=>{
        data1.addPerson(x.fname,x.lname,x.age,x.city,x.id)
    }
 })

 //////////////////////////////
 // to delete data (id 4 && id 6)
  yargs.command({
     command:"delete",
     describe:" to delete data id 4 & id 6",
     handler: (x)=> {
        data1.deleteData(x.id)
     }
})
////////////////////////////
// to read all data//
yargs.command({
    command:"read",
    describe:" to read all data",
    builder:{
        id:{
            describe:"this is id to  read all data",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=> {
        data1.readData(x.id)
    }
})

///////////////////////////////
// to list  only 5th person//
yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data1.listData()
    }
 })


yargs.parse()




