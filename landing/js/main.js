$('.what-stone .slider').slick({
    dots: true,
    slidesToShow: 3,
    initialSlide: 7,
    slidesToScroll: 3,
    dotsClass: 'dots-style',
    prevArrow: $('.what-stone .slide-control-btns .arrow-left'),
    nextArrow: $('.what-stone .slide-control-btns .arrow-right'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$('.reviews .slider').slick({
    infinite: false,
    dots: true,
    initialSlide: 2,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    dotsClass: 'dots-style',
    prevArrow: $('.reviews .slide-control-btns .arrow-left'),
    nextArrow: $('.reviews .slide-control-btns .arrow-right'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                variableWidth: false
            }
        }
    ]
})

document.getElementById('calc-btn').addEventListener('click', () => (location.href = '#calc-price'))

// Dropdown start

// dd - dropdown, ul - <ul></ul>
let ddListItems = document.querySelectorAll('.ddul li')
let ddul = document.querySelectorAll('.ddul')
let visible = document.querySelectorAll('.visible')
let ddarrow = document.querySelectorAll('.ddarrow')
let visimg = document.querySelector('.visimg')

ddul.forEach(e => {
    e.style.height = e.style.width = '0%'
    e.style.fontSize = '0'
})

ddarrow.forEach(e => (e.style.transform = 'rotate(45deg)'))

getLClick = e => {
    let path = event.path || (event.composedPath && event.composedPath())
    let p
    path.forEach(e => {
        if (e.classList && e.classList[0] == 'dropdown') {
            let curNodes = e.children[0].children
            p = curNodes[curNodes.length - 2]
        }
    })

    if (e.target.tagName.toUpperCase() == 'LI') {
        if (e.target.children.length) {
            visimg.src = e.target.children[0].src
        }

        //                                                 input
        let inpId = e.target.parentNode.getAttribute('data-inp-id')

        if (inpId) {
            document.getElementById(inpId).value = e.target.innerText
        }

        p.innerText = e.target.innerText
    } else if (e.target.tagName.toUpperCase() == 'IMG') {
        visimg.src = e.target.src
        p.innerText = e.target.parentNode.innerText
    }
    p.classList.remove('disabled')
}

let liSize = window.innerWidth > 990 ? '277px' : '100%'

ddListItems.forEach(e => {
    if (e.children.length) {
        e.children[0].style.height = e.children[0].style.width = '0'
    }
    e.style.padding = e.style.width = '0'
    e.style.height = '0px'
    e.style.backgroundColor = '#5f5b58'
    e.style.borderRight = e.style.borderLeft = e.style.borderBottom = 'none'
    e.addEventListener('click', getLClick)
})

dropDownAnim = e => {

    let mainDd
    let path = e.path || (e.composedPath && e.composedPath())

    path.forEach(e => {
        if (e.classList && e.classList[0] == 'dropdown') mainDd = e
    })

    let vis = mainDd.children[0],
        ddListWrap = mainDd.children[1],
        ddItems = [...ddListWrap.children],
        arrow = vis.children[vis.children.length - 1]

    ddListWrap.style.height = ddListWrap.style.width = ddListWrap.style.height == '0%' ? '100%' : '0%'
    ddListWrap.style.fontSize = ddListWrap.style.fontSize == '0px' ? '16px' : '0px'

    ddItems.forEach(e => {
        if (e.children.length) {
            e.children[0].style.height = e.children[0].style.width = e.children[0].style.height == '0px' ? '30px' : '0px'
        }
        e.style.width = +e.style.width[0] == 0 ? liSize : '0'
        e.style.height = e.style.height == '0px' ? '55px' : '0px'
        e.style.padding = e.style.padding == '0px' ? '0 17px' : '0px'
        e.style.borderRight = e.style.borderLeft = e.style.borderLeft == 'none' ? '1px solid #c19f63' : 'none'
        e.style.backgroundColor = e.style.backgroundColor == '#5f5b58' ? 'transparent' : '#5f5b58'
    })
    ddItems[ddItems.length - 1].style.borderBottom = ddItems[ddItems.length - 1].style.borderBottom == 'none' ? '1px solid #c19f63' : 'none'

    arrow.style.transform = arrow.style.transform == 'rotate(45deg)' ? 'rotate(-135deg)' : 'rotate(45deg)'
}

document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', dropDownAnim))

// Dropdown end

let cropText = document.querySelectorAll('.crop-text')

//crop products and slides textes
let charLimit = window.innerWidth > 768 ? 550 : 300
document.querySelectorAll('.store-full-text').forEach((e, i) => {
    if (e.innerHTML.length > charLimit) {
        cropText[i].innerHTML = e.innerHTML.substr(0, charLimit) + '...'
        e.style.fontSize = '0px'
    } else {
        //find and hide "show more" buttons
        let childs = e.parentNode.childNodes
        childs.forEach(e => {
            //for products
            if (e.childNodes[1] && e.childNodes[1].classList[0] == 'dashed-link') {
                e.childNodes[1].style.display = 'none'
            }
            //for slides
            if (e.className == 'dashed-link') {
                e.style.display = 'none'
            }
        })
    }
})

//crop galery
let galeryRows = document.querySelectorAll('.our-works .images .row')
if (galeryRows.length > (window.innerWidth > 425 ? 2 : 1)) {
    document.querySelector('.works-control').style.display = 'flex'
    for (let i = window.innerWidth > 425 ? 2 : 1; i < galeryRows.length; i++) {
        galeryRows[i].style.display = 'none'
    }
}

showFull = e => {
    e.preventDefault()
    if (e.target.parentNode.classList[0] == 'works-control') {
        for (let i = 2; i < galeryRows.length; i++) {
            galeryRows[i].style.display = galeryRows[i].style.display == 'none' ? 'flex' : 'none'
        }
        e.target.innerText = e.target.innerText == 'Скрыть' ? 'Показать еще' : 'Скрыть'
    } else {
        let fullT, liteT
        if (e.target.parentNode.classList[0] == 'actives') {
            fullT = e.target.parentNode.parentNode.childNodes[5]
            liteT = e.target.parentNode.parentNode.childNodes[3]
        } else if (e.target.parentNode.classList[0] == 'slide') {
            fullT = e.target.parentNode.childNodes[3]
            liteT = e.target.parentNode.childNodes[5]
        }

        fullT.style.fontSize = fullT.style.fontSize == '0px' ? '16px' : '0px'
        liteT.style.fontSize = liteT.style.fontSize == '0px' ? '16px' : '0px'
        e.target.innerText = e.target.innerText == 'Свернуть' ? 'Читать полностью' : 'Свернуть'
    }
}

document.querySelectorAll('.dashed-link').forEach((e, i) => {
    //exclude first element(phone call link)
    if (e.style.display != 'none' && i > 0) e.addEventListener('click', showFull)
})

let modal = document.getElementById('modal')

setFieldsWidth = w => {
    document.querySelector('#m-first-inp').style.width = document.querySelector('#m-sec-inp').style.width = document.querySelector('#m-btn').style.width = w + 'px'
}

inFromAttr = (el, val, wider) => {
    if (val) {
        el.style.display = 'block'

        if (el.getAttribute('placeholder')) {
            el.setAttribute('required', '')
            el.setAttribute('placeholder', val)
        } else if (el.getAttribute('value')) {
            el.setAttribute('value', val)
        } else {
            el.innerHTML = val
        }

        if (wider) {
            el.setAttribute('required', '')
            // window.innerWidth
            setFieldsWidth(window.innerWidth > 425 ? 400 : 300)
        }
    } else {
        if (el.getAttribute('required')) {
            el.removeAttribute('required')
        }
        el.style.display = 'none'
        setFieldsWidth(window.innerWidth > 425 ? 277 : 270)
    }
}

let formTags = {
    '#m-head': ['data-mhead', 'data-second-mhead'],
    '#m-par': ['data-mpar', 'data-second-mpar'],
    '#m-first-inp': 'data-mfirstinp',
    '#m-sec-inp': 'data-msecinp',
    '#m-textarea': 'data-mtextarea',
    '#m-btn': 'data-mbtn'
}

document.querySelectorAll('.modal-trigger').forEach(e =>
    e.addEventListener('click', e => {
        for (let el in formTags) {
            if (el == '#m-head' || el == '#m-par') {
                let elnew = document.querySelector(el)
                inFromAttr(elnew, e.target.getAttribute(formTags[el][0]))
                elnew.setAttribute('data-second', e.target.getAttribute(formTags[el][1]))
            } else {
                inFromAttr(document.querySelector(el), e.target.getAttribute(formTags[el]), el == '#m-textarea' ? true : false)
            }
        }

        modal.style.display = 'flex'
    })
)

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('#mob-menu').style.display = 'block'
})

