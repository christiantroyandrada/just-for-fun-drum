drum_length = document.querySelectorAll('.drum').length;
for (let index = 0; index < drum_length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener('click', function() {
        //document.getElementById(this).style.color = '#fff';
        console.log(this.innerHTML);
        let sound = '';
        this.style.color = '#fff';
        setTimeout(() => {
            this.style.color = '#db0464';
        }, 100);
        switch (this.innerHTML){
            case 'w':
                sound = new Audio('./sounds/tom-1.mp3');
                sound.play();
                break;
            case 'a':
                sound = new Audio('./sounds/tom-2.mp3');
                sound.play();
                break;
            case 's':
                sound = new Audio('./sounds/tom-3.mp3');
                sound.play();
                break;
            case 'd':
                sound = new Audio('./sounds/tom-4.mp3');
                sound.play();
                break;
            case 'j':
                sound = new Audio('./sounds/crash.mp3');
                sound.play();
                break;
            case 'k':
                sound = new Audio('./sounds/kick-bass.mp3');
                sound.play();
                break;
            case 'l':
                sound = new Audio('./sounds/snare.mp3');
                sound.play();
                break;
            default:
                alert('Error occured, please try again.');
                break;
        }
    });   
}

