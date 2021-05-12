$(function(){
    $('[include-html]').each(function(){
        var t = $(this).attr('include-html'),
        u = this.id;

        // alert(u);

        jQuery.ajax({
            url:t,
            success: function(t) {
                $("#" + u).html(t);
            },

            error: function (n, c, i){
                var s = n.status + ": " + n.statusText;

                $("#" +u).html(t + "-" + s);
            }
        })

    })
})


// $(document).ready(function(){
//     $("#navigation_file").load('navigation.html');

    // var href = $("a").attr("href");

    // alert(href);
// })