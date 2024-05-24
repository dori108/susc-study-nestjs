const superEventHandler =s
mouseover:
= {
title. innerText =
"The mouse is here!";
title.style.color = "#1abc9c";
｝
mouseout:
→ {
title.innerText =
"The mouse is gone!";
title.style.color = "#3498db";
contextmenu:
event. preventDefault:
title. innerText - "That was a right click!";
title.style.color = "#e74c3c";
｝
resize: () →> (
title. innerText = "You just resized!";
title.style.color = "#9b59b6";
const title = document. querySelector ("h2");
title.addEventListener ("mouseover", superEventHandler.mouseover); 
title.addEventListener ("mouseleave", superEventHandler.mouseout);
window. addEventListener ("contextmenu", superEventHandler.contextmenu); 
window.addEventListener("resize", superEventHandler.resize);
