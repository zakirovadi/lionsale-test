import './index.scss'

// горизонтальный скролл
if(document.documentElement.clientWidth > 1024){
    window.addEventListener('wheel', e => window.scrollBy(e.deltaY, 0))
}