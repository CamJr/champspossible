function homeController(partnerService, newsService, homeService, offreService, $timeout) {

  this.partnerService = partnerService;
  this.newsService = newsService;
  this.homeService = homeService;
  this.offreService = offreService;

  this.greaterThan = function(prop, val) {
    return function(item) {
      return item[prop] > val;
    };
  };

  this.load = () => {
    this.partnerService.getAll().then((res) => {
      this.partners = res.data;
    });

    this.homeService.getAll().then((res) => {
      this.homes = res.data;
      this.slickCurrentIndex = 0;
      this.slickConfig = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
      };
      $timeout(() => {
        function autoplay() {
          $('.carousel').carousel('next');
          setTimeout(autoplay, 4500);
        }
        $('.carousel').carousel({
          dist: 0,
          shift: 0,
          padding: 120,
        });
        autoplay();
      }, 0);
    });

    this.newsService.getAll().then((res) => {
      this.newss = res.data;
    });
  };

  this.load();

  $(document).ready(function() {

    // Medium
    $(function() {
      var $content = $('#jsonContent');
      var data = {
        rss_url: 'https://medium.com/feed/champspossible'
      };
      $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
        if (response.status == 'ok') {
          var output = '';
          $.each(response.items, function(k, item) {
            var visibleSm;
            if (k < 3) {
              visibleSm = '';
            } else {
              visibleSm = ' visible-sm';
            }
            output += '<div class="col s12 col m12 col l4' + visibleSm + '">';
            output += '<div class="blog-post center"><header>';
            var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
            var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
            var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
            var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
            var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
            output += '<a href="' + item.link + '"  class="blog-element"><img class="responsive-img zoom" src="' + src + '" width="600" height="200"></a></header>';
            output += '<div class="blog-content center"><a style="font-size: 1.5rem;" href="' + item.link + '">' + item.title + '</a>';
            var yourString = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
            var maxLength = 120 // maximum number of characters to extract
            //trim the string to the maximum length
            var trimmedString = yourString.substr(0, maxLength);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            // output += '<p>' + trimmedString + '</p>';
            output += '</div></div></div>';
            return k < 3;
          });
          $content.html(output);
        }
      });
    });

    // YOUTUBE

    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/channels',
      type: 'GET',
      dataType: 'json',
      data: {
        'part': 'contentDetails',
        'id': 'UC4xKeJLSjDLDAtW1dNfwwVw',
        'key': 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0'
      },
      success: function(data) {
        var uploads = data.items[0].contentDetails.relatedPlaylists.uploads;
        getVideos(uploads);
      }
    });

    function getVideos(uploads) {
      var limit = 3;
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        type: 'GET',
        dataType: 'json',
        data: {
          'part': 'snippet',
          'playlistId': uploads,
          'chart': 'mostPopular',
          'maxResults': limit,
          'key': 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0'
        },
        success: function(data) {
          for (var i = 0; i < limit; i++) {
            var thumb = $("<img>").attr("src", data.items[i].snippet.thumbnails.medium.url);
            var video_id = data.items[i].snippet.resourceId.videoId;
            var video_embed = '<div class="video-container"><iframe width="600" height="350" src="//www.youtube.com/embed/' + video_id + '?html5=1" frameborder="0" allowfullscreen></iframe></div>';
            var video_url = 'https://www.youtube.com/watch?v=' + video_id;
            var title = $("<a style='font-size: 1.5rem;' href=" + video_url + ">").append(data.items[i].snippet.title);
            var holder = $("<div class='col s12 col m12 col l4 '>").append(video_embed, title);
            $("#youtube").append(holder);
          }
        }
      });
    }

    $('.parallax').parallax();

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: true,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left'
    });

    $(".button-collapse").sideNav();
  });
}
