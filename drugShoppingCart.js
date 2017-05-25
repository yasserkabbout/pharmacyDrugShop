var prices = ['', 5, 10, 15, 20];
var amntOfDrg = ['',"500mg", "250mg", "1mg", "0.5mg"];
var i=0;         //Global counter - just to keep track of the number of available rows!
var cell2;
var cell4;
var cell5;

function selectChange(selection) {

   var DDD;	  
   var age=document.getElementById("getAge");
   var weight=document.getElementById("getWeight");	
   var Age=(parseInt(age.value));
   var Weight=(parseInt(weight.value));
   var dddCtrl=document.getElementById('dailyDose');  
	  
  cell2.innerHTML = prices[selection.selectedIndex];
  
  if(selection.selectedIndex == 2 || selection.selectedIndex==3)
  cell4.innerHTML= "<input type='checkbox' name='Allergic' value='yes' checked onclick='return false'>";
  else
  cell4.innerHTML=" <input type='checkbox' name='Allergic' value='no' unchecked onclick='return false'>";
  
  cell5.innerHTML= amntOfDrg[selection.selectedIndex];


  if(selection.selectedIndex ==1){
	  DDD=3;
	  if( (Age>0) && (Age<18) && (Weight>0) && (Weight<20) )
	  dddCtrl.value= DDD*0.3+' g';
	  if( (Age>7) && (Age<18) && (Weight>20) && (Weight<45) )
	  dddCtrl.value= DDD*0.6+ ' g';
	  if ( (Age>18) && (Weight>45) )
	  dddCtrl.value= DDD + ' g';
}
  
  if (selection.selectedIndex ==2){
	  DDD=1.2;
	  if( (Age>0) && (Age<18) && (Weight>0) && (Weight<20) )
	  dddCtrl.value= DDD*0.3+' g';
	  if( (Age>7) && (Age<18) && (Weight>20) && (Weight<45) )
	  dddCtrl.value= DDD*0.6+ ' g';
	  if ( (Age>18) && (Weight>45) )
	  dddCtrl.value= DDD + ' g';
}

if(selection.selectedIndex==3){
	  DDD=5;
	  if( (Age>0) && (Age<18) && (Weight>0) && (Weight<20) )
	  dddCtrl.value= DDD*0.3+' mg';
	  if( (Age>7) && (Age<18) && (Weight>20) && (Weight<45) )
	  dddCtrl.value= DDD*0.6+ ' mg';
	  if ( (Age>18) && (Weight>45) )
	  dddCtrl.value= DDD + ' mg';
}

if(selection.selectedIndex==4){
	DDD=1.2;
	  if( (Age>0) && (Age<18) && (Weight>0) && (Weight<20) )
	  dddCtrl.value= DDD*0.3+' mg';
	  if( (Age>7) && (Age<18) && (Weight>20) && (Weight<45) )
	  dddCtrl.value= DDD*0.6+ ' mg';
	  if ( (Age>18) && (Weight>45) )
	  dddCtrl.value= DDD + ' mg';
}
	

  
}






function addTable(){
    i++;

var table=document.getElementById("shopTable");
{
 

    var row = table.insertRow(1);
    var cell1= row.insertCell(0);
    	cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
        cell4= row.insertCell(3);
    	cell5= row.insertCell(4);
    var cell6= row.insertCell(5);

        cell1.innerHTML= "<select id=\"selectMenu\" " +
           "onchange=\"selectChange(this)\">" +
           "<option value=''>Select a drug:</option>" +
           "<option value='1'>Paracetamol</option>" +
           "<option value='2'>Ibuprofen</option>" +
           "<option value='3'>Saxagliptin</option>"+
           "<option value='4'>Liraglutide</option>"+
           "</select>";
		   
		   cell3.innerHTML= "<input type='text' id='amount' value='Enter the amount here' />";
		   
		   cell6.innerHTML= "<input type='text' id='dailyDose' name='Daily Dose' value='Daily Dose' readonly='readonly' />";
}

}

	
function calculate(){
	
var table=document.getElementById('shopTable');

var count = table.getElementsByTagName('tr').length;
if (count > 0)
  {
    var total = 0;
    for(var i = 1; i < count; i++)
      {
        total += table.rows[i].cells[1].innerHTML * table.rows[i].cells[2].children[0].value;
      }
  }

var TOTAL=document.getElementById("Total");
TOTAL.value=total+'$';
}
