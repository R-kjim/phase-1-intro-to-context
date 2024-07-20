// Your code here
function createEmployeeRecord(array){
    let myObj={
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
}
return myObj
}

function createEmployeeRecords(arrays){
    let newArray=[]
    for(let i=0;i<arrays.length;i++){
        newArray.push(createEmployeeRecord(arrays[i]))
    }
    return newArray
}


function createTimeInEvent(obj,date){
    let arrayObj={
        type:'TimeIn',
        hour:parseInt(date.slice(11,15)),
        date:date.slice(0,10)
    }
   obj.timeInEvents.push(arrayObj)
   return obj
}

function createTimeOutEvent(obj1,date1){
    let arrayObj1={
        type:'TimeOut',
        hour:parseInt(date1.slice(11,15)),
        date:date1.slice(0,10)
    }
   obj1.timeOutEvents.push(arrayObj1)
   return obj1
}

function hoursWorkedOnDate(obj,date){
    let ans=0
    for(let i=0;i<obj.timeInEvents.length;i++){
        if(obj.timeInEvents[i].date===date && obj.timeOutEvents[i].date===date){
            ans=(obj.timeOutEvents[i].hour-obj.timeInEvents[i].hour)/100
        }
    }
    return ans
}

function wagesEarnedOnDate(obj,date){
    let pay=hoursWorkedOnDate(obj,date)*parseInt(obj.payPerHour)
    return pay
}

function allWagesFor(obj){
    let sumWages=0
    for(let i=0;i<obj.timeInEvents.length;i++){
        let wage=wagesEarnedOnDate(obj,obj.timeInEvents[i].date)
        sumWages+=wage
    }
    return sumWages
}

function calculatePayroll(array){
    let sumTotals=0
    let totalObj=createEmployeeRecords(array)
    for(let i=0;i<totalObj.length;i++){
        let sum=allWagesFor(array[i])
        sumTotals+=sum
    }
    return sumTotals
}