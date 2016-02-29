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
    $(".category").css("height", (100/piclist.length) + "%");
    var categoryContainer = $(".categoryContainer");
    var categories = [];
    var thumbnailContainers = [];
    for (var cat_index in piclist) {
      //make a new category under the categoryContainer and give it the image of the first thing in the respective list in piclist
      categories.push($('<li class="category"> Category '+(cat_index+1)+'</li>'));
      $(".category:nth-of-type("+(cat_index+1)+")").css("background","url("+baseurl + piclist[cat_index][1][0]+")").css("background-size","cover");
      categories[cat_index].appendTo("ul.categoryContainer");

      //make the thumbnail container for the thumbnails that will appear if the use clicks on the category
      thumbnailContainers.push($('<ul class="thumbnailContainer">'));
      thumbnailContainers[cat_index].appendTo("li.category");
      for (var image_index in piclist[cat_index]) {
        //might need to fix to get the right thumbnails because of scoping, add in which category from the html
        var thumbnail = $('<li class="thumbnail"> Thumbnail '+(image_index+1)+'</li>');
        $(".thumbnail:nth-of-type("+(image_index+1)+")").css("background","url("+baseurl + piclist[cat_index][image_index][1]+")").css("background-size","cover");
        //$(".thumbnail:nth-of-type("+(image_index+1)+")").css("background","url("baseurl + piclist[cat_index][image_index][1]")").css("background-size","cover");
        //thumbnailContainers[cat_index].append(thumbnail);
        thumbnail.appendTo("ul.thumbnailContainer")
      }

      //add the click handler for each category to make the respective set of thumbnails appear
      categories[cat_index].on("click", function() {
        this.slideUp();
        thumbnailContainers[cat_index].slideDown();
      });
    }
  }

  setUp();


  return false;
});
