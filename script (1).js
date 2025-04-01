const boton =

document.getElementById('boton');

boton.addEventListener('mouseover', () = > {

boton.style.backgroundColor = '#3e8e41'; });

boton.addEventListener('mouseout', () = > {

boton.style.backgroundColor = '#4CAF50'; });

boton.addEventListener('click', () = > {

boton.style.transform = 'scale(0.9)';

setTimeout(() = > { boton.style.transform = 'scale(1)';

}, 200);

});

