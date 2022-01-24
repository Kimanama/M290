/**
 * height of textarea grows automatically during typing
 * @param element
 */
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
