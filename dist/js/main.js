jQuery(function($){

    $("#ajax-subscription").on('submit',function(e){
        e.preventDefault();
        var btn  = $('.ajax-btn');

        // prevent double submission
        if(btn.hasClass('ajax-btn-process') || btn.hasClass('ajax-btn-success')) return false;

       $('.ajax-btn').html('<i class="fa fa-circle fade" aria-hidden="true"></i><i class="fa fa-circle fade" aria-hidden="true"></i><i class="fa fa-circle fade" aria-hidden="true"></i>')
           .addClass('ajax-btn-process');
        $('.ajax-btn .fa').each(function(i,ele){
            setTimeout(function(){
                $(ele).toggleClass('animate');
            }, 300 * (i+1))
        });


        $.ajax({
            url:'process.php',
            success:function(data){
                btn.removeClass('ajax-btn-process').addClass('ajax-btn-success').html('<i class="fa fa-check" aria-hidden="true"></i>');
                $("#ajax-subscription").addClass('ajax-success');
                console.log('success');
            }
        });

        return false;
    });
});