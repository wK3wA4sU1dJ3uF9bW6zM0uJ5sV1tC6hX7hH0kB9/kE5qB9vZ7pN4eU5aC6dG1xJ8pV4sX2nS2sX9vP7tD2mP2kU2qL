var navexpanded = 'false'

function opennav() {
    if (navexpanded == 'false'){
        document.getElementById('header').style.backgroundImage = document.getElementById('header2').style.backgroundImage
        document.getElementById('header').style.height = "410px"
        document.getElementById('header-fragment').style.height = "410px"
        navexpanded = 'true'

    } else {
        if (navexpanded == 'true'){
            document.getElementById('header').style.height = "50px"
            document.getElementById('header-fragment').style.height = "50px"
            setTimeout(() => { document.getElementById('header').style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.2))';}, 300);
            navexpanded = 'false'
        } else {
            alert('An error occured. (navexpanded null 0x001)')
        }
    }
}

function opennavhead() {
    if (navexpanded == 'false'){
        document.getElementById('navicon').innerHTML = "close"
        navexpanded = 'true'

    } else {
        if (navexpanded == 'true'){
            document.getElementById('navicon').innerHTML = "menu"
            navexpanded = 'false'
        } else {
            alert('An error occured. (navexpanded null 0x002)')
        }
    }   
}

function comments(){
    document.getElementById('disqus_thread').style.display = 'block'
    document.getElementById('commentsbtn').style.display = 'none'
}