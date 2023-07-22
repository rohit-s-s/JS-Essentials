var input = prompt("Enter array")
var arr = input.split(",").map(Number);
result = 0
for(var i = 0; i < arr.length; i ++){
    if(result < arr[i]){
        result = arr[i]
    }
}
console.log("Maximum element:",result);




