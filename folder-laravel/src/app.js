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
        created () {

        }

    }
);

/* end Vue */