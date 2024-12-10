document.getElementById('generate-btn').addEventListener('click', function() {
    // Get the value from the input field
    var text = document.getElementById('text-input').value;

    // Check if the input field is empty
    if (text.trim() === "") {
        alert("Please enter text to generate a QR code!");
        return;
    }

    // Get the canvas element where the QR code will be displayed
    var canvas = document.getElementById('qr-code');

    // Clear any previous QR code
    canvas.width = canvas.width;

    // Use the QRCode library to generate the QR code on the canvas
    QRCode.toCanvas(canvas, text, function (error) {
        if (error) {
            console.error(error);  // Log error if QR code generation fails
        } else {
            console.log('QR Code generated successfully!');  // Log success message
        }
    });
});
