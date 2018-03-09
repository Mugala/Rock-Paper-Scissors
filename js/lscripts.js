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
    
    
      });


    