"""Generate sharp badge textures (tag + band) for the Clients section.

Usage: python scripts/generate-badge-textures.py
Outputs public/model/Tag<name>.png (1024x1024) and Band<name>.png (1024x253).
Layout mirrors the original textures so the Tag.glb UVs keep matching.
"""
from PIL import Image, ImageDraw, ImageFont

FONT_BOLD = 'C:/Windows/Fonts/arialbd.ttf'
FONT_REG = 'C:/Windows/Fonts/arial.ttf'

BADGES = {
    'company1': dict(bg=(36, 44, 62), ink=(235, 238, 245), company='Freelance', role='Desarrollador Fullstack'),
    'company2': dict(bg=(227, 24, 43), ink=(0, 0, 0), company='Partikle S.A.S', role='Desarrollador Fullstack'),
    'company3': dict(bg=(0, 132, 61), ink=(255, 255, 255), company='Universidad Simón Bolívar', role='Ingeniero de Sistemas'),
    'company4': dict(bg=(245, 245, 245), ink=(0, 0, 0), company='Dinamicapps S.A.S', role='Desarrollador Fullstack Ssr'),
}


def font(path, size):
    return ImageFont.truetype(path, size)


def draw_tag(name, bg, ink, company, role):
    S = 1024
    im = Image.new('RGB', (S, S), bg)
    d = ImageDraw.Draw(im)

    # Small mark top-left
    d.ellipse((30, 30, 90, 90), outline=ink, width=8)
    d.text((110, 38), 'JEANFES', font=font(FONT_BOLD, 40), fill=ink)

    # Vertical company name along the center strip (text reads top -> bottom)
    f = font(FONT_BOLD, 96)
    max_w = 640
    while d.textlength(company, font=f) > max_w:
        f = font(FONT_BOLD, f.size - 4)
    tw = int(d.textlength(company, font=f))
    layer = Image.new('RGBA', (tw + 20, f.size + 40), (0, 0, 0, 0))
    ImageDraw.Draw(layer).text((10, 10), company, font=f, fill=ink)
    layer = layer.rotate(-90, expand=True)
    im.paste(layer, (430 - layer.width // 2, 60), layer)

    # Name / role block, left-middle
    d.text((40, 470), 'Jean Escobar', font=font(FONT_BOLD, 48), fill=ink)
    d.text((40, 530), role, font=font(FONT_REG, 34), fill=ink)

    # Big word bottom-left
    d.text((30, 640), 'ESCOBAR', font=font(FONT_BOLD, 88), fill=ink)

    im.save(f'public/model/Tag{name}.png')


def draw_band(name, bg, ink, company):
    W, H = 1024, 253
    im = Image.new('RGB', (W, H), bg)
    d = ImageDraw.Draw(im)
    f = font(FONT_BOLD, 96)
    while d.textlength(company, font=f) > 940:
        f = font(FONT_BOLD, f.size - 4)
    d.text((30, (H - f.size) // 2 - 10), company, font=f, fill=ink)
    im.save(f'public/model/Band{name}.png')


for name, cfg in BADGES.items():
    draw_tag(name, cfg['bg'], cfg['ink'], cfg['company'], cfg['role'])
    draw_band(name, cfg['bg'], cfg['ink'], cfg['company'])
    print('generated', name)
