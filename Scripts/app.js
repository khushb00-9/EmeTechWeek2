"use strict";

// Self-Executing Anonymous Function
// IIFE - Immmediately Invoked Function Expression
(function(){


    function Start() {
        console.log(`%cApp Started... `,
        "font-size: 20px; color: blue;");


    }

    window.addEventListener("load", Start);

})();