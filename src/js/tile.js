var els = document.querySelectorAll('.card');

(function(){
    console.log("tileMe...");
    /*
    */
    console.log("Elements found: ", els.length);
    for (var el in els) {
        console.log(els[el]);
        console.log(els[el].getBoundingClientRect());
    }

})();
