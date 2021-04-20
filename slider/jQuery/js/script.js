/* JQUERY */

/* Right Chevron */
var rightChevron = $( '.chevron.right' );

rightChevron.on( 'click', function () {
    var activeNow = $( '.images .active' );
    activeNow.removeClass( 'active' );

    // Se l'elemento activeNow ha presente la classe 'last'
    if ( activeNow.hasClass( 'last' ) ) {

        // allora aggiungi la classe 'active' all'elemento con classe 'first'
        var firstChild = $( '.images .first' );
        firstChild.addClass( 'active' );

    } else {

        var nextImg = activeNow.next();
        nextImg.addClass( 'active' );

    }

} );
/* end Right Chevron */

/* Left Chevron */
var leftChevron = $( '.chevron.left' );

leftChevron.on( 'click', function () {
    var activeNow = $( '.images .active' );
    activeNow.removeClass( 'active' );

    // Se l'elemento activeNow ha presente la classe 'last'
    if ( activeNow.hasClass( 'first' ) ) {

        // allora aggiungi la classe 'active' all'elemento con classe 'first'
        var firstChild = $( '.images .last' );
        firstChild.addClass( 'active' );

    } else {

        var nextImg = activeNow.prev();
        nextImg.addClass( 'active' );

    }

} );

/* end Left Chevron */

