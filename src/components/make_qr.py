import os
import qrcode
from PIL import Image

# QR кодын үндсэн мэдээлэл
url = "https://sales.ubcarpet.mn/"
# QR кодын тохиргоо
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # өндөр алдааны хамгаалалт
    box_size=20,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# QR кодыг өнгөтэйгээр үүсгэх
qr_img = qr.make_image(
    fill_color="#0A2066",      # QR кодын өнгө (цэнхэр)
    back_color="white"         # Арын өнгө
).convert('RGB')

# Лого нэмэх (лого зурагтай ижил хавтасанд байх ёстой)
logo_path = os.path.join(os.path.dirname(__file__), "logo.jpg")
logo = Image.open(logo_path)

# Логоны хэмжээг тохируулах
qr_width, qr_height = qr_img.size
logo_size = qr_width // 4
logo = logo.resize((logo_size, logo_size), Image.LANCZOS)

# Логоны байрлал (төвд)
logo_pos = ((qr_width - logo_size) // 2, (qr_height - logo_size) // 2)
qr_img.paste(logo, logo_pos, mask=logo if logo.mode == 'RGBA' else None)

# QR кодыг хадгалах
qr_img.save("catalog.salesubcarpet.png")