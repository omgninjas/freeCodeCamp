$(document).ready(function () {
		$('li.tbl-block').hover(function () {
			$(this).addClass('highlight');
        }, function () {
            $(this).removeClass('highlight');
        });
    });
