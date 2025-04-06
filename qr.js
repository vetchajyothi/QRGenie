document.getElementById('generateBtn').addEventListener('click', function () {
  const inputText = document.getElementById('qrInput').value;
  if (inputText) {
    document.getElementById('qrCode').innerHTML = '';
    new QRCode(document.getElementById('qrCode'), {
      text: inputText,
      width: 128,
      height: 128,
    });
  } else {
    alert('Enter URL');
  }
});
