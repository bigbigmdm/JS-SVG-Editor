const txtStart = `<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" lang="ru">
</head>
<body>
<svg id ="svg_root" width="600" height="400" viewBox="0 0 600 400" version="1.1" xmlns="http://www.w3.org/2000/svg">
<style>
.sall{stroke:#000;fill:#fff;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.snof{stroke:#000;fill:none;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
.sgnd{stroke:#000;fill:#fff;stroke-width:8;stroke-linejoin:round;stroke-linecap:round;}
</style>
<defs>
<g id="rx">
<path d="M0,0v-10h60v20h-60v-10" stroke="#000" fill="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ry">
<path d="M0,0h10v60h-20v-60h10" stroke="#000" fill="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="lx">
<path d="M0,0a12,12 0 0,1 30,0 a12,12 0 0,1 30,0 a12,12 0 0,1 30,00" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ly">
<path class="sall" d="M0,0a12,12 0 1,1 0,30 a12,12 0 0,1 0,30 a12,12 0 0,1 0,30"/>
</g>
<g id="sta">
<circle r="4" style="stroke: none; fill:#000;"/>
</g>
<g id="cey">
<path d="M0,0h-18h36m0,10h-36h18m-15,-18v-8m-4,4h8" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="cy">
<path d="M0,0h-18h36m0,10h-36h18" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="cx">
<path d="M0,0v-18v36m10,0v-36v18" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vdx">
<path d="M0,0v-10v20v-10l20,-10v20l-20-10v-10" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vd-x">
<path d="M0,0v-10l20 10v-10v20v-10l-20 10v-10" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vdy">
<path d="M0,0h-12h12l-12  20h24l-12 -20 h12m-12 -10v40" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vd-y">
<path d="M0,0h12h-12l12 -20h-24l12 20 h-12m12 10v-40" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="zenery">
<path d="M0,0h-12h12l-12  20h24l-12 -20 h12v5v-5m-12 -10v40" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ledy">
<path d="M0,0h12h-12l12 -20h-24l12 20 h-12m12 10v-40 m18 20l12-12l-6 3l3 3l2 -5m-11 -2l12-12l-6 3l3 3l2 -5" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="po">
<circle r="6" style="stroke: none; fill:#000;"/>
</g>
<g id="gno">
<path d="M0,0h-18h36h-4l-10,10m0-10l-10,10m0-10l-10,10" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="gnd">
<path d="M0,0h-18h36h" stroke="#000" fill="none" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="shoy">
<path d="h-12v5v-5h12l-12  20h24l-12 -20 h12v-5v5m-12 -10v40" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="mosfet">
<path d="M0,0h25v-24m8 0v-12v6h27v-14m0 32h-28v-6v12v-6l16 -4v8l-16 -4h28v18h-28v-6v12v-6h28v34m-16-16a8,8 0 1,1 0,-68a8,8 0 1,1 0,68m16-12a4,4 0 1,1 0,-8a4,4 0 1,1 0,8" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="npn">
<path d="M0,0h36v-24v48m0 -12l24 18v10m-24-52l24 -18v-10m-16 72a8,8 0 1,1 0,-68a8,8 0 1,1 0,68m16 0l-10 -16l-6 8l16 6" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="led-x">
<path d="M0,0v-10l20 10v-10v20v-10l-20 10v-10m13 -16l12-12l-6 3l3 3l2 -5m2 10l12-12l-6 3l3 3l2 -5" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="sho-x">
<path d="M0,0v-10l20 10v-10h6h-6v20h-6h6v-10l-20 10v-10" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="shox">
<path d="M0,0v-10h5h-5v20h-5h5v-10l20,-10v20l-20-10v-1" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="filter">
<path d="M0,0v24a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0v-24m0 36h-40m40 8h-40m0 12a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0v24m-40-24v24" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
</defs>
<!---------------------------------->
`;
   const txtEnd = `
   <!---------------------------------->
   </svg>
   </body>
   </html>`;
   const saveToFile = async (str) => {
    const blob = new Blob([str], {type: 'text/plain'});
    const fh = await window.showSaveFilePicker();
    const ws = await fh.createWritable();
    await ws.write(blob);
    await ws.close();
}
   var txtout = [''];
   var drvid = 0;
   var drvedit = 0;
   var txtid = '';
   var start = 0;
   var par_str = "";
   var out_str = "";
   var x = 0; x0 = 0; x1 = 0;
   var y = 0; y0 = 0; y1 = 0;
   var prSvg = "";
   function unEntity(str)
   {
   return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
   }
   function fncSave()
   {
    var txtfile = txtStart + unEntity(document.getElementById("preload").innerHTML) + txtEnd;
    saveToFile (txtfile);
    //alert("Сохранено");
   }
   
   function fnUndo()
   {
    var txtbuf="";
    if (drvid >=0)
    {     
     txtid = "drv" + drvid;
     if (document.getElementById(txtid)==null) drvid--;
    txtid = "drv" + drvid; 
     document.getElementById(txtid).remove();
     var newLength = txtout.pop(par_str);
     document.getElementById("preload").innerHTML = "";
     for (i=0;i<=drvid;i++)
     {
     document.getElementById("preload").innerHTML = document.getElementById("preload").innerHTML + txtout[i];
     }
     drvedit = drvid;
    }
   }
