$(".slider").each(function () {
    let $this = $(this);
    let $group = $this.find(".slide_group");
    let $slides = $this.find(".slide");
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;

    function move(newIndex) {
      let animateLeft, slideLeft;

      advance();

      if ($group.is(":animated") || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].removeClass("active");
      bulletArray[newIndex].addClass("active");

      if (newIndex > currentIndex) {
        slideLeft = "100%";
        animateLeft = "-100%";
      } else {
        slideLeft = "-100%";
        animateLeft = "100%";
      }

      $slides.eq(newIndex).css({
        display: "block",
        left: slideLeft,
      });
      $group.animate(
        {
          left: animateLeft,
        },
        function () {
          $slides.eq(currentIndex).css({
            display: "none",
          });
          $slides.eq(newIndex).css({
            left: 0,
          });
          $group.css({
            left: 0,
          });
          currentIndex = newIndex;
        }
      );
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $(".next_btn").on("click", function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    $(".previous_btn").on("click", function () {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });

    $.each($slides, function (index) {
      let $button = $('<a class="slide_btn"></a>');

      if (index === currentIndex) {
        $button.addClass("active");
      }
      $button
        .on("click", function () {
          move(index);
        })
        .appendTo(".slide_buttons");
      bulletArray.push($button);
    });

//     // ... Tu código existente

  let startX, endX;
  let minSwipeDistance = 50; // Puedes ajustar esto según tus necesidades

  $group.on("touchstart", function (e) {
    startX = e.originalEvent.touches[0].pageX;
  });

  $group.on("touchmove", function (e) {
    endX = e.originalEvent.touches[0].pageX;
    let distance = startX - endX;

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        // Deslizar hacia la izquierda
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      } else {
        // Deslizar hacia la derecha
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move($slides.length - 1);
        }
      }
    }
  });

  // ... Tu código existente
});



$(".slider2").each(function () {
  let $this = $(this);
  let $group = $this.find(".slide_group2");
  let $slides = $this.find(".slide2");
  let bulletArray = [];
  let currentIndex = 0;
  let timeout;

  function move2(newIndex) {
    let animateLeft, slideLeft;

    advance2();

    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass("active");
    bulletArray[newIndex].addClass("active");

    if (newIndex > currentIndex) {
      slideLeft = "100%";
      animateLeft = "-100%";
    } else {
      slideLeft = "-100%";
      animateLeft = "100%";
    }

    $slides.eq(newIndex).css({
      display: "block",
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: "none",
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      }
    );
  }

  function advance2() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move2(currentIndex + 1);
      } else {
        move2(0);
      }
    }, 4000);
  }

  $(".next_btn2").on("click", function () {
    if (currentIndex < $slides.length - 1) {
      move2(currentIndex + 1);
    } else {
      move2(0);
    }
  });

  $(".previous_btn2").on("click", function () {
    if (currentIndex !== 0) {
      move2(currentIndex - 1);
    } else {
      move2(3);
    }
  });

  $.each($slides, function (index) {
    let $button = $('<a class="slide_btn2"></a>');

    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button
      .on("click", function () {
        move2(index);
      })
      .appendTo(".slide_buttons2");
    bulletArray.push($button);
  });

  //     // ... Tu código existente

  let startX, endX;
  let minSwipeDistance = 50; // Puedes ajustar esto según tus necesidades

  $group.on("touchstart", function (e) {
    startX = e.originalEvent.touches[0].pageX;
  });

  $group.on("touchmove", function (e) {
    endX = e.originalEvent.touches[0].pageX;
    let distance = startX - endX;

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        // Deslizar hacia la izquierda
        if (currentIndex < $slides.length - 1) {
          move2(currentIndex + 1);
        } else {
          move2(0);
        }
      } else {
        // Deslizar hacia la derecha
        if (currentIndex !== 0) {
          move2(currentIndex - 1);
        } else {
          move2($slides.length - 1);
        }
      }
    }
  });

  // ... Tu código existente
});