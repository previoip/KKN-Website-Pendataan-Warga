function copyClipboard() {
    var copyText = document.getElementsByTagName('div');
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  } 