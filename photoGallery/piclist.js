var apiKey = "4459a38b42ed50d49a0126050230d03a";
var erinID = "126524829@N04";
var whichSets = [0,1,2,4];
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
        // console.log(piclist[1][1][0]);
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
        // console.log(piclist[2][1][0]);
        loaded3 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
    var fourthSet = $.getJSON(base+data.photosets.photoset[whichSets[3]].id+End, function(firstData){
        for (var i in firstData.photoset.photo) {
            piclist[3].push([start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"b.jpg", start+firstData.photoset.photo[i].farm+theMid+firstData.photoset.photo[i].server+'\/'+firstData.photoset.photo[i].id+"\_"+firstData.photoset.photo[i].secret+"\_"+"t.jpg"]);
        }
        // console.log(piclist[3][1][0]);
        loaded4 = true;
        if (checkLoaded()) {
            setUp();
        }
    });
});


setUp();
var startSlideshow;
var setUp = function() {
  //$(".category").css("height", (100/piclist.length) + "%");
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
  // $('.slideshow').click(function(){
  //     clearInterval(startSlideshow);
  //     startSlideshow = setInterval(function(){
  //             $(".viewer").trigger("click");
  //       }, 3000);
  //   });


  $('.category').each(function (index){
      console.log(piclist[index]);
      $(this).attr({
            id: 'Category '+index
        })
        .css("background", "url("+piclist[index][0][0]+")")
        .css("background-repeat", "no-repeat")
        .css("background-size", "cover")
        .click(function () {
            $(this).slideUp('fast', function() {
                $(document.getElementById("Thumbnail Container "+index)).click(function() {
                    $(this).slideUp('fast', function() {
                        $(document.getElementById('Category '+index)).slideDown('fast');
                        $(this).children().remove();
                    });
                })
                .slideDown('fast', function() {
                    for (var image_index in piclist[index]) {
                        var imagepair = piclist[index][image_index];
                        var thumbnail = imagepair[1];
                        var thumb = $('<img src="' + thumbnail + '" class="thumbnail">');
                        $(this).append(thumb);
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
                                $(img).fadeOut('fast', function(){
                                    if (((counter+image_index)%piclist[index+outerCounter].length)==0) {
                                        outerCounter++;
                                        outerCounter = outerCounter %piclist.length;
                                        counter = 0;
                                        image_index = 0;
                                    }
                                    $(this).attr("src",piclist[(index+outerCounter)][(image_index+counter)%piclist[(index+outerCounter)].length][0]);
                                    $(img).fadeIn('fast');
                                });
                            });
                            $('.slideshow').click(function(){
                                clearInterval(startSlideshow);
                                startSlideshow = setInterval(function(){
                                    counter++;
                                    $(img).fadeOut('fast', function(){
                                        if (((counter+image_index)%piclist[index+outerCounter].length)==0) {
                                            outerCounter++;
                                            outerCounter = outerCounter %piclist.length;
                                            counter = 0;
                                            image_index = 0;
                                        }
                                        $(this).attr("src",piclist[(index+outerCounter)][(image_index+counter)%piclist[(index+outerCounter)].length][0]);
                                        $(img).fadeIn('fast');
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
        });
    });
  }






// var baseurl = 'http://russ.php.cs.dixie.edu/gardens/';
//
// var piclist = [
//     // first category
//     [
//         [ 'medium/viva01.jpg', 'thumbs/viva01.jpg' ],
//         [ 'medium/viva02.jpg', 'thumbs/viva02.jpg' ],
//         [ 'medium/viva03.jpg', 'thumbs/viva03.jpg' ],
//         [ 'medium/viva04.jpg', 'thumbs/viva04.jpg' ],
//         [ 'medium/viva05.jpg', 'thumbs/viva05.jpg' ],
//         [ 'medium/viva06.jpg', 'thumbs/viva06.jpg' ],
//         [ 'medium/viva07.jpg', 'thumbs/viva07.jpg' ],
//         [ 'medium/viva08.jpg', 'thumbs/viva08.jpg' ],
//         [ 'medium/viva09.jpg', 'thumbs/viva09.jpg' ],
//         [ 'medium/viva10.jpg', 'thumbs/viva10.jpg' ],
//         [ 'medium/viva11.jpg', 'thumbs/viva11.jpg' ],
//         [ 'medium/viva12.jpg', 'thumbs/viva12.jpg' ],
//         [ 'medium/viva13.jpg', 'thumbs/viva13.jpg' ],
//         [ 'medium/viva14.jpg', 'thumbs/viva14.jpg' ],
//         [ 'medium/viva15.jpg', 'thumbs/viva15.jpg' ],
//         [ 'medium/viva16.jpg', 'thumbs/viva16.jpg' ],
//         [ 'medium/viva17.jpg', 'thumbs/viva17.jpg' ],
//         [ 'medium/viva18.jpg', 'thumbs/viva18.jpg' ],
//         [ 'medium/viva19.jpg', 'thumbs/viva19.jpg' ],
//         [ 'medium/viva20.jpg', 'thumbs/viva20.jpg' ],
//         [ 'medium/viva21.jpg', 'thumbs/viva21.jpg' ],
//         [ 'medium/viva22.jpg', 'thumbs/viva22.jpg' ],
//         [ 'medium/viva23.jpg', 'thumbs/viva23.jpg' ],
//         [ 'medium/viva24.jpg', 'thumbs/viva24.jpg' ],
//         [ 'medium/viva25.jpg', 'thumbs/viva25.jpg' ],
//         [ 'medium/viva26.jpg', 'thumbs/viva26.jpg' ],
//         [ 'medium/viva27.jpg', 'thumbs/viva27.jpg' ],
//         [ 'medium/viva28.jpg', 'thumbs/viva28.jpg' ],
//     ],
//
//     // second category
//     [
//         [ 'medium/viva29.jpg', 'thumbs/viva29.jpg' ],
//         [ 'medium/viva30.jpg', 'thumbs/viva30.jpg' ],
//         [ 'medium/viva31.jpg', 'thumbs/viva31.jpg' ],
//         [ 'medium/viva32.jpg', 'thumbs/viva32.jpg' ],
//         [ 'medium/viva33.jpg', 'thumbs/viva33.jpg' ],
//         [ 'medium/viva34.jpg', 'thumbs/viva34.jpg' ],
//         [ 'medium/viva35.jpg', 'thumbs/viva35.jpg' ],
//         [ 'medium/viva36.jpg', 'thumbs/viva36.jpg' ],
//         [ 'medium/viva37.jpg', 'thumbs/viva37.jpg' ],
//         [ 'medium/viva38.jpg', 'thumbs/viva38.jpg' ],
//         [ 'medium/viva39.jpg', 'thumbs/viva39.jpg' ],
//         [ 'medium/viva40.jpg', 'thumbs/viva40.jpg' ],
//         [ 'medium/viva41.jpg', 'thumbs/viva41.jpg' ],
//         [ 'medium/viva42.jpg', 'thumbs/viva42.jpg' ],
//     ],
//
//     // third category
//     [
//         [ 'medium/viva43.jpg', 'thumbs/viva43.jpg' ],
//         [ 'medium/viva44.jpg', 'thumbs/viva44.jpg' ],
//         [ 'medium/viva45.jpg', 'thumbs/viva45.jpg' ],
//         [ 'medium/viva46.jpg', 'thumbs/viva46.jpg' ],
//         [ 'medium/viva47.jpg', 'thumbs/viva47.jpg' ],
//         [ 'medium/viva48.jpg', 'thumbs/viva48.jpg' ],
//         [ 'medium/viva49.jpg', 'thumbs/viva49.jpg' ],
//         [ 'medium/viva50.jpg', 'thumbs/viva50.jpg' ],
//     ],
//
//     // fourth category
//     [
//         [ 'medium/viva51.jpg', 'thumbs/viva51.jpg' ],
//         [ 'medium/viva52.jpg', 'thumbs/viva52.jpg' ],
//         [ 'medium/viva53.jpg', 'thumbs/viva53.jpg' ],
//         [ 'medium/viva54.jpg', 'thumbs/viva54.jpg' ],
//         [ 'medium/viva55.jpg', 'thumbs/viva55.jpg' ],
//         [ 'medium/viva56.jpg', 'thumbs/viva56.jpg' ],
//         [ 'medium/viva57.jpg', 'thumbs/viva57.jpg' ],
//         [ 'medium/viva58.jpg', 'thumbs/viva58.jpg' ],
//         [ 'medium/viva59.jpg', 'thumbs/viva59.jpg' ],
//         [ 'medium/viva60.jpg', 'thumbs/viva60.jpg' ],
//     ],
// ];
