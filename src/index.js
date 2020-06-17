import './index.scss'
import 'particles.js'

// горизонтальный скролл
if(document.documentElement.clientWidth > 1024){
    window.addEventListener('wheel', e => window.scrollBy(e.deltaY, 0))
}

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });