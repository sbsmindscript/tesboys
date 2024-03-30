class isValid{
    constructor(){  
        
      jQuery('.onlycharallow').attr('onkeypress','return obj.validateChar(event)'); 
      jQuery('.onlynumallow').attr('onkeypress','return obj.validateNum(event)');
    }
    
    showPopForm(l){  
      jQuery('#'+l).removeClass('hidden');
      jQuery('html, body').css({
          overflow: 'hidden',
          height: '100%'
      });
    }
  
    closePopForm(l){
      jQuery('#'+l).addClass('hidden');
      jQuery('html, body').css({
          overflow: 'auto',
          height: 'auto'
      });
    }
  
    validateChar(evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode;       
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode >= 123)) {
          if (charCode == 8 || charCode == 32 || charCode == 9)
              return true;
          else
              return false;
      } else
          return true;
    }
  
    validateNum(evt) {
      var charCode = (evt.which) ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          if (charCode == 43 || charCode == 40 || charCode == 41 || charCode == 9)
              return true;
          else
              return false;
      } else
          return true;
    } 
    
    
  } 
  let obj = new isValid(); 
  
  
  
//   $(document).ready(function(){
//     $("#mycontact").submit(function(e){
//         e.preventDefault();
//         var name = $('#your_name').val();
//         var email = $("#your_email").val();
//         var mobile = $("#contact_num").val(); 
//         var product = $("#product :selected").val();              
//         var your_message = $("#your_message").val();         

//         var name_regex = /^[a-zA-Z ]+$/;
//         if (!name.match(name_regex) || name.length == 0) {
//             $('#your_name_err').text("Please enter your name");
//             return false;
//         }else{
//             $("#your_name_err").text("");
//         }

//         // Email validation 
//         var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (!email.match(email_regex) || email.length == 0) {    
//             $('#your_email_err').text("Please enter your email");
//             return false;
//         }else{
//             $('#your_email_err').text("");
//         } 

//         // mobile number validation
//         var mobile_regex = /^[0-9]{8,15}$/;
//         if (!mobile.match(mobile_regex) || mobile.length == 0) {
//             alert(0)
//             $('#your_contact_err').text("Please enter your contact"); 
//             return false;
//         }else{
//             alert(10)
//             $('#your_contact_err').text("");
//         }

//         if( product.length < 1 ){
//             $('#your_product_err').text("Please enter your product"); 
//             return false;
//         }else{
//             $('#your_product_err').text(""); 
//         }
//         console.log( $('#mycontact').serialize() );
//         // ajax submission
//         $.ajax({
//             type: 'GET',
//             url: `http://127.0.0.1:8000/contact-action/`,
//             data: $('#mycontact').serialize(),
//             dataType: 'json',
//             contentType: false,
//             cache: false,
//             processData:false,            
//             beforeSend: function() {                            
//             $("#formSubmit-pop").attr('disabled',true)
//             },
//             complete: function() {
//                 $("#formSubmit-pop").attr('disabled',false)             	
//             },                      
//             success: function (data,status) {                                              
                            
                
//             },
//         error: function(resp){
//             console.log( resp );

//         }

//             });

//         // end ajax 
    


//     });
//   });