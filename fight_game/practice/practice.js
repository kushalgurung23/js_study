const helloWorldDiv = document.getElementById('hello_world');

helloWorldDiv.addEventListener('click', function () {
    console.log('hey you clicked on hello world.');
});

document.addEventListener('keydown', function(e) {
    if(e.key=='q' || e.key=='Q') {
        console.log('q is pressed');
        document.getElementById('punch').play();
    }
    else {
        console.log('not q');
        document.getElementById('victory').play();
    }
});

