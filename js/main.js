$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'book', 'about', 'blog'],
    menu: '#myMenu',
    verticalCentered: false,
    fitToSection: true,
    autoScrolling: false,
    onLeave: function(index, nextIndex, direction) {
      if (index == 2) {
        $('#preorder-popup').removeClass('bounceUpIn');
      }
    }
  });

  $('#preorder-button').on('click', function(e) {
    e.preventDefault();
    $('#preorder-popup').addClass('bounceUpIn');
  });

  $('.close-button').on('click', function(e) {
    e.preventDefault();
    $('#preorder-popup').removeClass('bounceUpIn');
  });
  $.ajax({
	url: 'http://bethellynsummer.com/blog/wp-json/wp/v2/posts',
  	success: function(result) {
		post_date = new Date(result[0]['date']);
		
		console.log(post_date.toDateString());
		$('#blog-paper h3').html(result[0]['title']['rendered']);
		$('#blog-paper p').html(result[0]['excerpt']['rendered']);
		$('#blog-paper span.post-date').html(post_date.toDateString());
	}
  });
})
