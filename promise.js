var a = new Promise((x, y) => {
    if (1) {
        x("product ordered")
    } else {
        y("reject")
    }
})
var b = new Promise((x, y) => {
    if (1) {
        x("product shipped")
    } else {
        y("reject")
    }
})
var c = new Promise((x, y) => {
    if (1) {
        x("product dispatched")
    } else {
        y("reject")
    }
})
var d = new Promise((x, y) => {
    if (1) {
        x("delivered succesfully")
    } else {
        y("reject")
    }
})

a.then((res)=>{
    console.log(res)
    return b;
}).then((res)=>{
    console.log(res)
    return c;
}).then((res)=>{
    console.log(res)
    return d;
}).then((res)=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})