//**************************
   function fnLeft()
   {
    var txtbuf="";
    if (drvedit >=0)
    { 
     drvedit--;
     txtid = "drv" + drvedit; 
     document.getElementById(txtid).style.stroke = "#f0f";
     txtid = "drv" + (drvedit+1);
     if (document.getElementById(txtid)!=null) document.getElementById(txtid).style.stroke = "#000";
    }
    else drvedit = drvid;
   }
   
   function fnRight()
   {
    var txtbuf="";
    if (drvedit < drvid)
    { 
     drvedit++;
     txtid = "drv" + drvedit;
     document.getElementById(txtid).style.stroke = "#f0f";
     txtid = "drv" + (drvedit-1);
     if (document.getElementById(txtid)!=null) document.getElementById(txtid).style.stroke = "#000";     
    }
    else drvedit = drvid;
   }
   
   function fnDelete()
   {
    var txtbuf="";
    if (drvedit >=0)
    {
     txtid = "drv" + drvedit;
     if (document.getElementById(txtid)==null) drvedit--;
    txtid = "drv" + drvedit; 
     document.getElementById(txtid).remove();
     var newLength = txtout.splice(drvedit+1,1);
     document.getElementById("preload").innerHTML = "";

      
     drvid--;
     for (i=0;i<=drvid;i++)
     {
     document.getElementById("preload").innerHTML = document.getElementById("preload").innerHTML + txtout[i];
     }
          for(i=drvedit;i<=drvid;i++)
          {      
            txtid = "drv" + (i + 1);
            document.getElementById(txtid).id = "drv" + i;
          }
    }
   }
 //*************************  
   function drawLine()
   {
   if (document.getElementById("demo1").checked)   
    {
    if (start == 0)
    {
      x0 = x;
      y0 = y;
      start = 1;
      document.getElementById('setmod').style.color="red"; 
    }
     else
     {
      x1 = x;
      y1 = y;
      start = 0;
      if (document.getElementById("demo2").checked)
      {
       par_str = 'M'+x0+' '+y0+'L'+x1+' '+y1;
       out_str = '<polyline class="sall" points="'+ x0 + ',' + y0 + ',' + x1 + ',' + y1 + '" />\n';
      }
      else
      {
       var t = 0;
       if (x1 < x0)
       {
        t = x1;
        x1 = x0;
        x0 = t;
       }
       if (y1 < y0)
       {
        t = y1;
        y1 = y0;
        y0 = t;
       }       
      par_str = 'M'+x0+' '+y0+'L'+x0+' '+y1+'L'+x1+' '+y1+'L'+x1+' '+y0+'L'+x0+' '+y0;
      out_str = '<rect class="sall" x="'+ x0 + '" y="' + y0 + '" width="' + (x1-x0) + '" height="' + (y1-y0) + '" />\n';
      }
      document.getElementById('setmod').style.color="green"; 
//drawing
      var svg = document.getElementsByTagName('svg')[0]; //Get svg element
      var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
      txtid = "drv"+drvid;
      newElement.setAttribute("d", par_str); //Set path's data
      newElement.id = txtid;
      drvid++;
      drvedit = drvid;
      newElement.style.stroke = "#000"; //Set stroke colour
      newElement.style.fill = "none"; //Set stroke colour
      newElement.style.strokeWidth = "4px"; //Set stroke width
      svg.appendChild(newElement);
      var newLength = txtout.push(out_str);
      document.getElementById("preload").innerHTML = document.getElementById("preload").innerHTML + out_str;
     }
          
    }
    else
      {
        par_str = '';
        out_str = '';
       if (document.getElementById("radio-1").checked)
       {
          par_str = 'M'+x+' '+y+'v-10h60v20h-60v-10';
          out_str = '<use xlink:href="#rx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-2").checked)
       {
          par_str = 'M'+x+' '+y+'h10v60h-20v-60h10';
          out_str = '<use xlink:href="#ry" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-3").checked)
       {
          par_str = 'M'+x+' '+y+'v-18v36m10,0v-36v18';
          out_str = '<use xlink:href="#cx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-4").checked)
       {
          par_str = 'M'+x+' '+y+'h-18h36m0,10h-36h18';
          out_str = '<use xlink:href="#cy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-5").checked)
       {
          par_str = 'M'+x+' '+y+'h-18h36h-4l-10,10m0-10l-10,10m0-10l-10,10';
          out_str = '<use xlink:href="#gno" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-6").checked)
       {
          par_str = 'M'+x+' '+y+'v-10v20v-10l20,-10v20l-20-10v-10';
          out_str = '<use xlink:href="#vdx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-7").checked)
       {
          par_str = 'M'+x+' '+y+'v-10l20 10v-10v20v-10l-20 10v-10';
          out_str = '<use xlink:href="#vd-x" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-8").checked)
       {
          par_str = 'M'+x+' '+y+'h-12h12l-12  20h24l-12 -20 h12m-12 -10v40';
          out_str = '<use xlink:href="#vdy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-9").checked)
       {
          par_str = 'M'+x+' '+y+'h12h-12l12 -20h-24l12 20 h-12m12 10v-40';
          out_str = '<use xlink:href="#vd-y" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-10").checked)
       {
          par_str = 'M'+x+' '+y+'m-3,0a3,3 0 1,0 6,0a 3,3 0 1,0 -6,0';
          out_str = '<use xlink:href="#po" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-11").checked)
       {
          par_str = 'M'+x+' '+y+'a12,12 0 0,1 30,0 a12,12 0 0,1 30,0 a12,12 0 0,1 30,0';
          out_str = '<use xlink:href="#lx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-12").checked)
       {
          par_str = 'M'+x+' '+y+'a12,12 0 1,1 0,30 a12,12 0 0,1 0,30 a12,12 0 0,1 0,30';
          out_str = '<use xlink:href="#ly" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-13").checked)
       {
          par_str = 'M'+x+' '+y+'h-12h12l-12  20h24l-12 -20 h12v5v-5m-12 -10v40';
          out_str = '<use xlink:href="#zenery" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-14").checked)
       {
          par_str = 'M'+x+' '+y+'v-10h5h-5v20h-5h5v-10l20,-10v20l-20-10v-10';
          out_str = '<use xlink:href="#shox" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-15").checked)
       {
          par_str = 'M'+x+' '+y+'h-18h36h';
          out_str = '<use xlink:href="#gnd" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-16").checked)
       {
          par_str = 'M'+x+' '+y+'h-12v5v-5h12l-12  20h24l-12 -20 h12v-5v5m-12 -10v40';
          out_str = '<use xlink:href="#shoy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-17").checked)
       {
          par_str = 'M'+x+' '+y+'h25v-24m8 0v-12v6h27v-14m0 32h-28v-6v12v-6l16 -4v8l-16 -4h28v18h-28v-6v12v-6h28v34m-16-16a8,8 0 1,1 0,-68a8,8 0 1,1 0,68m16-12a4,4 0 1,1 0,-8a4,4 0 1,1 0,8';
          out_str = '<use xlink:href="#mosfet" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-18").checked)
       {
          par_str = 'M'+x+' '+y+'v-10l20 10v-10v20v-10l-20 10v-10m13 -16l12-12l-6 3l3 3l2 -5m2 10l12-12l-6 3l3 3l2 -5';
          out_str = '<use xlink:href="#led-x" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-19").checked)
       {
          par_str = 'M'+x+' '+y+'h-18h36m0,10h-36h18m-15,-18v-8m-4,4h8';
          out_str = '<use xlink:href="#cey" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-20").checked)
       {
          par_str = 'M'+x+' '+y+'v-10l20 10v-10h6h-6v20h-6h6v-10l-20 10v-10';
          out_str = '<use xlink:href="#sho-x" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-21").checked)
       {
          par_str = 'M'+x+' '+y+'h12h-12l12 -20h-24l12 20 h-12m12 10v-40 m18 20l12-12l-6 3l3 3l2 -5m-11 -2l12-12l-6 3l3 3l2 -5';
          out_str = '<use xlink:href="#ledy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-23").checked)
       {
          par_str = 'M'+x+' '+y+'v24a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0v-24m0 36h-40m40 8h-40m0 12a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0v24m-40-24v24';
          out_str = '<use xlink:href="#filter" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-24").checked)
       {          
          par_str = 'M'+x+' '+y+'h36v-24v48m0 -12l24 18v10m-24-52l24 -18v-10m-16 72a8,8 0 1,1 0,-68a8,8 0 1,1 0,68m16 0l-10 -16l-6 8l16 6';
          out_str = '<use xlink:href="#npn" x="' + x + '" y="' + y + '"/>\n';
       }       
       if (document.getElementById("radio-22").checked)
       {
          var txsvg = document.getElementById("svgtxt").value;
          par_str = 'M'+x+' '+y+'h8h-16h8l8,-12h-16l8 12 m12 -12l12 -12l-6 3l3 3l2-5m-11 20l12-12l-6 3l3 3l2 -5';
          x = x - 6;
          y = y + 5;
          out_str = '<text font-size="20px" x="' + x + '" y="' + y + '">' + txsvg + '</text>\n';
          var svg = document.getElementsByTagName('svg')[0];
         var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'text'); //Create a path in SVG's namespace
          
          newElement.setAttribute('x', x);
          newElement.setAttribute('y', y);
          newElement.setAttribute('font-size', '20px');
          //newElement.setAttribute('fill', '#000');
          newElement.textContent = txsvg;
          svg.appendChild(newElement);
          txtid = "drv"+ drvid;
          newElement.id = txtid;
         
       }
       
          txtid = "drv"+ drvid;
          drvid++;
          drvedit = drvid;
          
          if (!(document.getElementById("radio-22").checked))
          {
          var svg = document.getElementsByTagName('svg')[0]; //Get svg element
          var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
          newElement.setAttribute("d", par_str); //Set path's data
          newElement.id = txtid;
          newElement.style.stroke = "#000"; //Set stroke colour
          newElement.style.strokeWidth = "4px"; //Set stroke width
          newElement.style.fill = "#fff";
          newElement.style.strokeLinejoin = "round";
          newElement.style.strokeLinecap = "round";
          svg.appendChild(newElement);
          }
          
          //text
          document.getElementById("preload").innerHTML = document.getElementById("preload").innerHTML + out_str;
          var newLength = txtout.push(out_str);
      }
      
   }
   
   function execPr()
   {
   prSvg = document.getElementById("preload").value;
   alert (prSvg);
var svg = document.getElementsByTagName('svg')[0]; //Get svg element
var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
newElement.setAttribute("d","M 0 0 L 50 50"); //Set path's data
svg.appendChild(newElement);
   
   
   }
   function mouseCoords(e) {
    x = parseInt((e.pageX+5)/10)*10; // Координата X курсора
    y = parseInt((e.pageY+5)/10)*10; // Координата Y курсора
    document.getElementById("coords").innerHTML = " X : " + x + ", Y : " + y;
   }