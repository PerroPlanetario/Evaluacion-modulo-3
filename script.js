  $(document).ready(function () {
    const $carousel = $('#carouselExampleIndicators');
    const $counter = $('#slideCounter');
    const totalSlides = $carousel.find('.carousel-item').length;

    let carousel = new bootstrap.Carousel($carousel[0], {
      interval: 3000,
      ride: 'carousel'
    });

    $carousel.on('slide.bs.carousel', function (e) {
      const index = $(e.relatedTarget).index() + 1;
      $counter.text(`${index} / ${totalSlides}`);
    });

    $carousel.hover(
      function () { carousel.pause(); },
      function () { carousel.cycle(); }
    );
  });
         $(document).ready(function() {
            $('.threat-card').click(function(e) {
                if ($(e.target).hasClass('back-btn') || $(e.target).parent().hasClass('back-btn')) {
                    return;
                }
                
                const card = $(this);
                const threatInfo = card.find('.threat-info');
                const preventionInfo = card.find('.prevention-info');
                const flipIndicator = card.find('.flip-indicator i');
                
                threatInfo.fadeOut(300, function() {
                    card.addClass('prevention-mode');
                    flipIndicator.removeClass('fa-sync').addClass('fas fa-lock');
                    
                    preventionInfo.fadeIn(300);
                });
            });
            
            $('.back-btn').click(function(e) {
                e.stopPropagation(); 
                
                const card = $(this).closest('.threat-card');
                const threatInfo = card.find('.threat-info');
                const preventionInfo = card.find('.prevention-info');
                const flipIndicator = card.find('.flip-indicator i');

                preventionInfo.fadeOut(300, function() {
                    card.removeClass('prevention-mode');
                    flipIndicator.removeClass('fas fa-lock').addClass('fas fa-sync');
                    threatInfo.fadeIn(300);
                });
            });});

    // Validación de formulario
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      let form = this;
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
      } else {
        alert("¡Formulario enviado con éxito!");
        form.reset();
        form.classList.remove('was-validated');
      }
    });

    // Evaluación del quiz
    function checkQuiz() {
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value;
        const q3 = document.getElementById('q3').value;
        const q4 = document.getElementById('q4').value;
        const q5 = document.getElementById('q5').value;
        const q6 = document.getElementById('q6').value;
        const q7 = document.getElementById('q7').value; 
      let score = 0;
      if (q1 === 'c') score++;
      if (q2 === 'b') score++;
      if (q3 === 'b') score++;
      if (q4 === 'a') score++;
      if (q5 === 'c') score++;
      if (q6 === 'b') score++;
      if (q7 === 'c') score++;

      const result = document.getElementById('quizResult');
      result.innerHTML = `<div class="alert alert-${score === 7 ? 'success' : 'warning'}">
        Obtuviste ${score}/7 respuestas correctas. ${score === 7 ? '¡Bien hecho!' : 'Revisa los consejos anteriores para mejorar tu seguridad.'}
      </div>`;
    }
