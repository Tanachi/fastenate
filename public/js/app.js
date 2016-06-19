var dataReddit;
$.ajax({
  method: 'GET',
  url: 'http://www.reddit.com/r/pics.json',
  dataType: 'json'
})
.done(function(data) {
  dataReddit = data.data.children;
  for(var i = 0; i < dataReddit.length; i++){
    var threadData = dataReddit[i].data;
    var time = threadData.created_utc;
    var myDate = new Date( time*1000);
    var $div =  $('<div>', {class:'article'});
    var $imageArea = $('<div>', {class:'imageArea'});
    $imageArea.css( "background-image",threadData.url);
    var $titleArea = $('<h1>', {class:'titleArea'}).html(threadData.title);
    var $infoArea = $('<div>', {class:'infoArea'}).html('by ' + threadData.author + '•' + 'created' + myDate + 'ago' + '•' +
      threadData.score + ' views');
    $($div).append($imageArea);
    $($div).append($titleArea);
    $($div).append($infoArea);
    $('body').append($div);
  }
});