"use strict";
jQuery(document).ready(function($){
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

    // $('.category').each(function (index){
    //     $(this).attr({
    //           id: 'Category '+index
    //       })
    //       .css("background", "transparent url("+baseurl + piclist[index][1][0]+")")
    //       .click(function () {
    //           $(this).slideUp('fast', function() {
    //               $(this).slideDown('fast');
    //             })
    //             .css('background', '')
    //             .addClass('.thumbnailContainer')
    //             .removeClass('.category');
    //         });
    //     });
                //   }).slideDown('fast', function() {
                //       for (var image_index in piclist[index]) {
                //           var imagepair = piclist[index][image_index];
                //           var thumbnail = baseurl + imagepair[1];
                //           var thumb = $('<img src="' + thumbnail + '" class="thumbnail">');
                //           thumb.click(function() {
                //             //itll do something
                //           });
                //           $(this).append(thumb);
                //       }
                //   });
    $('.category').each(function (index){
        $(this).attr({
              id: 'Category '+index
          })
          .css("background", "transparent url("+baseurl + piclist[index][1][0]+")")
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
                          thumb.click(function(index, image_index) {
                              var img = $('<img src="'+baseurl+piclist[index][image_index][0]+'" class="viewer">');
                              $('body').append(img);
                          });
                          $(this).append(thumb);
                      }
                  });
              });
          });
    });
  }

  setUp();


  return false;
});
