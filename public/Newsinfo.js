function infownews ()  {

    
    const stock =   document.getElementById('ticker').value;
    const datefrom = document.getElementById('Date_from').value;


    // Information of the Company based on Ticker
    
    co ='https://api.polygon.io/v1/meta/symbols/'+[stock]+'/company?apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc'
    console.log(co);

     $.getJSON(co, function(info) {
      console.log("This is an example of a dynamic JSON file being served by a web server.")
      console.log(info);
      console.log(info.name);
      console.log(info.description);

    //Insert stock ticker by in the form eg getElementby ID

   
    document.getElementById('symbol').innerHTML = info.name;
    document.getElementById('Desc').innerHTML = info.description;   
    document.getElementById('url').innerHTML = info.url;
    document.getElementById('industry').innerHTML ='Industry :      ' +info.industry ;
    document.getElementById('Sector').innerHTML = 'Sector :        ' + info.sector  ; 
  });
    

    // News of the company

     const length = 100;
  
    Tnews = 'https://api.polygon.io/v2/reference/news?limit='+[length]+'&order=descending&sort=published_utc&ticker='+[stock]+'&published_utc.gte='+[datefrom]+'&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc'
      
    $.getJSON(Tnews, function(infonews) {
    console.log("This is an example of a dynamic JSON file being served by a web server.")
    console.log(infonews);
   
    news = infonews.results;
    console.log(news)
  
  
   //Loop through the data using foreach and put all the results into a table
   var text =`<table class="cut-off">
          <thead>
            <tr>
              <th>Date</th>
              <th>News Headlines</th>
              <th>Url</th>
              <th>Tickers Involved</th>
            </tr>
        </thead>
  
    <tbody>`;
    news.forEach((item) => {
  
      text = text + `<tr><td>${item.published_utc}</td><td word-wrap:break-word>${item.title}</td><td style = word-break: break-all>${item.article_url}</td><td>${item.tickers}</td></tr>`
     
    });
    text += `</tbody></table><br>`
    //console.log(text);
  
    $(".mypanel").html(text);
  
    });

}

// Information of the Company based on Ticker

// function info ()  {
    
//     const stock =   document.getElementById('ticker').value;
//     const datefrom = document.getElementById('Date_from').value;
    
//     co ='https://api.polygon.io/v1/meta/symbols/'+[stock]+'/company?apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc'
//     console.log(co);

//      $.getJSON(co, function(info) {
//       console.log("This is an example of a dynamic JSON file being served by a web server.")
//       console.log(info);
//       console.log(info.name);
//       console.log(info.description);

//     //Insert stock ticker by in the form og getElementby ID

   
//     document.getElementById('symbol').innerHTML = info.name;
//     document.getElementById('Desc').innerHTML = info.description; 
//     document.getElementById('Sector').innerHTML = info.sector  ;  
//     document.getElementById('industry').innerHTML = info.industry ;   
//     document.getElementById('url').innerHTML = info.url;

//   });
    
// }


// News of the company

// function infonews() { 
  
//     const stock =   document.getElementById('ticker').value;
//     const datefrom = document.getElementById('Date_from').value;
  
//     const length = 100;
  
//     Tnews = 'https://api.polygon.io/v2/reference/news?limit='+[length]+'&order=descending&sort=published_utc&ticker='+[stock]+'&published_utc.gte='+[datefrom]+'&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc'
      
//     $.getJSON(Tnews, function(infonews) {
//     console.log("This is an example of a dynamic JSON file being served by a web server.")
//     console.log(infonews);
   
//     news = infonews.results;
//     console.log(news)
  
  
//    //Loop through the data using foreach and put all the results into a table
//    var text =`<table class="cut-off">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>News Headlines</th>
//               <th>Url</th>
//               <th>Tickers Involved</th>
//             </tr>
//         </thead>
  
//     <tbody>`;
//     news.forEach((item) => {
  
//       text = text + `<tr><td>${item.published_utc}</td><td word-wrap:break-word>${item.title}</td><td style = word-break: break-all>${item.article_url}</td><td>${item.tickers}</td></td></tr>`
     
//     });
//     text += `</tbody></table><br>`
//     //console.log(text);
  
//     $(".mypanel").html(text);
  
//     });

// }


function refresh () {
    location.reload();
   }
