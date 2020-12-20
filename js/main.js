
const TOP_NAV_CLASSES = new Map()

TOP_NAV_CLASSES.set('pc', 'topnav')
TOP_NAV_CLASSES.set('responsive', 'topnav responsive')


const menu = document.getElementById('menu')

menu.onclick = function burgerClick() {
    const responsiveEl = document.getElementById('myTopNav')

    switch (responsiveEl.className) {
        case TOP_NAV_CLASSES.get('pc'):
            responsiveEl.className = TOP_NAV_CLASSES.get('responsive')
            break;
    
            case TOP_NAV_CLASSES.get('responsive'):
                responsiveEl.className = TOP_NAV_CLASSES.get('pc')
            break;
    }

}