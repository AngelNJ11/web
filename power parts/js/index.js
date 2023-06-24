var meses=new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");
function hora() {
    var f = new Date();
    var segundos = f.getSeconds().toString().padStart(2, '0'); // Agregar cero inicial si es necesario
    document.querySelector("#hora").innerText = "Hora ☀ : " + f.getHours() + ":" + f.getMinutes() + ":" + segundos;
    setTimeout(hora, 1000);
  }
  function dia(){
    var f=new Date();
    document.querySelector("#fecha").innerText= "Fecha ☪ : "+f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear();
}
    function calendario(){
        var f=new Date();
        var dia=f.getDate();
        var mes=meses[f.getMonth()];
        var year=f.getFullYear();
        var ndias=(new Date(f.getFullYear(), f.getMonth()+1, 0).getDate());
        var dsemana=(new Date(f.getFullYear(), f.getMonth(), 1).getDay());
        var dias=new Array();
        for(let i=0; i<dsemana; i++){dias.push("");}
        for(let i=1; i<=ndias; i++){dias.push(i);}
        var tabla="<table>";
        tabla+="<tr><td colspan=7>"+mes+", "+year+"</td></tr>";
        tabla+="<tr><th>Dom</th><th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th></tr>";
        let i=0;
        dias.forEach(function(d){
            if(i%7==0) tabla+="<tr>";
            i++;
            if(d==dia){
                tabla+="<td style='color:#9fef8b; background-color:#5c646a;border-radius:50%'>"+d+"</td>";
            }else{
                tabla+="<td>"+d+"</td>";
            }
            
            if(i%7==0) tabla+="</tr>";
        });
        
    
        tabla+="</table>";
    
        document.getElementById("aside_cal").innerHTML=tabla;
    
    }
    window.addEventListener("DOMContentLoaded", function() {
        calendario();
        dia();
        hora();
    document.body.setAttribute("onload", "calendario(); dia(); hora();");
  });
  