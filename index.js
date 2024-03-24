/* toggle icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// };

/* scroll active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(section => {
//         let top = window.scrollY;
//         let offset = section.offsetTop - 150;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
//             });
//         }
//     });

    /* sticky nav bar */
//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };

// Initialize ScrollReveal with options
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Use ScrollReveal on elements
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Python-Developer', 'Tech-Enthusiast', 'Web Developer', 'Software Developer','Problem-Solver'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

function toggleMenu() {
    var menu = document.getElementById("menuContent");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }


//   click READMORE expantion

document.getElementById('readMoreBtn').addEventListener('click', function() {
    var fullText = document.getElementById('fullText');
    var btnText = document.getElementById('readMoreBtn');

    if (fullText.style.display === "none") {
        fullText.style.display = "inline";
        btnText.textContent = "Read Less";
    } else {
        fullText.style.display = "none";
        btnText.textContent = "Read More";
    }
});




const btn = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_515vk9s';
   const templateID = 'template_3dzmmba';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('coursesReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('coursesFullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('courses1ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses1FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});


document.getElementById('courses2ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses2FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});


document.getElementById('courses3ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses3FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});


document.getElementById('courses4ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses4FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('courses5ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses5FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('courses6ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses6FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('coursReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('coursFullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('co7ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('co7FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('courses8ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses8FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});



document.getElementById('courses9ReadMoreBtn').addEventListener('click', function() {
  var fullText = document.getElementById('courses9FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('portfolioBtn').addEventListener('click', function() {
  var fullText = document.getElementById('portfolioFullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('portfolio2Btn').addEventListener('click', function() {
  var fullText = document.getElementById('portfolio2FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});

document.getElementById('portfolio3Btn').addEventListener('click', function() {
  var fullText = document.getElementById('portfolio3FullText');
  var btnText = this; 

  if (fullText.style.display === "none") {
      fullText.style.display = "block";
      btnText.textContent = "Read Less";
      btnText.style.backgroundColor = "maroon";
  } else {
      fullText.style.display = "none"; 
      btnText.textContent = "Read More";
      btnText.style.backgroundColor = "";
      btnText.style.color = "";
  }
});