"""Generate sharp badge textures (tag + band) for the Clients section.

Usage: python scripts/generate-badge-textures.py
Outputs public/model/Tag<name>.png (1024x1024) and Band<name>.png (1024x253).
Layout mirrors the original textures so the Tag.glb UVs keep matching.
"""
from PIL import Image, ImageDraw, ImageFont

FONT_BOLD = 'C:/Windows/Fonts/arialbd.ttf'
FONT_REG = 'C:/Windows/Fonts/arial.ttf'

# Roles/seniority match the CV exactly. Partikle appears twice with two
# different roles (current Fullstack Ssr stint vs. the original Frontend Jr
# stint), so it needs two separate textures (company2 and company5) even
# though the company name and colors are the same.
BADGES = {
    'company1': dict(bg=(36, 44, 62), ink=(235, 238, 245), company='Freelance', role='Desarrollador Fullstack Ssr'),
    'company2': dict(bg=(227, 24, 43), ink=(0, 0, 0), company='Partikle S.A.S', role='Desarrollador Fullstack Ssr'),
    'company3': dict(bg=(0, 132, 61), ink=(255, 255, 255), company='Universidad Simón Bolívar', role='Ingeniería de Sistemas'),
    'company4': dict(bg=(245, 245, 245), ink=(0, 0, 0), company='Dinamicapps S.A.S', role='Desarrollador Fullstack Ssr'),
    'company5': dict(bg=(227, 24, 43), ink=(0, 0, 0), company='Partikle S.A.S', role='Desarrollador Frontend Jr'),
}


def font(path, size):
    return ImageFont.truetype(path, size)


# The card front only maps the left half of the texture (u 0..0.5, v 0..0.757),
# i.e. x 0..510 and y 0..775. The vertical company name sits at NAME_X and the
# left column must stay under LEFT_MAX_W so they never overlap.
NAME_X = 410
NAME_MAX_H = 520
LEFT_MAX_W = 300


def fit(d, text, path, size, max_w):
    f = font(path, size)
    while d.textlength(text, font=f) > max_w and f.size > 12:
        f = font(path, f.size - 2)
    return f


def draw_tag(name, bg, ink, company, role):
    S = 1024
    im = Image.new('RGB', (S, S), bg)
    d = ImageDraw.Draw(im)

    # Small mark top-left
    d.ellipse((30, 30, 90, 90), outline=ink, width=8)
    d.text((110, 38), 'JEANFES', font=font(FONT_BOLD, 40), fill=ink)

    # Vertical company name along the center strip (text reads top -> bottom)
    f = fit(d, company, FONT_BOLD, 84, NAME_MAX_H)
    tw = int(d.textlength(company, font=f))
    layer = Image.new('RGBA', (tw + 20, f.size + 40), (0, 0, 0, 0))
    ImageDraw.Draw(layer).text((10, 10), company, font=f, fill=ink)
    layer = layer.rotate(-90, expand=True)
    im.paste(layer, (NAME_X - layer.width // 2, 60), layer)

    # Name / role block, left-middle
    d.text((40, 440), 'Jean Escobar', font=fit(d, 'Jean Escobar', FONT_BOLD, 48, LEFT_MAX_W), fill=ink)
    d.text((40, 500), role, font=fit(d, role, FONT_REG, 34, LEFT_MAX_W), fill=ink)

    # Big word bottom-left
    d.text((30, 610), 'ESCOBAR', font=fit(d, 'ESCOBAR', FONT_BOLD, 88, LEFT_MAX_W), fill=ink)

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
