/* References
https://github.com/karlkws/nusmoney-b13g1

Source : Polygon.io

*/

function getInputValue() {
  // Selecting the input element and get its value 
  const quote =   document.getElementById('quote').value.toUpperCase();
  const base =   document.getElementById('base').value.toUpperCase();
  const datefrom = document.getElementById('transaction').value;
  const dateto =  document.getElementById('transaction').value;
  const value =  document.getElementById('Value').value;
  
  console.log(datefrom,dateto)
  let stock = (base+quote);
  console.log(stock);

  Price ='https://api.polygon.io/v2/aggs/ticker/'+'C:'+[stock]+'/range/1/day/'+[datefrom]+'/'+[dateto]+'?adjusted=true&sort=asc&limit=50000&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc' //Aggregates (Bars) API

  Crypto = 'https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/'+[datefrom]+'?adjusted=true&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc'
  
  console.log(Price);
  console.log(value);
  console.log(Crypto);

  $.getJSON(Price, function(data) {
    console.log(data);
    console.log(data.results);
  
    //Insert FX ticker by in the form of getElementby ID
    //document.getElementById('symbol').innerHTML = data.ticker;

    //Declare Base and Quote Currency
    let Quote = quote;
    let Base = base;
   
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
    var text =`<br><table>
            <thead>
              <tr>
                <th>Date </th>
                <th>Exchange Rate<br>(${Quote}:${Base})</th>
                <th>From </th>
                <th>To </th>
              </tr>
          </thead>

      <tbody>`;
      pricedata.forEach((price) => {
        text = text + 
        `<tr> 
          <td>${new Date(price.t).toLocaleString("en-SG", options)}</td> 
          <td>1 : ${price.c.toFixed(5)} </td> 
          <td>${Quote  +" "+ (value)}</td> 
          <td>${Base +" "+ (value/price.c).toFixed(2)} </td> 
        </tr>`
      });
      text += `</tbody></table><br>`
    
      $("#mypanel").html(text);

    //Compute the conversion value
    let Conversion_value = value/pricedata[0].c;
    console.log(Conversion_value);

    // Set up JS Object
    // Check Base and Quote currency string and add negative for base currency   
    var sgd = 0;
    var usd = 0;
    var eur = 0;
    var gbp = 0;
  
    if (Quote === 'SGD') {
        sgd = value * -1
        } else if (Quote === 'USD') {
          usd = value * -1
        } else if  (Quote === 'EUR') {
          eur = value * -1
        } else if  (Quote === 'GBP') {
          gbp = value * -1
        }; 

    if (Base === 'SGD') {
      sgd = Conversion_value 
      } else if (Base === 'USD'){
        usd = Conversion_value 
      } else if  (Base === 'EUR') {
        eur = Conversion_value 
      } else if  (Base === 'GBP') {
        gbp = Conversion_value 
      }; 

   
                
          var postData = {
            tran_type: 'Conversion',  
            tran_date: datefrom,
            amt_sgd: sgd,
            amt_usd: usd,
            amt_eur: eur,
            amt_gbp: gbp
          };

          postDataJSON = JSON.stringify(postData); // convert JS object to JSON object
          console.log(postDataJSON); // JSON Object to be used for back-end   
        });
    }

 
function refresh() {
  location.reload();
}








     

  