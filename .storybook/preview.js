// sds imports
import SdsButton from '../src/sds/Button/button'
import SdsHeadline from '../src/sds/Headline/headline'

// c360 imports
import C360Button from '../src/c360/Button/button'
import C360Headline from '../src/c360/Headline/headline'
import C360Card from '../src/c360/Card/card'
import C360CardGroup from '../src/c360/CardGroup/card-group'

// global css import
import '../src/globals.css'

// Define SDS Web Components
customElements.define('sds-button', SdsButton)
customElements.define('sds-headline', SdsHeadline)

// Define C360 Web Components
customElements.define('c360-button', C360Button)
customElements.define('c360-headline', C360Headline)
customElements.define('c360-card', C360Card)
customElements.define('c360-card-group', C360CardGroup)

// Customizations for Viewport and Background preview options
// that appear in the Storybook UI
export const parameters = {
    viewport: {
      viewports: {
        FourK: {
            name: '4K',
            styles: {
                width: '2560px',
                height: '1344px'
            },
        },
        Monitor: {
            name: 'Large Monitor',
            styles: {
                width: '1920px',
                height: '1080px'
            },
        },
        LaptopHD: {
            name: 'Laptop HD',
            styles: {
                width: '1440px',
                height: '900px'
            },
        },
        Laptop: {
            name: 'Laptop',
            styles: {
                width: '1280px',
                height: '800px'
            },
        },
        iPadPro: {
            name: 'iPad Pro',
            styles: {
                width: '1024px',
                height: '1366px'
            },
        },
        iPad: {
            name: 'iPad',
            styles: {
                width: '768px',
                height: '1024px'
            },
        },
        iPhone13ProMax: {
            name: 'iPhone 12/13 Pro Max',
            styles: {
                width: '428px',
                height: '926px'
            },
        },
        iPhone13: {
            name: 'iPhone 12/13',
            styles: {
                width: '390px',
                height: '844px'
            },
        },
        iPhoneX: {
            name: 'iPhone X',
            styles: {
                width: '375px',
                height: '812px'
            },
        },
        iPhone8Plus: {
            name: 'iPhone 6/7/8 Plus',
            styles: {
                width: '414px',
                height: '736px'
            },
        },
        GooglePixel4: {
            name: 'Google Pixel 4',
            styles: {
                width: '412px',
                height: '869px'
            },
        },
        SamsungGalaxy: {
            name: 'Samsung Galaxy 8/9',
            styles: {
                width: '360px',
                height: '740px'
            },
        },
        iPhone8: {
            name: 'iPhone 6/7/8',
            styles: {
                width: '375px',
                height: '667px'
            },
        },
        iPhone5: {
            name: 'iPhone 5',
            styles: {
                width: '320px',
                height: '568px'
            },
        },
      }
    },
    backgrounds: {
        default: 'White',
        values: [
            {
                name: '$color-background',
                value: '#f3f2f2'
            },
            {
                name: '$color-background-inverse',
                value: '#001639'
            },
            {
                name: '$color-background-inverse-light',
                value: '#032d60'
            },
            {
                name: '$color-background-light / $color-background-alt',
                value: '#ffffff'
            },
            {
                name: '$color-background-alt-inverse',
                value: '#032d60'
            },
            {
                name: '$color-background-dark',
                value: '#ecebea'
            },
            {
                name: '$color-background-info',
                value: '#706e6b'
            },
        ],
    },
}