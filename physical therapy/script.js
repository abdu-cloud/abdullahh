// var spans = document.querySelectorAll('.span');
// var image = document.getElementById('.image');

// spans.foreach(span =>{
//     span.addEventListener('mouseover', () => {
        
        
//         if (span.textContent == 'Neck pain')
//              {
//             image.src = 'images/treatment-01.jpg';
//              }else if (span.textContent === 'Shoulder Pain') 
//             {
//             image.src = 'images//treatment-02.jpg ';
//             }else if (span.textContent === 'Hip Pain') 
//             {
//             image.src = 'images//treatment-03.jpg ';
//             }
//          else if (span.innerHTML === 'Knee Pain') 
//             {
//             image.src = 'images/treatment-04.jpg ';
//             }
//          else if (span.textContent === 'Elbow Pain') 
//             {
//             image.src = 'images/treatment-05.jpg ';
//             }
//          else if (span.textContent === 'Tricep Pain') 
//             {
//             image.src = 'images/treatment-06.jpg ';
//             }
//          else if (span.textContent === 'Hand Pain') 
//             {
//             image.src = 'images/treatment-07.jpg ';
//             }
//          else if (span.textContent === 'Foot Pain') 
//             {
//             image.src = 'images/treatment-08.jpg ';
//             }
//          else if (span.textContent === 'Ankle Pain') 
//             {
//             image.src = 'images/treatment-09.jpg ';
//             }
//          else if (span.textContent === 'Back Pain') 
//             {
//             image.src = 'images/treatment-10.jpg ';
//             }
//         else
//         {
//             image.src ='images/treatment-01.jpg'
//         }
        
//     });
// });



document.querySelectorAll('.span').forEach(span => {
   span.addEventListener('mouseover', (event) => {
     const img = document.getElementById('image');
     img.src = event.target.dataset.image;
   });
 });

// =====================================================



const textElement = document.querySelector('.text');
const text ='Orthopedic';

function eraseAndRewrite(text) {
  textElement.textContent = text;
  
  // مسح النص
  textElement.style.width = '100%';
  textElement.style.transition = 'width 1s ease-in-out';
  setTimeout(() => {
    textElement.style.width = 0;
  }, 1000);

  // إعادة كتابة النص حرفًا حرفًا
  let i = 0;
  const intervalId = setInterval(() => {
    textElement.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      clearInterval(intervalId);
    }
  }, 100);
}

eraseAndRewrite(text);


