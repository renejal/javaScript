        var y=0;          
        var x=0;
        var controlY=1; 
        var controlX=1; 
        var velocidad=1;
        //var x
        var posx =0;
        var contro2X=50;
        var velocidadX=1;
 
        
        function play(){
            var intervalo=setInterval("mover()",6);
            var intervalox=setInterval("moverx()",6);
            var intervaloy=setInterval("movery()",6);
        }
        
 
        
        function movery(){
           
            if(controlY==1){
                y+=velocidad;
            }else{        
                y-=velocidad;
            }
            if(y<=0){
                controlY=1;
                y=0;
            }else if(y>=document.getElementById("lienzo").offsetHeight-50){

                                controlY=0;
                y=document.getElementById("lienzo").offsetHeight-50;
            }
 
          
            document.getElementById("imagen3").style.top=String(y)+"px";
        }
         function mover(){
           
            if(controlY==1){
                y+=velocidad;
            }else{        
                y-=velocidad;
            }
            if(y<=0){
                controlY=1;
                y=0;
            }else if(y>=document.getElementById("lienzo").offsetHeight-50){

 
                                controlY=0;
                y=document.getElementById("lienzo").offsetHeight-50;
            }
 
           
            if(controlX==1){
                x+=velocidad;
            }else{        
                x-=velocidad;
            }
            if(x<=0){
                controlX=1;
                x=0;
            }else if(x>=document.getElementById("lienzo").offsetWidth-50){
                controlX=0;
                x=document.getElementById("lienzo").offsetWidth-50;
            }
            document.getElementById("imagen").style.left=String(x)+"px";
            document.getElementById("imagen").style.top=String(y)+"px";
        }
        
        function moverx(){
           
            if(contro2X==1){
                posx+=velocidadX;
            }else{        
                posx-=velocidadX;
            }
            if(posx<=0){
                contro2X=1;
                posx=0;
            }else if(posx>=document.getElementById("lienzo").offsetWidth-50){
                contro2X=0;
                posx=document.getElementById("lienzo").offsetWidth-50;
            }
            document.getElementById("imagen2").style.left=String(x)+"px";
          
        }
    
        
       