let todo =[];
let req = prompt("Please Enter to your request");

while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }

    if(req=="list"){
        console.log("...........................");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("..............................");
    }else if (req== "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }else if (req == "delet"){
        let task=prompt("Please enter the task index0");
        todo.splice(index, 1);
        console.log("task deleted");
    }
    req = prompt("Please Enter your choice");
}