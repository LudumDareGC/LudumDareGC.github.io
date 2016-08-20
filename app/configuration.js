require(["../configuration"], function () {

    requirejs.config({
        baseUrl:'',
        shim : {
            "bootstrap" : { "deps" :['jquery'] },
            "jasny" : { "deps" :['jquery', 'bootstrap'] },
            "owl-carousel" : { "deps" :['jquery'] },
            "waypoints" : { "deps" :['jquery'] }
        },
        paths: {
            "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
            "owl-carousel": "bower_components/OwlCarousel/owl-carousel/owl.carousel.min",
            "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min",
            "jasny": "https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min",
            "smooth-scroll": "bower_components/smooth-scroll/dist/js/smooth-scroll.min",
            "waypoints": "bower_components/waypoints/lib/jquery.waypoints.min"
        },
        deps : ['jquery', 'bootstrap', 'jasny', 'owl-carousel']
    });

});
