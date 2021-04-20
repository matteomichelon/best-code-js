/* Vue */

var app = new Vue(
    {
        el: '#root',
        data: {

            /* Box */
            boxClasses: {
                'bg-green': true, //bg-green = nome della classe in css
                'txt-color-white': false //txt-color-white = nome della classe in css
            }

        },
        methods: {

            changeColor () {
                // Con negazione di se stesso
                this.boxClasses[ 'txt-color-white' ] = !this.boxClasses[ 'txt-color-white' ];
                this.boxClasses[ 'bg-green' ] = !this.boxClasses[ 'bg-green' ];
            }

        }
    }
);

/* end Vue */


