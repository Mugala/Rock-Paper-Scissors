    function Name(name) {
        this.name=name;
    }
    
    Name.prototype.player1=function(){
        return this.name + " " 
    }

    Name.prototype.player2=function(){
      return this.name + " " 
  }
         
    
    
    $(document).ready(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);

    console.log(newName)
    
    $("#f-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player1   () + " The gladiator");
      });
  
      $("#s-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player1   () + "The white walker");
      });
  
  
      $("#t-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
          alert("Welcome!!! " + newName.player1   () + "The dark knight");
        });
        
      
  
      $("#p-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player1   () + "The pirate");
      }); 


      $("#f-option2").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player2   () + " The gladiator");
      });
  
      $("#s-option2").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player2   () + "The white walker");
      });
  
  
      $("#t-option2").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
          alert("Welcome!!! " + newName.player2   () + "The dark knight");
        });
        
      
  
      $("#p-option2").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("Welcome!!! " + newName.player2   () + "The pirate");
      }); 
    
    
      });


    