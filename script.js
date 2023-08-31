
function adjustTextAreaHeight() {
  const textarea = document.getElementById("textInput");
  
  // Reset the height to its default to get the scroll height
  textarea.style.height = "auto";
  
  // Set the height to the scroll height so that it fits the content
  textarea.style.height = (textarea.scrollHeight) + "px";
}