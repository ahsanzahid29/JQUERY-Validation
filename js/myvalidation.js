$(document).ready(function(){
    $.validator.addMethod("StrongPassword",function(value){
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value)
    },"Password must contain UpperCase, LowerCase and Number");
    $("#myForm").validate({
      rules:{
        fname:{
          required:true,
          minlength:5
        },
        femail:{
          required:true,
          email:true
        },
        fpassword:{
          required:true,
          minlength:8,
          StrongPassword:true

        },
        fconfirmpassword:{
          required:true,
          equalTo:'#userpassword'

        },
        fprofession:{
          required:true
        },
        "fgender[]":{
          required:true
        },
        "flanguage[]":{
          required:true
        }

      },
      highlight:function(element){
        $(element).addClass("test");

      },
      unhighlight:function(element){
        $(element).removeClass("test");

      },
      messages:{
        fname:{
          required:'First Name is required',
          minlength:'Minimum length is 5'
        },
        femail:{
          required:'Email field is required',
          email:'Enter valid email'

        },
        fpassword:{
          required:'Enter Password',
          minlength:'Password must be of 8 characters'

        },
        fconfirmpassword:{
          required:'Please confirm your Password',
          equalTo:'Password mismatch'
        },
        fprofession:{
          required:'Please Select Profession'
        },
        "fgender[]":{
          required:'Please select gender'
        },
        "flanguage[]":{
          required:'Please select atleast one language'

        }

      }
      

    });
    
  })