
const fs = require("fs")
// Add data //
const addPerson=(fname,lname,age,city,id) =>{
   const allData= loadData()
   const duplicateData=  allData.filter((obj) => {
       return obj.id === id
   })
 
  
 if( duplicateData.length === 0 && id <= "7")
 {
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
     saveAllData(allData)
 }
 else{
    console.log("error  duplicateData id")
 }
 console.log( duplicateData)

}
// load data logic//
 const loadData = ()=>{
    try{
      const dataJson= fs.readFileSync("data1.json").toString()
      return JSON.parse(dataJson)
    }
    catch{
        return []
    }
 }
//////////////////////
// save all data logic//
  const saveAllData= (allData) => {
     const saveAllDataJson= JSON.stringify(allData)
     fs.writeFileSync("data1.json", saveAllDataJson)
  }
///////////////////////////////////////
// to delete data from id=4 & id=6 //
  const deleteData = (id) =>{
    const allData=loadData()
    const dataToKeep= allData.filter((obj) => {
        return obj.id !== (id=="4" && id=="6")
    }
    )
    saveAllData(dataToKeep)
  }
///////////////
// to read all data//
const readData= () =>{
 const allData=loadData()
const itemNeeded=allData.find((obj) =>{
    return obj.id == "5"

}
)
  console.log(itemNeeded)
}
/////////
//to list data for 5th person only//
const listData = () => {
    const allData = loadData()
    
    allData.forEach ((obj) => {
      console.log(obj.fname , obj.lname ,obj.city)
  })
  
} 
        
  





module.exports={
    addPerson,
    deleteData, 
    readData,
    listData
}