
var content=document.getElementById('content');



content.innerHTML=renderHTML();

var select=document.getElementById('takeInput');


select.addEventListener("change",function(){
    var breed=this.value;
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(function(response) {

        document.getElementById('dog').innerHTML=`<img src="${response.data.message}"/>`

    });
    
    }); 


function renderHTML(){
   


    axios.get("https://dog.ceo/api/breeds/list").then(function(response){

        response.data.message.forEach(function(breed){
            select.innerHTML += `<option value="${breed}">${breed}</option>`
        });
        
        

        
        }); 
    

    return `
    
    <select id="takeInput">
    
    </select>

    <div id="dog">

        
    </div>`
   
} 

