
var products = [];
if( localStorage.getItem("mo3taz") == null)
    {
        products = [];
    }
else
    {
 products = JSON.parse(localStorage.getItem("mo3taz"));
        
    }

var categories =/* ["mobiles" , "smart" , "sports" , "general"]*/["Home","Mobile","work"];
var inputs = document.getElementsByTagName("input")

var temp = ""
for(var i=0; i <categories.length ; i++)
    {
        temp +="<option value='"+categories[i]+"'>"+categories[i]+"</option>";
    }
document.getElementById("productCategory").innerHTML = temp;



function addProduct()
{

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");

    
    var product = {name:productName.value ,price:productPrice.value , cat: productCategory.value };
  
    products.push(product)
    displayData();
    clearForm();
   
localStorage.setItem("mo3taz" ,  JSON.stringify(products));

}


function clearForm()
{
    for(var i=0; i<inputs.length ;i++)
        {
            inputs[i].value = '';
        }
}


function displayData()
{
    var tableBody = document.getElementById("tableBody");

    var cont = "";
    for(var i=0;i<products.length ; i++)
    {
        cont += "<tr><td>"+products[i].name+"</td><td>"+products[i].price+"</td><td>"+products[i].cat+"</td><td><button id='editBtn' onclick='editProduct("+i+")' class='btn btn-info'>edit</button><button id='deleteBtn' onclick='deleteProduct("+i+")' class='btn btn-danger ml-3'>delete</button</td></tr>";
    }


    tableBody.innerHTML  = cont;

}


displayData();


function toggleForm()
{
   var form = document.getElementById("form-container");
   var btnToggle = document.getElementById("btnToggle")    
    if( form.style.display == "none")
        {
            form.style.display = "block"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-up'></i>"    
        }
    else
        {
            form.style.display = "none"
btnToggle.innerHTML="<i class='fas fa-arrow-alt-circle-down'></i>"    
            
            
        }   
}

function deleteProduct(i){
   for(var j=0;j<products.length;j++){
       if(j==i){
        products.splice(j,1);
           break;
       }  
   }
    localStorage.setItem("mo3taz" ,  JSON.stringify(products));
    displayData();

    //delete row from html table
    /*if(i == products.length-1){
        document.getElementById("tableBody").deleteRow(-1);
   console.log(localStorage.mo3taz.indexOf(products[i]));
    }
          else{ document.getElementById("tableBody").deleteRow(i);
                 console.log(localStorage.mo3taz.index(products));
} */
    
    

}

function editProduct(i){
   // var editButton = document.getElementById("editBtn");
   // editButton.addEventListener("click",function(){
    



      var table=document.getElementById("tableBody");
    //    var rows=table.getElementsByTagName("tr");
      var cont="";
        for( var k=0 ;k<products.length;k++){
            if(i==k){
              cont+=  "<tr><td><input id='editName"+i+"' class='form-control' type='text' value='"+products[i].name+"'></td><td><input id='editPrice"+i+"' class='form-control' type='text'value='"+products[i].price+"'></td><td><select class='form-control' id='editCat"+i+"'>"+temp+"</select></td><td><button id='saveBtn' onclick='saveProduct("+i+")' class='btn btn-info'>save</button><button  onclick='deleteProduct("+i+")' class='btn btn-danger ml-3'>delete</button</td></tr>";
            }
            else{
                 cont += "<tr><td>"+products[k].name+"</td><td>"+products[k].price+"</td><td>"+products[k].cat+"</td><td><button id='editBtn' onclick='editProduct("+i+")' class='btn btn-info'>edit</button><button id='deleteBtn' onclick='deleteProduct("+i+")' class='btn btn-danger ml-3'>delete</button</td></tr>";
            }
        }

        table.innerHTML=cont;



   // })
}
function saveProduct(i){
    var editName = document.getElementById('editName'+i);
    var editPrice = document.getElementById('editPrice'+i);
    var editCat = document.getElementById('editCat'+i);
    var updatedProduct = {name:editName.value ,price:editPrice.value , cat: editCat.value };
  
    products.splice(i,1,updatedProduct);
    displayData();
   
localStorage.setItem("mo3taz" ,  JSON.stringify(products));

}