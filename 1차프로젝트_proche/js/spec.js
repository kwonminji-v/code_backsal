
    $('.click-modal').click(function () {
      $('.container').addClass('modal-open');
      $('html').css("overflow","hidden");
      // $('.modal-container').addClass('.close');
    });
    $('.close-modal').click(function () {
      $('.container').removeClass('modal-open');
      $('html').css("overflow","scroll");
      // $('.modal-container').removeClass('.close');
    });



    $(document).ready(function () {
      $(".list1").hide();
      $("#Power_unit").click(function () {
        $(".list1").slideToggle(500);
      });
      $(".list2").hide();
      $("#performance").click(function () {
        $(".list2").slideToggle(500);
      });
      $(".list3").hide();
      $("#body").click(function () {
        $(".list3").slideToggle(500);
      });
      $(".list4").hide();
      $("#capacities").click(function () {
        $(".list4").slideToggle(500);
      });
      $(".list5").hide();
      $("#price").click(function () {
        $(".list5").slideToggle(500);
      });
    });
