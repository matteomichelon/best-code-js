/* Vue */
var app = new Vue(
    {

        el: '#root',

        /* DATA */
        data: {

            /* Images Array */
            currentImage: 0,
            imagesArray: [
                'campagna.jpg',
                'cascate.webp',
                'fiori.jpeg',
                'montagne.webp'
            ],

        },

        /* METHODS */
        methods: {

            /* Function Next Image */
            nextImage () {
                const nextImage = this.currentImage + 1;
                const lastImage = this.imagesArray.length - 1;

                if ( nextImage > lastImage ) {
                    this.currentImage = 0;
                } else {
                    this.currentImage = nextImage;
                }
            },

            /* Function Prev Image */
            prevImage () {
                const prevImage = this.currentImage - 1;
                const lastImage = this.imagesArray.length - 1;

                if ( prevImage < 0 ) {
                    this.currentImage = lastImage;
                } else {
                    this.currentImage = prevImage;
                }
            },

        },

        /* CREATED */
        created () {
            // Usiamo una arrowFunction perchè ci serve in questo caso
            // il this altrimenti con la funzione normale ci dà un oggetto windows
            setInterval( () => {
                this.nextImage();
            }, 3000 )
        }

    }
);
/* end Vue */


