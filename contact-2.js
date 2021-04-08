$(function () {
  
      $('#contact-form').validator();
  
      $('#contact-form2').on('submit', function (e) {
          if (!e.isDefaultPrevented()) {
              var url = "contact-2.php";
  
              $.ajax({
                  type: "POST",
                  url: url,
                  data: $(this).serialize(),
                  success: function (data)
                  {
                      var messageAlert = 'alert-' + data.type;
                      var messageText = data.message;
  
                      var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                      if (messageAlert && messageText) {
                          $('#contact-form2').find('.messages').html(alertBox);
                          $('#contact-form2')[0].reset();
                          grecaptcha.reset();
                      }
                  }
              });
              return false;
          }
      })
  });