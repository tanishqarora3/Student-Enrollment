//creating a empty list
var list = [];
var n = 1;
//function to add row whenever we click on submit
function AddRow(){
    var index = 0;
    var table = document.getElementById('show');
    var row = table.insertRow(n);
    //Adding items to the list
    list[index++] = document.getElementById("Name").value;

    if(document.getElementById('gridRadios1').checked) {
        list[index++]
             = document.getElementById("gridRadios1").value
     }
     else{
        list[index++]
             = "female" 
     }

    list[index++] = document.getElementById("inputEmail3").value;


    list[index++] ='<a target= "_blank" href="' + document.getElementById("Website").value + '">' + document.getElementById("Website").value + '</a>';


    list[index] = " "
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   
    for (var checkbox of checkboxes) {
      list[index] +=  checkbox.value + ' ';
   
    }

    var img = '<img src="'+ document.getElementById('ImageLink').value +'" alt="Image" width="100" height="100"/>'
   

    var addingValue = "";
    for (i = 0; i< list.length; i++) {
      addingValue +=  list[i] + "</br>";          
            }
                         

    //Adding two cells one contains parsed information and second contains image 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = addingValue;
    cell2.innerHTML = img;

}