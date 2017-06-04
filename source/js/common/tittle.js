// // ***** tittle ***** //
//     const tl = new TimelineMax(),
//         tittle = document.querySelectorAll('.tittle'),
//         str = tittle[0].innerText;
//         console.log(str);
 
//     for (let i = 0; i < str.length; i++) {
//         var e = document.createElement("span");
//             e.innerHTML = str[i];
//             console.log(e);
//             tittle[0].appendChild(e);
//     };

//     const arrayOfLetters = document.querySelectorAll('.tittle > span');
//     arrayOfLetters.forEach(letter => {
//         TweenMax.set(letter, {opacity: 0, scale: 0});
//     });
    
//     tl.staggerTo(arrayOfLetters, 0.5, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2);