/*  My widget free text in a Widget area v0.02
run widgets in their own function scope so they don't interfere with
currently-running apps */
(() => {
 /* const filename = 'widtextbottom.json';
  let settings = Storage.readJSON(filename,1) || {
  predtext: true,
  colors : true,
  fontsize : 13 */
};  
    
  var text_color=0x07FF; //0x7e0;//green  //0x07FF;//cyan 
  var font_size='13';
  g.setFontVector(font_size);  
  var my_string="#espruino #MPL"; 
                          
  //calc width out of the function
  var text_width = g.stringWidth(my_string); // width of the widget after set font
  
  function draw() {    
    g.reset();// reset the graphics context to defaults (color/font/etc)
    g.setFontVector(font_size);
    g.setColor(text_color);    
    //identify widget area and calc position y
    if (this.y<5) g.drawString(my_string, this.x, this.y+1);
    else {
       var widget_height=g.getHeight()-this.y;
       var yposition=(this.y+((widget_height-font_size)/2));
       g.drawString(my_string, this.x, yposition);
    }
    
  }

  
  WIDGETS["widtextareaBottom"]={
    area:"bl", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
    width: text_width, // var with calculated  width 
    draw:draw // called to draw the widget
  };
})();

