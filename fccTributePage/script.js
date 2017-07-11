new WOW().init();
$(document).ready(function() {
	$('.timeline-item').not(":first").addClass('wow fadeInUp').attr('data-wow-duration', '1.35s').attr('data-wow-delay', '.25s');
});

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>

