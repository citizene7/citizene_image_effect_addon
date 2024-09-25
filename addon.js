document.getElementById('imageUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
              const canvas = document.getElementById('previewCanvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
          }
          img.src = e.target.result;
      }
      reader.readAsDataURL(file);
  }
});

document.getElementById('applyEffect').addEventListener('click', function() {
  const effect = document.getElementById('imageEffects').value;
  const canvas = document.getElementById('previewCanvas');
  
  Caman(canvas, function () {
      this.revert(); // Reset to original state
      switch (effect) {
          case 'vintage':
              this.vintage();
              break;
          case 'lomo':
              this.lomo();
              break;
          case 'clarity':
              this.clarity();
              break;
          case 'crossProcess':
              this.crossProcess();
              break;
          default:
              break;
      }
      this.render();
  });
});
