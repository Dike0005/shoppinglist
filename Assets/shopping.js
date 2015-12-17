
/***** Basic JS that uses local storage to save people's lists in the chance they close the app and reopen it *****/


(function(){
  
  var form = document.querySelector('form'),
      list = document.querySelector('#grocerylist'),
      item = document.querySelector('#shoppingitem');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('bought')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('bought');
    }
    store();
  },false)
  
 /***** This will check my local storage, if there's nothing in there, there will be a few example ones inside, just to clarify how it works, if the local storage has been used by the person, then it will bring back the list items the person has previously *****/
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
     
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Time to start this list!</li>'+'<li>Just click once to mark it complete</li>' + '<li>click (erase) after clicking again on the completed item to remove it</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();
