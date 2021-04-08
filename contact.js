if ($(window).width() < 600) {
    document.getElementById("drpp").classList.remove("drps");
}

// spotless coding

const counters = document.querySelectorAll('.counter');
const speed = 30; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = parseInt(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

const countersthou = document.querySelectorAll('.counterthous');
const speedthou = 9999; // The lower the slower

countersthou.forEach(counterthous => {
    const updateCount = () => {
        const target = +counterthous.getAttribute('data-target');
        const count = +counterthous.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speedthou;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counterthous.innerText = parseInt(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counterthous.innerText = target;
        }
    };

    updateCount();
});
const countersfi = document.querySelectorAll('.counterfive');
const speedfi = 1.5; // The lower the slower

countersfi.forEach(counterfive => {
    const updateCount = () => {
        const target = +counterfive.getAttribute('data-target');
        const count = +counterfive.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speedfi;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counterfive.innerText = parseInt(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counterfive.innerText = target;
        }
    };

    updateCount();
});


$(function () {
    
        $('#contact-form').validator();
    
        $('#contact-form').on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                var url = "contact.php";
    
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
                            $('#contact-form').find('.messages').html(alertBox);
                            $('#contact-form')[0].reset();
                            grecaptcha.reset();
                        }
                    }
                });
                return false;
            }
        })
    });


    