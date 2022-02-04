const txtStart = `<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" lang="ru">
</head>
<body>
<svg id ="svg_root" width="600" height="400" viewBox="0 0 600 400" version="1.1" xmlns="http://www.w3.org/2000/svg">
<style>
.sall{stroke:#000;fill:#fff;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.snof{stroke:#000;fill:none;stroke-width:2;stroke-linejoin:round;stroke-linecap:round;}
.sgnd{stroke:#000;fill:#fff;stroke-width:4;stroke-linejoin:round;stroke-linecap:round;}
</style>
<defs>
<g id="rx">
<path d="M0,0v-4h20v8h-20v-4" stroke="#000" fill="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ry">
<path d="M0,0h4v20h-8v-20h4" stroke="#000" fill="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="lx">
<path d="M0,0a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ly">
<path class="sall" d="M0,0a4,4 0 1,1 0,10 a4,4 0 0,1 0,10 a4,4 0 0,1 0,10 a4,4 0 0,1 0,10" />
</g>
<g id="sta">
<circle r="4" style="stroke: none; fill:#000;"/>
</g>
<g id="cey">
<path d="M0,0v3h-8h16m0,5h-16h8v3m-8,-12v-6m-3,3h6" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="cy">
<path d="M0,0v3h-8h16m0,5h-16h8v3" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="cx">
<path d="M0,0h3v-8v16m5,0v-16v8h3" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vdx">
<path d="M0,0v-8v16v-8l12,-8v16l-12-8v-8" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vd-x">
<path d="M0,0v-8l12 8v-8v16v-8l-12 8v-8" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vdy">
<path d="M0,0h-8h16h-8l-8,12h16l-8-12" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="vd-y">
<path d="M0,0h8h-16h8l8,-12h-16l8 12" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="ledy">
<path d="M0,0h8h-16h8l8,-12h-16l8 12 m12 -12l12 -12l-6 3l3 3l2-5m-11 20l12-12l-6 3l3 3l2 -5" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="po">
<circle r="3" style="stroke: none; fill:#000;"/>
</g>
<g id="gno">
<path d="M0,0h-8h16h-2l-5,5m0-5l-5,5m0-5l-5,5" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="gnd">
<path d="M0,0h-8h16h" stroke="#000" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="opto">
<path d="M0,0h15v10l15,6v-6v22v-4l-15,6v6h-15 m90,-40h-30v40h30m-73,-7l8,-1l-2-4l-5,5m20 -10l8,-4l-4-4l-5,9l12 -12m0 10l-12 12l8,-4l-4-4l-5,9m24 -10l-8,-11h16l-8 12h-8h16h-8m-5 19h-30a4,4 0 1,1 0,-50h30a4,4 0 1,1 0,50 " stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="mosfet">
<path d="M0,0h12v-12m4 0v-6v3h14v-7m0 16h-14v-3v6v-3l8 -2v4l-8 -2h14v9h-14v-3v6v-3h14v16m-8-8a4,4 0 1,1 0,-34a4,4 0 1,1 0,34m8-6a2,2 0 1,1 0,-4a2,2 0 1,1 0,4" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="npn">
<path d="M0,0h18v-12v24m0 -6l12 9v5m-12-26l12 -9v-5m-8 36a4,4 0 1,1 0,-34a4,4 0 1,1 0,34m8 0l-5 -8l-3 4l8 3" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="transf">
<path d="M0,0v10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10v10m0 40a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10v10m12-10v-130m6 0v130m12-80v-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10v-10" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<use xlink:href="#sta" x="-5" y="15"/>
<use xlink:href="#sta" x="-5" y="135"/>
<use xlink:href="#sta" x="35" y="45"/>
</g>
<g id="tl431">
<path d="M0,0h-8v3v-3h16v3v-3h-8l-8,12h16l-8-12m5 6h15" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="bridge">
<use xlink:href="#vdy" x="28" y="-18"  transform="rotate(45 28 -18)"/>
<use xlink:href="#vdy" x="58" y="12"  transform="rotate(45 58 12)"/>
<use xlink:href="#vdy" x="58" y="-12"  transform="rotate(135 58 -12)"/>
<use xlink:href="#vdy" x="27" y="20"  transform="rotate(135 28 20)"/>
<path d="M0,0h10l30 -30v-10v10l30 30h10h-10l-30 30v10v-10l-30 -30" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</g>
<g id="filter">
<path d="M0,0v24a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0v-24m0 36h-40m40 8h-40m0 12a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0v24m-40-24v24" stroke="#000" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
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
      newElement.style.strokeWidth = "2px"; //Set stroke width
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
          par_str = 'M'+x+' '+y+'v-4h20v8h-20v-4';
          out_str = '<use xlink:href="#rx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-2").checked)
       {
          par_str = 'M'+x+' '+y+'h4v20h-8v-20h4';
          out_str = '<use xlink:href="#ry" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-3").checked)
       {
          par_str = 'M'+x+' '+y+'h3v-8v16m5,0v-16v8h3';
          out_str = '<use xlink:href="#cx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-4").checked)
       {
          par_str = 'M'+x+' '+y+'v3h-8h16m0,5h-16h8v3';
          out_str = '<use xlink:href="#cy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-5").checked)
       {
          par_str = 'M'+x+' '+y+'h-8h16h-2l-5,5m0-5l-5,5m0-5l-5,5';
          out_str = '<use xlink:href="#gno" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-6").checked)
       {
          par_str = 'M'+x+' '+y+'v-8v16v-8l12,-8v16l-12-8v-8';
          out_str = '<use xlink:href="#vdx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-7").checked)
       {
          par_str = 'M'+x+' '+y+'v-8l12 8v-8v16v-8l-12 8v-8';
          out_str = '<use xlink:href="#vd-x" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-8").checked)
       {
          par_str = 'M'+x+' '+y+'h-8h16h-8l-8,12h16l-8-12';
          out_str = '<use xlink:href="#vdy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-9").checked)
       {
          par_str = 'M'+x+' '+y+'h8h-16h8l8,-12h-16l8 12';
          out_str = '<use xlink:href="#vd-y" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-10").checked)
       {
          par_str = 'M'+x+' '+y+'m-1.5,0a1.5,1.5 0 1,0 3,0a 1.5,1.5 0 1,0 -3,0';
          out_str = '<use xlink:href="#po" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-11").checked)
       {
          par_str = 'M'+x+' '+y+'a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0';
          out_str = '<use xlink:href="#lx" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-12").checked)
       {
          par_str = 'M'+x+' '+y+'a4,4 0 1,1 0,10 a4,4 0 0,1 0,10 a4,4 0 0,1 0,10 a4,4 0 0,1 0,10';
          out_str = '<use xlink:href="#ly" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-13").checked)
       {
          par_str = 'M'+x+' '+y+'h-8v3v-3h16v3v-3h-8l-8,12h16l-8-12';
          out_str = '<use xlink:href="#zenery" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-14").checked)
       {
          par_str = 'M'+x+' '+y+'h10l30 -30v-10v10l30 30h10h-10l-30 30v10v-10l-30 -30';
          out_str = '<use xlink:href="#bridge" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-15").checked)
       {
          par_str = 'M'+x+' '+y+'h-8h16';
          out_str = '<use xlink:href="#gnd" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-16").checked)
       {
          par_str = 'M'+x+' '+y+'h15v10l15,6v-6v22v-4l-15,6v6h-15 m90,-40h-30v40h30m-73,-7l8,-1l-2-4l-5,5m20 -10l8,-4l-4-4l-5,9l12 -12m0 10l-12 12l8,-4l-4-4l-5,9m24 -10l-8,-11h16l-8 12h-8h16h-8m-5 19h-30a4,4 0 1,1 0,-50h30a4,4 0 1,1 0,50';
          out_str = '<use xlink:href="#opto" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-17").checked)
       {
          par_str = 'M'+x+' '+y+'h12v-12m4 0v-6v3h14v-7m0 16h-14v-3v6v-3l8 -2v4l-8 -2h14v9h-14v-3v6v-3h14v16m-8-8a4,4 0 1,1 0,-34a4,4 0 1,1 0,34m8-6a2,2 0 1,1 0,-4a2,2 0 1,1 0,4';
          out_str = '<use xlink:href="#mosfet" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-18").checked)
       {
          par_str = 'M'+x+' '+y+'v10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10v10m0 40a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10a4,4 0 1,1 0,10v10m12-10v-130m6 0v130m12-80v-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10a4,4 0 1,1 0,-10v-10';
          out_str = '<use xlink:href="#transf" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-19").checked)
       {
          par_str = 'M'+x+' '+y+'v3h-8h16m0,5h-16h8v3m-8,-12v-6m-3,3h6';
          out_str = '<use xlink:href="#cey" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-20").checked)
       {
          par_str = 'M'+x+' '+y+'h-8v3v-3h16v3v-3h-8l-8,12h16l-8-12m5 6h15';
          out_str = '<use xlink:href="#tl431" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-21").checked)
       {
          par_str = 'M'+x+' '+y+'h8h-16h8l8,-12h-16l8 12 m12 -12l12 -12l-6 3l3 3l2-5m-11 20l12-12l-6 3l3 3l2 -5';
          out_str = '<use xlink:href="#ledy" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-23").checked)
       {
          par_str = 'M'+x+' '+y+'v24a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0 a4,4 0 0,0 10,0v-24m0 36h-40m40 8h-40m0 12a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0 a4,4 0 0,1 10,0v24m-40-24v24';
          out_str = '<use xlink:href="#filter" x="' + x + '" y="' + y + '"/>\n';
       }
       if (document.getElementById("radio-24").checked)
       {          
          par_str = 'M'+x+' '+y+'h18v-12v24m0 -6l12 9v5m-12-26l12 -9v-5m-8 36a4,4 0 1,1 0,-34a4,4 0 1,1 0,34m8 0l-5 -8l-3 4l8 3';
          out_str = '<use xlink:href="#npn" x="' + x + '" y="' + y + '"/>\n';
       }       
       if (document.getElementById("radio-22").checked)
       {
          var txsvg = document.getElementById("svgtxt").value;
          par_str = 'M'+x+' '+y+'h8h-16h8l8,-12h-16l8 12 m12 -12l12 -12l-6 3l3 3l2-5m-11 20l12-12l-6 3l3 3l2 -5';
          x = x + 2;
          y = y + 3;
          out_str = '<text font-size="12px" x="' + x + '" y="' + y + '">' + txsvg + '</text>\n';
          var svg = document.getElementsByTagName('svg')[0];
         var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'text'); //Create a path in SVG's namespace
          
          newElement.setAttribute('x', x);
          newElement.setAttribute('y', y);
          newElement.setAttribute('font-size', '12px');
          //newElement.setAttribute('fill', '#000');
          newElement.textContent = txsvg;
          svg.appendChild(newElement);
          txtid = "drv"+ drvid;
          newElement.id = txtid;
         
       }
       
          txtid = "drv"+ drvid;
          drvid++;
          
          if (!(document.getElementById("radio-22").checked))
          {
          var svg = document.getElementsByTagName('svg')[0]; //Get svg element
          var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
          newElement.setAttribute("d", par_str); //Set path's data
          newElement.id = txtid;
          newElement.style.stroke = "#000"; //Set stroke colour
          newElement.style.strokeWidth = "2px"; //Set stroke width
          newElement.style.fill = "#fff";
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