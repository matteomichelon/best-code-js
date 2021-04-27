/* Document Ready */
$( document ).ready( function () {

    //====
    /* write here if you use jQuery*/
    //====

} );
/* end Document Ready */

/* Vue */

var app = new Vue(
    {
        el: '#root',

        /* DATA */
        data: {

        },

        /* METHODS */
        methods: {

        },

        /* MOUNTED */
        mounted () {
            axios
                .get( 'url' )
                .then( ( response ) => {
                    const result = response.data;
                } );
        },

        /* CREATED */
        created(){

        }

    }
);

/* end Vue */


