var clickspan = document.getElementById( 'my-checkbox' )

clickspan.addEventListener( 'click', function () {

    // Se il fratello prima di "clickspan" hai il check allora togli il check e contrario.
    clickspan.previousElementSibling.checked = !clickspan.previousElementSibling.checked;

} );