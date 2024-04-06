window.onload = function() {
    document.getElementById('patient').onclick = function(event) {
        animateButton.call(this, 'patient/patient.html');
    };
    document.getElementById('doctor').onclick = function(event) {
        animateButton.call(this, 'doctor/doctor.html');
    };
};

function animateButton(destination) {
    var button = this.querySelector('button');
    setTimeout(function() {
        button.style.transform = 'translateY(10px)';
        setTimeout(function() {
            button.style.transform = 'translateY(0px)';
            // Delay navigation by 500 milliseconds after animation
            setTimeout(function() {
                window.location.href = destination;
            }, 500);
        }, 100);
    }, 50); // Small delay before animation starts
}
