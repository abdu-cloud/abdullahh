//------------------ تغيير مواعيد الاسبوع -------------------//

const filterItems = document.querySelectorAll('.schedule-filter li');

const scheduleItems = document.querySelectorAll('.ts-item');

filterItems.forEach(item => {
    item.addEventListener('click', function() {
        
        filterItems.forEach(i => i.classList.remove('active'));
        
        this.classList.add('active');
        const filter = this.getAttribute('data-tsfilter');

        scheduleItems.forEach(schedule => {
            if (schedule.classList.contains(filter)) {
                schedule.style.display = 'table-cell';
            } else {
                schedule.style.display = 'none';
            }
        });
    });
});
// =================================================================

const tabs = document.querySelectorAll('.tabes ul li a');
const contents = document.querySelectorAll('.tabes-content > div');
contents[0].classList.add('active');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        
        contents.forEach(content => content.classList.remove('active'));

        
        contents[index].classList.add('active');
    });
});
// ===================== En to ar  ========================

const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('click', function() {
    const isEnglish = document.documentElement.lang === "en";
    
    
    if (isEnglish) {
        document.documentElement.lang = "ar";
        languageToggle.textContent = "EN"; 
    } else {
        document.documentElement.lang = "en";
        languageToggle.textContent = "AR"; 
    }
    
    document.querySelectorAll('[data-en]').forEach(element => {
        if (isEnglish) {
            element.textContent = element.getAttribute('data-ar');
            element.style.direction = "rtl"; 
            element.style.textAlign = "right"; 
        } else {
            element.textContent = element.getAttribute('data-en');
            element.style.direction = "ltr"; 
            element.style.textAlign = "left"; 
        }
    });
});

// ====================== background nav ====================================//

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-area.header-sticky');
    var section = document.querySelector('#features'); 
    var sectionTop = section.offsetTop;

    if (window.scrollY > sectionTop - 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// ================= Dark Mode ============//

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  


//   ================ fotor ===============//
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");
    const textContent = textElement.textContent;
    textElement.textContent = ""; 
  
   
    for (let i = 0; i < textContent.length; i++) {
      let span = document.createElement("span");
      span.textContent = textContent[i];
      span.classList.add("hidden");
      textElement.appendChild(span);
    }

    const spans = textElement.querySelectorAll("span");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove("hidden");
        span.classList.add("visible");
      }, index * 150);
    });
  });








  