setSecondText = el => {
    let data = el.getAttribute('data-second')
    if (data != 'null') {
        el.style.display = 'block'
        el.innerHTML = data
    }
}

document.querySelector('#m-form').addEventListener('submit', e => {
    e.preventDefault()
    setSecondText(document.querySelector('#m-head'))
    setSecondText(document.querySelector('#m-par'))
    document.querySelectorAll('#modal .custom-btn').forEach(e => {
        e.style.display = 'none'
    })
})

clearValues = () => {
    document.querySelector('#m-first-inp').value = ''
    document.querySelector('#m-sec-inp').value = ''
    document.querySelector('#m-textarea').value = ''
}

closeModal = () => {
    modal.style.display = 'none'
    clearValues()
    document.getElementById('m-textarea').removeAttribute('required')
}

document.querySelector('.modal .close').addEventListener('click', closeModal)

document.querySelector('#mob-menu .close').addEventListener('click', () => {
    document.querySelector('#mob-menu').style.display = 'none'
})

document.querySelectorAll('#mob-menu li').forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('#mob-menu').style.display = 'none'
    })
})

window.addEventListener('click', e => {
    if (e.target == modal) {
        closeModal()
    }
    if (e.target == document.querySelector('#mob-menu')) {
        document.querySelector('#mob-menu').style.display = 'none'
    }
})

document.querySelector('#open-form').removeEventListener('click', showFull)

document.querySelector('#open-form').addEventListener('click', e => {
    e.preventDefault()
    e.target.style.display = 'none'
    document.querySelector('.form-box').classList.remove('d-none')
})

window.addEventListener('resize', () => {
    liSize = window.innerWidth > 990 ? '277px' : '100%'
})
