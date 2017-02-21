$("#button").on("click", function(){
  randomQuote();
});

// automatically calls this function when the page first loads 
$(function(){
  randomQuote();
});

function randomQuote(){
  var html = "";
  
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(data){
        html += "<div class='quote'>";
        html += "<p> <q>"+ data.quoteText + "</q> </p>";
        html += "<p class='author'>" + '- ' + data.quoteAuthor + "</p>";
        html += "</div>";
        $(".message").html(html);
        
        $("#tweet").attr('href', "https://twitter.com/intent/tweet?hashtags=quoteFCC&text=" + data.quoteText + ' - ' + data.quoteAuthor + ' -');
      }
    });
}
