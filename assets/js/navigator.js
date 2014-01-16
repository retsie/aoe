$(function(){
       $("#menuBtn").click(function(){
           $("#menu").slideDown(); 
           $("#overlay").show();         
     });
      $("#addSubject").click(function(){
           $("#subjectMenu").slideDown(); 
           $("#overlay").show();         
     });
     
     $("#close").click(function(){
          $("#subjectMenu").slideUp(); 
          $("#overlay").hide();       
     });
     
     $("#AddSub").click(function(){
          alert("Successfully added");
          $("#subjectMenu").slideUp();  
          $("#overlay").hide();  
     });
     
      $("#setCourse").click(function(){
           $("#courseMenu").slideDown(); 
           $("#overlay").show();         
     });
     
      $("#close1").click(function(){
          $("#courseMenu").slideUp();
          $("#overlay").hide();        
     });
     
     $("#setCor").click(function(){
          alert("Successfully added");
     });
     
     $("#edit").click(function(){
           $("#editMenu").slideDown(); 
           $("#overlay").show();         
     });
     $("#close2").click(function(){
          $("#editMenu").slideUp();
          $("#overlay").hide();        
     });
      $("#editCor").click(function(){
          alert("Successfully Edit Course!");
          $("#editMenu").slideUp();
          $("#overlay").hide();
     });

      $("#done").click(function(){
        $("#courseMenu").hide();
        $("#choiceCourse").slideDown();    
     });

      $("#done1").click(function(){
        $("#choiceCourse").slideUp();
        $("#overlay").hide()
        alert("Successfully Select Subject");    
     });

       $("#delete").click(function(){
           $("#delConfirm").show();
          $("#overlay").show() 
     });
       $("#yes").click(function(){
        alert("Successfully delete");
           $("#delConfirm").hide();
          $("#overlay").hide() 
     });
      $("#no").click(function(){
           $("#delConfirm").hide();
          $("#overlay").hide() 
     });
     $("#editBtnQuestion").click(function(){
        alert("Successfully edit");
           $("#editQuestion").hide();
          $("#overlay").hide(); 
     }); 
     $("#closeBtnQuestion").click(function(){
           $("#editQuestion").hide();
          $("#overlay").hide(); 
     });   

       $("#addQuest").click(function(){
          $("#AddQuestion").slideDown();
          $("#overlay").show();
       });
       $("#addQuestBtn").click(function(){
          alert("Successfully Added");
          $("#AddQuestion").slideUp();
          $("#overlay").hide();
       });
       $("#close3").click(function(){
          $("#AddQuestion").slideUp();
          $("#overlay").hide();
       });

       $("#edit1").click(function(){
          $("#editQuestion").fadeIn('slow');
          $("#overlay").show(); 
       });
});


