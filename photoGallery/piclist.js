var apiKey = "4459a38b42ed50d49a0126050230d03a";
var erinID = "126524829@N04";
var whichSets = [2,6,4,1];
//var erinID = "65878896@N04";
//var whichSets = [0,3,2,4];
var loaded1 = false;
var loaded2 = false;
var loaded3 = false;
var loaded4 = false;
var notLoaded = true;
var start = "https://farm";
var theMid = ".staticflickr.com/";
var theEnd = "\/";
var base = " https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&photoset_id=";
var End = "&user_id="+erinID+"&format=json&nojsoncallback=1";
var thumbEnd = "extras=url_t";
var midEnd = "extras=url_m";
var piclist = [
    [],[],[],[]
];

var checkLoaded = function() {
    if (loaded1&&loaded2&&loaded3&&loaded4) {
        return true;
    }
    return false;
}

console.log("finding albums");
var photoSet = $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key="+apiKey+"&user_id="+erinID+"&format=json&nojsoncallback=1", function(data){
    console.log("found the albums, starting the pics");
    var firstSet = $.getJSON(base+data.photosets.photoset[whichSets[0]].id+End, function(firstData){
piclist[0].push([start+firstData.photoset.photo[5].farm+theMid+firstData.photoset.photo[5].server+'\/'+firstData.photoset.photo[5].id+"\_"+firstData.photoset.photo[5].secret+"\_"+"b.jpg", start+firstData.photoset.photo[5].farm+theMid+firstData.photoset.photo[5].server+'\/'+firstData.photoset.photo[5].id+"\_"+firstData.photoset.photo[5].secret+"\_"+"t.jpg"]);
        for (var i in firstData.photoset.photo) {
            console.log("Found album 1");
            piclist[0].push([start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"b.jpg", start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"t.jpg"]);
        }
        console.log(firstData.photoset.photo[i]);
        loaded1 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
    var secondSet = $.getJSON(base+data.photosets.photoset[whichSets[1]].id+End, function(firstData){
piclist[1].push([start+firstData.photoset.photo[2].farm+theMid+firstData.photoset.photo[2].server+'\/'+firstData.photoset.photo[2].id+"\_"+firstData.photoset.photo[2].secret+"\_"+"b.jpg", start+firstData.photoset.photo[2].farm+theMid+firstData.photoset.photo[2].server+'\/'+firstData.photoset.photo[2].id+"\_"+firstData.photoset.photo[2].secret+"\_"+"t.jpg"]);
        for (var i in firstData.photoset.photo) {
            piclist[1].push([start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"b.jpg", start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"t.jpg"]);
        }
        loaded2 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
    var ThirdSet = $.getJSON(base+data.photosets.photoset[whichSets[2]].id+End, function(firstData){
piclist[2].push([start+firstData.photoset.photo[1].farm+theMid+firstData.photoset.photo[1].server+'\/'+firstData.photoset.photo[1].id+"\_"+firstData.photoset.photo[1].secret+"\_"+"b.jpg", start+firstData.photoset.photo[1].farm+theMid+firstData.photoset.photo[1].server+'\/'+firstData.photoset.photo[1].id+"\_"+firstData.photoset.photo[1].secret+"\_"+"t.jpg"]);
        for (var i in firstData.photoset.photo) {
            piclist[2].push([start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"b.jpg", start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"t.jpg"]);
        }
        loaded3 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
    var fourthSet = $.getJSON(base+data.photosets.photoset[whichSets[3]].id+End, function(firstData){
        for (var i in firstData.photoset.photo) {
            piclist[3].push([start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"b.jpg", start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"t.jpg"]);
        }
        loaded4 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
});


var startSlideshow;
var setUp = function() {
  var categoryContainer = $(".categoryContainer");
  var categories = [];
  var thumbnailContainers = [];
  $(".thumbnailContainer").each(function (index) {
      $(this).hide(0).attr({
          id: "Thumbnail Container "+index
      })
  });
  $(".viewerContainer").hide(0);
  $(".viewer").hide(0);
  $(".exit").hide(0);
  $(".slideshow").hide(0);




  $('.category').each(function (index){
      console.log(piclist[index]);
      var category = this;
      $(category).attr({
            id: 'Category '+index
        })
        .css("background", "url("+piclist[index][0][0]+")");
        $(category).css("background-repeat", "no-repeat")
        .css("background-size", "cover")
        .click(function () {
            // $(this).slideUp('fast', function() {
            //     $(document.getElementById("Thumbnail Container "+index)).click(function() {
            //         $(this).slideUp('fast', function() {
            //             $(document.getElementById('Category '+index)).slideDown('fast');
            //             $(this).children().remove();
            //         });
            //     })
            if ($(this).css("background-image") == "none"){
              $(this).slideUp('fast', function() {
                  $(this).empty()
                  .css("background", "url("+piclist[index][0][0]+")")
                  .slideDown('fast');
              });
            } else {
              $(this).slideUp('fast', function() {
                  $(category).css('background-image', '')
                  .css('background', '')
                  .css('background-color', '#DDDDDD')
                  .slideDown('fast', function() {
                      for (var image_index in piclist[index]) {
                          var imagepair = piclist[index][image_index];
                          var thumbnail = imagepair[1];
                          var thumb = $('<img src="' + thumbnail + '" class="thumbnail">');
                          thumb.hide();
                          $(this).append(thumb);
                          thumb.fadeIn('fast');
                      }
                      $(this).children(".thumbnail").each(function(image_index){
                          $(this).click(function() {
                              $(".viewer").remove();
                              var img = $('<img src="'+piclist[index][image_index][0]+'" class="viewer">');
                              var counter = 0;
                              var outerCounter = 0;
                              $('body').append(img);
                              $(img).click(function(){
                                  counter++;
                                  clearInterval(startSlideshow);
                                  $(img).fadeOut('slow', function(){
                                      if (((counter+image_index)%piclist[index+outerCounter].length)==0) {
                                          outerCounter++;
                                          outerCounter = outerCounter %piclist.length;
                                          counter = 0;
                                          image_index = 0;
                                      }
                                      $(this).attr("src",piclist[(index+outerCounter)][(image_index+counter)%piclist[(index+outerCounter)].length][0]);
                                      $(img).on('load', function() {
                                          $(img).fadeIn('fast');
                                      });
                                  });
                              });
                              $('.slideshow').click(function(){
                                  clearInterval(startSlideshow);
                                  startSlideshow = setInterval(function(){
                                      counter++;
                                      $(img).fadeOut('slow', function(){
                                          if (((counter+image_index)%piclist[index+outerCounter].length)==0) {
                                              outerCounter++;
                                              outerCounter = outerCounter %piclist.length;
                                              counter = 0;
                                              image_index = 0;
                                          }
                                          $(this).attr("src",piclist[(index+outerCounter)][(image_index+counter)%piclist[(index+outerCounter)].length][0]);
                                          $(img).on('load', function() {
                                              $(img).fadeIn('fast');
                                          });
                                      });
                                  }, 2500);
                                });
                              $('.exit').show(0).click(function(){
                                  $(this).hide(0);
                                  $('.slideshow').hide(0);
                                  $('.viewer').hide(0);
                                  clearInterval(startSlideshow);
                                //document.location.reload();
                              });
                              $('.slideshow').show(0);
                              console.log(index +" "+ image_index);
                              return false;
                          });
                      });
                  });
              });
            };
        });
    });
  }
