"use strict";
// jQuery(document).ready(function($){
  // for (var cat_index in piclist) {
  //   var category = piclist[cat_index];
  //   for (var image_index in category) {
  //     var imagepair = category[image_index];
  //     var fullsize = baseurl + imagepair[0];
  //     var thumbnail = baseurl + imagepair[1];
  //     document.writeln('<img src="' + thumbnail + '">');
  //   }
  // }
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
    $('.slideshow').click(function(){
        if (startSlideshow){
          window.clearInterval(startSlideshow);
      } else {
          var startSlideshow = setInterval(function(){
                $(".viewer").trigger("click");
          }, 1000);
      }
    });


    $('.category').each(function (index){
        $(this).attr({
              id: 'Category '+index
          })
          .css("background", "url("+baseurl + piclist[index][1][0]+")")
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
                          var thumbnail = baseurl + imagepair[1];
                          var thumb = $('<img src="' + thumbnail + '" class="thumbnail">');
                          $(this).append(thumb);
                      }
                      $(this).children(".thumbnail").each(function(image_index){
                          $(this).click(function() {
                              var img = $('<img src="'+baseurl+piclist[index][image_index][0]+'" class="viewer">');
                              var counter = 0;
                              var outerCounter = 0;
                              $('body').append(img);
                              $(img).click(function(){
                                  counter++;
                                  $(img).fadeOut('fast', function(){
                                      if (((counter+image_index)%piclist[index+outerCounter].length)==0) {
                                          outerCounter++;
                                          outerCounter = outerCounter %piclist.length;
                                          counter = 0;
                                          image_index = 0;
                                      }
                                      $(this).attr("src",baseurl+piclist[(index+outerCounter)][(image_index+counter)%piclist[(index+outerCounter)].length][0]);
                                      $(img).fadeIn('fast');
                                  });
                              });
                              $('.exit').show(0).click(function(){
                                  $(this).hide(0);
                                  $('.slideshow').hide(0);
                                  $('.viewer').hide(0);
                                  window.clearInterval(startSlideshow);
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


// });
