const QRCode = require('qrcode');

QRCode.toFile(
  'yovibe-qr.png',
  'https://yovibesite.netlify.app/',
  { width: 2000, margin: 4 },
  (err) => {
    if (err) {
      console.error('QR generation failed:', err);
      process.exit(1);
    }
    console.log('yovibe-qr.png created');
  }
);