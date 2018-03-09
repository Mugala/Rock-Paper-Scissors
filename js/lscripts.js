    function Name(name) {
        this.name=name;
    }
    
    Name.prototype.player1=function(){
        return this.name + " " 
    }
         
    
    
    $(document).ready(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);

    console.log(newName)
    
    $(".Glad").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("WELCOME!!! " + newName.player1   () + " THE GLADIATOR");
      });
  
      $("#s-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("WELCOME!!!" + newName.player1   () + "THE WHITE WALKER");
      });
  
  
      $("#t-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
          alert("WELCOME!!!" + newName.player1   () + "THE DARK KNIGHT");
        });
        
      
  
      $("#p-option").click(function() {
        var inputtedName = $("input#new-first-name").val();
        var newName = new Name (inputtedName);
        alert("WELCOME!!!" + newName.player1   () + "THE PIRATE");
      }); 
    
    
      });


    