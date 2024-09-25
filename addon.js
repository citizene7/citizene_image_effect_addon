{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('uploadImage').addEventListener('change', function(e) \{\
  let file = e.target.files[0];\
  if (!file) return;\
\
  let reader = new FileReader();\
  reader.onload = function(event) \{\
    let img = new Image();\
    img.onload = function() \{\
      applyEffect(img);\
    \};\
    img.src = event.target.result;\
  \};\
  reader.readAsDataURL(file);\
\});\
\
document.getElementById('useCurrentPage').addEventListener('click', function() \{\
  // Logic to capture the current image on the page (if the platform allows it)\
\});\
\
document.getElementById('effects').addEventListener('change', function() \{\
  let effect = this.value;\
  applyEffect(null, effect);\
\});\
\
function applyEffect(image, effect) \{\
  let canvas = document.getElementById('imagePreview');\
  let ctx = canvas.getContext('2d');\
\
  if (image) \{\
    canvas.width = image.width;\
    canvas.height = image.height;\
    ctx.drawImage(image, 0, 0);\
  \}\
\
  Caman(canvas, function () \{\
    if (effect === 'brightness') \{\
      this.brightness(10).render();\
    \} else if (effect === 'contrast') \{\
      this.contrast(20).render();\
    \} else if (effect === 'sepia') \{\
      this.sepia(50).render();\
    \} else \{\
      this.revert(); // Revert to original\
    \}\
  \});\
\}\
}