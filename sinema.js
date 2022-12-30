var selectedseats=[];

const contain=document.getElementById("container");
var seats=document.querySelectorAll(".box");

readfromdb();

contain.addEventListener("click", function(e){
    if (!e.target.classList.contains("reserved"))
        {
            if(e.target.classList.contains('box'))
            {
                e.target.classList.toggle("clicked");
                writetodb();
            };
        }
   
});

function writetodb()
{
    selectedseats=[];
    seats.forEach(function(item,index){
        
        if(item.classList.contains("clicked")||item.classList.contains("reserved"))
        {
            selectedseats.push(index);
            //console.log("item->"+index);
        }
        
    });
    localStorage.setItem("selectedItems",JSON.stringify(selectedseats));
}
function readfromdb()
{
    //console.log("buraya girdik");
    
    if(localStorage.getItem("selectedItems")!=undefined &&!localStorage.getItem("selectedItems")=="")
    {
        
        //console.log("buraya girdik");
       

        const selectedItems=JSON.parse(localStorage.getItem("selectedItems"));
        selectedItems.forEach(function(item)
        {
           seats[item].classList.add("reserved");    
        });
        
    }
}
function temizle()
{
    localStorage.setItem("selectedItems",JSON.stringify([]));
    selectedseats=[];
    
    seats.forEach(function(item)
    {
        if (item.classList.contains("clicked")) item.classList.remove("clicked");
        if (item.classList.contains("reserved")) item.classList.remove("reserved");
    });

    //readfromdb();
}
