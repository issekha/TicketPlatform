jQuery(document).ready(function ($) {

	$('.datepicker').datepicker({
		startDate: '0',
		
		autoclose:"true",
		todayBtn: "linked",
    	language: "fr",
		todayHighlight: true
    	
	});
	
	$(':checkbox').change(function() {
            var id = 'msg_' + $(this).attr('id');
            if ($(this).is(':checked')) {
                $(this).after('<p id="' + id + '"><i>Un justificatif (carte d\'étudiant, carte militaire etc...) vous sera demandé, le jour de votre visite.</i></p>')
            } else if (!($(this).is(':checked'))) {
                $('#' + id).remove();
            }
        });

})