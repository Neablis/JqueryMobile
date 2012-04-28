
var questionCount = 0;

var Survey = {
    
    //Adds a question to the preview form with no elements
    addQuestion:function(obj, type){
    
      var text = 'default';
      switch(type){
        case "radio":
          text = document.getElementById("radioQuestionText").value;
          break;
        case "text":
          text = document.getElementById("textQuestionText").value;
          break;
          
      }
      
      
      Survey.emptyPreview('preview');
      var questions = document.getElementById('preview');
          
      var form = document.createElement('form');
      form.appendChild(document.createTextNode(text));
      form.setAttribute('id','previewForm');
      form.appendChild(document.createElement('br'));
      questions.appendChild(form);
    },
  
    //If there is a question, adds a element to it
    addValue:function(obj, type){
      
      
      var cell = document.getElementById("preview");
      
      if( type == "space" ){
      
            if(document.getElementById("previewForm") != null)
                {
                  var form = document.getElementById('previewForm');
                  form.appendChild(document.createElement('br'));
                }
                else
                {
                
                      
                  var form = document.createElement('form');
                  form.setAttribute('id','previewForm');
                  form.appendChild(document.createElement('br'));
                  cell.appendChild(form);
                }
      }
      

        if ( cell.hasChildNodes() )
        {
        
          switch(type){
          
            case "radio":
              var text = document.getElementById("radioText").value;
              var form = document.getElementById('previewForm');
              
              try{
                rdo = document.createElement('<input type="radio" name="fldID" />');  
              }catch(err){
                rdo = document.createElement('input'); 
              }
              
              rdo.setAttribute('type','radio'); 
              
              rdo.setAttribute('name','fldID');
              rdo.setAttribute('value',document.getElementById("radioValue").value);
              
              form.appendChild(rdo);
              
              form.appendChild(document.createTextNode('  ' + text));
              form.appendChild(document.createElement('br'));
              break;
            case "text":
              var text = document.getElementById("textText").value;
              var form = document.getElementById('previewForm');
              
              try{
                rdo = document.createElement('<input type="text" name="fldID" />');  
              }catch(err){
                rdo = document.createElement('input'); 
              }
              
              rdo.setAttribute('type','text');              
              rdo.setAttribute('name','fldID');
              
              form.appendChild(rdo);
              
              form.appendChild(document.createTextNode('  ' + text));
              form.appendChild(document.createElement('br'));
              
              break;
           
            case "default":
            
              break;
            
            }
        }
      
    },

    //removes all elements from the preview form
    emptyPreview:function(id){
      var cell = document.getElementById(id);

      
      if(id == "previewForm"){
      
        first = cell.firstChild;
        if ( cell.hasChildNodes() )
        {
          
          while ( cell.childNodes.length >= 1 )
          {
            cell.removeChild( cell.firstChild );       
          } 
        }
        cell.appendChild(first);
      
      }else{
      
        if ( cell.hasChildNodes() )
        {
          while ( cell.childNodes.length >= 1 )
          {
            cell.removeChild( cell.firstChild );       
          } 
        }
      }      
    },
    
    //Adds the preview to the survey
    addPreview:function(){
      
      questionCount++;
    
      var form = document.getElementById('previewForm');
      var questions = document.getElementById('surveyElements');
      form.setAttribute('id', questionCount);
      form.style.padding = "0px 0px 0px 10px";      
      questions.appendChild(form);

      questions.appendChild(form);
    
    }
    
    
  
};