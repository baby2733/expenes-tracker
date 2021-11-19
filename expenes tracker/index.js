document.addEventListener("DOMContentLoaded",() => {


    const table = document.getElementById("table");



    document.getElementById("submit").onclick = function(){
        
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const amount = document.getElementById("amount").value;

      
       const r = document.createElement('tr');
       const tbody =document.createElement('tbody');
       
       const data1 = document.createElement("td");
       const data2 = document.createElement("td");
       const data3 = document.createElement("td");
       let xButtoun = document.createElement("input");
       xButtoun.type='button';
       xButtoun.id='x-button'
       table.appendChild(tbody);
       tbody.appendChild(r);

       r.appendChild(data1);
       r.appendChild(data2); 
        r.appendChild(data3);

       data1.append(name);
       data2.append(date);
       data3.append(amount);
       data3.append(xButtoun);

       xButtoun.onclick = function(){
    
           r.removeChild(data1);
           r.removeChild(data2);
           r.removeChild(data3)
       }

       
    };





























})