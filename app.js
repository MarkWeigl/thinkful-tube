var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyCJKuNBnpbzTKcVaiIV2zYIAxtAm8YWMP0',
    q:  searchTerm
  };
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayYouTubeSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<p><a href="https://youtube.com/embed/' + item.id.videoId +'">'+ item.snippet.title + '</a></p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(function(){watchSubmit();});
