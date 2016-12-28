/**
* Author: Daniel Starner <starner.daniel5@gmail.com>, 2016
* This will allow you to place embedded youtube videos into markdown text before it is
* parsed. 
*
* Example Usage:
*
*   ## Check Out My Video!
*   Isn't it totally rad? 
*
*   ![youtube_video][1]
*
*   [1]: https://www.youtube.com/watch?v=hqZLzjNeeVk
* 
*/

$(document).ready(function () {
  // Find all markdown images with "youtube_video" contained in the alt attribute. 
  $('img[alt^="youtube_video"]').each(
    function () {
    
      // Get the associative parents
      var link = $(this).parent("a");
      var paragraph = link.parent("p");
      
      // Rip out the youtube unique ID
      var youtube_link= $(this).attr("data-canonical-src").split("v=")[1];

      // Put together the embed URL using the ID
      youtube_link = "https://www.youtube.com/embed/" + youtube_link;

      // Uncomment if you want to print the link
      // console.log(youtube_link);

      // Embed into an iframe the way youtube wants you to do it.
      var embedded = '<iframe width="560" height="315" style="max-width: 90%;" src="'+ youtube_link + '" frameborder="0" allowfullscreen></iframe>';

      // Remove the old image/link
      link.remove();

      // Append to the parent tag.
      paragraph.append(embedded);
    }
  );
  
  
  // Handle resizing
  $( window ).resize(function() {
    $('iframe').each(
      function () {
        var ratio = $(this).width() / 560;

        $(this).height(ratio * 315);
      }
    );
  });
  
});
