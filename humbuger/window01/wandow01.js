$(document).ready(function() {
    var showModalTimes = 0;  

    function shouldShowModal() {
        console.log("Referrer:", document.referrer);  // text
        console.log("6")

        var noShowUrls = [
            "./Culture and Impact.html", 
            "./History and Origins.html",
            "./Preparation and Ingredients.html",
            "./Tasting and Evaluation.html"
        ];
        if (noShowUrls.includes(document.referrer)) {
            $('#pageContent').removeClass('d-none');  
            return false;  
        }
        return true;  
    }

    function showModal() {
        if (!shouldShowModal()) return;

        showModalTimes++; 
        
        if (showModalTimes === 4) {
            $('.modal-body').addClass('d-none');
            $('#modalBodyText2').removeClass('d-none');
        }
        $('#confirmationModal').modal('show'); 
    }

    showModal(); 

    $('#YES').on('click', function() {
        $('#confirmationModal').modal('hide');  
        $('#pageContent').removeClass('d-none');  
    });

    $('#NO').on('click', function() {
        $('#confirmationModal').modal('hide');  
        setTimeout(function() { 
            if (showModalTimes < 4) {
                showModal();  // If the display count is less than 4 times, re-display the modal dialog.
            } else {
                showModal();  
                window.location.href = './page2.html';  
            }
        }, 500);  
    });
});
$(document).ready(function() {
    // 当点击导航项时
    $('.navbar-nav .nav-item .nav-link').on('click', function() {
        // 移除先前项的激活状态
        $('.navbar-nav .nav-item .nav-link').removeClass('active-nav-link');
        // 为当前点击的项添加激活状态
        $(this).addClass('active-nav-link');
    });
});



