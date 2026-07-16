# Fuentes de Bono Planet

Coloca estos archivos en esta carpeta para activar la tipografía de marca:

| Archivo | Fuente | Uso |
|---------|--------|-----|
| `Namaku.woff2` o `Namaku.ttf` | Namaku (Khurasan) | Títulos |
| `KGRedHands.woff2` o `KGRedHands.ttf` | KG Red Hands (Kimberly Geswein) | Subtítulos y botones |
| — | Plus Jakarta Sans (Google Fonts) | Cuerpo de texto |

Mientras no esté Namaku en `/public/fonts/`, el sitio usa **Bricolage Grotesque** como fallback de títulos. Plus Jakarta Sans se carga automáticamente vía Google Fonts.

## Descarga

- **Namaku**: [dafont.com/namaku](https://www.dafont.com/namaku.font) — gratis comercial
- **KG Red Hands**: [dafont.com/kg-red-hands](https://www.dafont.com/kg-red-hands.font) — revisa licencia

## Conversión a woff2 (opcional, recomendado)

```bash
npx woff2_compress public/fonts/Namaku.ttf
npx woff2_compress public/fonts/KGRedHands.ttf
```
