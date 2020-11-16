$(document).ready(function() {
	var downArrows = $('.fa-chevron-down');
	var upArrows = $('.fa-chevron-up');
	var openMenu = $('.fa-bars');
	var closeMenu = $('.fa-times');
	var subMenus = $('ul.sub-menu');
	var subMenuLinks = $('a.sub-menu-link')

	$(openMenu).on('click', function() {
		$(openMenu).hide();
		$(closeMenu).show();
		$('nav#navbar > ul').show();
	});

	$(closeMenu).on('click', function() {
		$(closeMenu).hide();
		$(openMenu).show();
		$('nav#navbar > ul').hide();
		[...subMenus].forEach(function(subMenu) {
			$(subMenu).hide();
		});
		[...downArrows].forEach(function(downArrow) {
			$(downArrow).removeClass('hide').addClass('show');
		});
		[...upArrows].forEach(function(upArrow) {
			$(upArrow).removeClass('show').addClass('hide');
		});
	});

	[...downArrows].forEach(function(downArrow) {
		$(downArrow).on('click', function() {
			$(downArrow).removeClass('show').addClass('hide');
			$(downArrow).siblings('.fa-chevron-up').removeClass('hide').addClass('show');
			$(downArrow).siblings('ul').show();
		});	
	});
	[...upArrows].forEach(function(upArrow) {
		$(upArrow).on('click', function() {
			$(upArrow).removeClass('show').addClass('hide');
			$(upArrow).siblings('.fa-chevron-down').removeClass('hide').addClass('show');
			$(upArrow).siblings('ul').hide();
		})
	});
});