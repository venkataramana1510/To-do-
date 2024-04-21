let timeElDiv = document.createElement("div");
timeElDiv.id="clock";
let timeEl =document.createElement("h3");
timeEl.id="date-time";
timeElDiv.appendChild(timeEl);
document.body.appendChild(timeElDiv);

let WallpaperChangebtnContainer = document.createElement("div");
let addUrl = document.createElement("button");
WallpaperChangebtnContainer.style.display="flex";
WallpaperChangebtnContainer.style.justifyContent="right";
addUrl.textContent="Change Wallpaper";
addUrl.classList.add("button-85");

addUrl.onclick =function(){
    searchBarEl.style.display="block";
    searchBarEl.type="search";
    addButtonEl.style.display="none";
    searchBarEl.placeholder="   Paste your url here.. ";
}

document.addEventListener("DOMContentLoaded", function() {
    
    
  
    searchBarEl.addEventListener("keydown", function(event) {
      // Check if the pressed key is Enter (key code 13)
      if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Get the value from the input field
        var inputValue = String(searchBarEl.value);
        
        // Display the value in the output div
        document.body.style.backgroundImage = "url(" + inputValue + ")";
        searchBarEl.style.display="none";
        addButtonEl.style.display="block";
        // Clear the input field
        searchBarEl.value = "";
      }
    });
  });

// addUrl.onclick= searchBarEl.style.display="block";

//let buttonsContainer = document.createElement("div");
document.body.appendChild(WallpaperChangebtnContainer);
WallpaperChangebtnContainer.appendChild(addUrl);

let toDoListEl = document.createElement("h1");
toDoListEl.textContent="TO-DO LIST";
document.body.appendChild(toDoListEl);
document.body.style.fontFamily="Roboto";
toDoListEl.classList.add("todo-label");

let searchBarEl =document.createElement("input");
document.body.appendChild(searchBarEl);
searchBarEl.type="text";
searchBarEl.classList.add("search-bar");
searchBarEl.placeholder="   + Add here..";
searchBarEl.style.display="none";




window.addEventListener("load", () => {
    clock();

    function clock() {
        const today = new Date();
        const timeString = today.toLocaleTimeString(); // Get formatted time
        document.getElementById("date-time").textContent = timeString; // Update the element
        setTimeout(clock, 1000); // Update every second
    }
});





let buttonsContainer = document.createElement("div");
document.body.appendChild(buttonsContainer);


let addButtonEl = document.createElement("button");
addButtonEl.textContent= "New Task";
addButtonEl.classList.add("button-64");
document.body.appendChild(addButtonEl);



let itemAddBtn = document.createElement("button");
    document.body.appendChild(itemAddBtn);
    itemAddBtn.textContent="Add Task";
    itemAddBtn.style.display="none";
    itemAddBtn.classList.add("button-32");
addButtonEl.onclick= function(){
    searchBarEl.style.display="block";
    itemAddBtn.style.display="block";
    addButtonEl.style.display="none";
    closeBtn.style.display="block";
}
buttonsContainer.appendChild(itemAddBtn);
buttonsContainer.appendChild(addButtonEl);
buttonsContainer.classList.add("buttonsContainer");


let itemContainer =document.createElement("div");
itemContainer.id="itemContainer";
document.body.appendChild(itemContainer);

let count =0;
itemAddBtn.onclick= function(){
    let textInput = searchBarEl.value;
    if (textInput===""){
        alert("Please add a task");
    }else{
        console.log(textInput);
        let eachItemContainer=document.createElement("div");
        let eachItemLabel = document.createElement("label");
        let eachItemInput = document.createElement("input");
        
        eachItemInput.type="checkbox";
        eachItemId = count + 1;
        eachItemInput.name = "checkbox"+eachItemId;
        eachItemInput.id=eachItemId;
        eachItemLabel.htmlFor=eachItemId;
        eachItemInput.onchange = function(e){
            // console.log(e.target.name);
            // console.log(e.target.checked);
            //you can use it anywhere
            if (e.target.checked === true){
                eachItemLabel.style.backgroundColor="green";
                eachItemLabel.style.textDecoration="line-through";
                window.alert("Task Completed");
                

            }
            else{
                eachItemLabel.style.backgroundColor="#3498db";
                eachItemLabel.style.textDecoration="none";
            }
        };
        count = eachItemId;
        console.log(eachItemId);
        eachItemLabel.classList.add("eachItem");
        eachItemInput.classList.add("eachItem");
        eachItemContainer.classList.add("eachItemContainer");
        eachItemLabel.textContent=textInput.charAt(0).toUpperCase() +textInput.slice(1).toLowerCase(); //console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
        eachItemContainer.appendChild(eachItemInput);
        eachItemContainer.appendChild(eachItemLabel);
        itemContainer.appendChild(eachItemContainer);
        window.alert("Task Added Successfully");
    }
    

   

}

let closeBtn = document.createElement("button");
closeBtn.style.display="none";


// addUrl.style.display="block";
// addUrl.textContent="Add Url";

closeBtn.textContent="close";
closeBtn.onclick=function(){
    searchBarEl.style.display="none";
    itemAddBtn.style.display="none";
    addButtonEl.style.display="block";
    closeBtn.style.display="none";
}
buttonsContainer.appendChild(closeBtn);
closeBtn.classList.add("button-31");


//background wallpaper 
// let addUrl = document.createElement("button");
// addUrl.style.display="block";
// addUrl.textContent="Change Wallpaper";
// document.body.appendChild(addUrl);
// let backgroundWallpaper = 
//  document.body.style.backgroundImage=URL("https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)";
//document.body.style.backgroundImage = "url(https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)";


//addUrl.onclick= searchBarEl.style.display="block";
