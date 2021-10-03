/* References
https://github.com/karlkws/nusmoney-b13g1
Source : Polygon.io
*/

function getCryptoValue() {
  // Selecting the input element and get its value 
  const stock =   document.getElementById('Crypto').value.toUpperCase(); 
  const datefrm = document.getElementById('Cryptotransactionfrom').value;
  const dateto = document.getElementById('Cryptotransactionto').value;
  console.log(datefrm,dateto);
  console.log(stock);

  Price ='https://api.polygon.io/v2/aggs/ticker/'+'X:'+[stock]+'/range/1/day/'+[datefrm]+'/'+[dateto]+'?adjusted=true&sort=asc&limit=50000&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc' //Aggregates (Bars) API
 
  
  
  console.log(Price);
  
 

  $.getJSON(Price, function(data) {
    
    console.log(data);
    console.log(data.results);
  

   
    //Create a table to store and display the given stock prices
    let pricedata = data.results;

    //for Date function
    var options = {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };

    //Loop through the data using foreach and put all the results into a table
    var text = document.getElementById('Cryptosymbol').innerHTML = data.ticker +`<br><table>
            <thead>
              <tr>
                <th>Date </th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Vol</th>
              </tr>
          </thead>
      <tbody>`;
      pricedata.forEach((price) => {
        text = text + 
        `<tr> 
          <td>${new Date(price.t).toLocaleString("en-SG", options)}</td> 
          <td>${price.o.toFixed(2)} </td> 
          <td>${price.h.toFixed(2)} </td>
          <td>${price.l.toFixed(2)} </td> 
          <td>${price.c.toFixed(2)} </td> 
          <td>${price.v.toFixed(0)} </td>
        </tr>`


        
      });
      text += `</tbody></table><br>`
    
      $(".right").html(text);
   

   
  
       });
     }
    
 
function refresh() {
  location.reload();
}