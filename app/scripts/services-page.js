    
    $('#boarding').click(function() { 
        $("#grooming,#additional").fadeToggle(400);  
    });

    $('#grooming').click(function() { 
            $("#boarding,#additional").fadeToggle(400);  
        });

    $('#additional').click(function() { 
                $("#grooming,#boarding").fadeToggle(400);  
            });
