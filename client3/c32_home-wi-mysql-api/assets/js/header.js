
        // function setCookie(cname, cvalue, exdays) {
        //     var d = new Date();
        //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        //     var expires = "expires="+d.toUTCString();
        //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        // }

        // setCookie("MemberID", 1, 30);

        //document.cookie = "MemberID = 90";

        //let c = 1;
        // let c = document.cookie.substr(14,2);

        //document.cookie = "aLoginCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        //debugger
        var c = document.cookie;
        var n = c.indexOf("=")
        if (n > 0) {
            var id = c.substring(n+1)   
        }
        else {
            var id = 0
        }
        //let id = (n>0) ? c.substring(n+1) : 0;
        console.log('{1}UserID = "' + id + '"')


        var nLoginCount = c
        //var nLoginCount = 0

        if (id > 0)  
        {  
            //alert("id = " + id )
            let aLogIn = "RS";
            //let aLogIn = "<a href='#' title='Welcome' style='text-decoration:none;'>RS</a>";
            var pSpan = $("#log") 
            document.getElementById("log").innerHTML = aLogIn;
            $("#ContactAll").css("display", "block");
            $("#ContactLink").css("display", "block");
            $("#ContactDrop").css("display", "block");
            pSpan.css("text-decoration", "none");
            pSpan.css("color", "white");
            pSpan.css("padding", "4px");
            pSpan.css("background-color", "blue");
            pSpan.css("font-size", "18px");
            pSpan.css("font-weight", "500");
            pSpan.css("font-family", "monospace");
            pSpan.css("text-align", "center");
            pSpan.css("border-radius", "50%");
            pSpan.css("border", "solid #5A5A5A 3px");
            // pSpan.css("display", "block");
        } 
        else if (id == 0)  
        {
            let aLogIn = "Log In";
            //let aLogIn = "<a class="login" href='../login/login.html'>Log In</a>";            
            var pSpan = $("#log") 
            pSpan.css("text-decoration", "none");
            document.getElementById("log").innerHTML = aLogIn;
            $("#ContactAll").css("display", "none");
            $("#ContactLink").css("display", "none");
            $("#ContactDrop").css("display", "none");
            pSpan.css("color", "white");
            pSpan.css("padding", "5px");
            pSpan.css("width", "60px");
            pSpan.css("background-color", "blue");
            pSpan.css("font-size", "15px");
            pSpan.css("font-weight", "600");
            pSpan.css("font-family", "arial");
            pSpan.css("text-align", "center");
            pSpan.css("border-radius", "8px");
            pSpan.css("border", "solid #5A5A5A 0px");
            pSpan.css("display", "flex");
        }
        else
        {
            $("#log").css("display", "none");
        }
    
        



        function myFunction(x) 
        {
            if (x.matches) {        // If media query matches
                $("#log").css("display", "none");
                // document.body.style.backgroundColor = "yellow";
            }
            else 
            {
                $("#log").css("display", "flex");
                // document.body.style.backgroundColor = "pink";
            }
        }

        var x = window.matchMedia("(max-width: 500px)")
            myFunction(x)               // Call listener function at run time
            x.addListener(myFunction)   // Attach listener function on state changes

