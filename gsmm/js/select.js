/*
Select options - dropdown menu
*/
 function OnSelectionChange (select) 
 
{
            var selectedOption = select.options[select.selectedIndex];
            alert ("The selected option is " + selectedOption.value);
 }