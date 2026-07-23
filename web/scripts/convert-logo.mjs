import sharp from "sharp"
import { copyFileSync, existsSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, "../public/logo-source.jpg")
const out = join(__dirname, "../public/logo.png")

const asset =
  "C:/Users/ailen/.cursor/projects/c-Users-ailen-Desktop-VIBECODING-sites-BonoPlanet/assets/c__Users_ailen_AppData_Roaming_Cursor_User_workspaceStorage_f56d13a29d08eb9ab0075dde254be63d_images_logo_BONOPLANET_transparente-a84966d0-27d2-417a-93d6-b7d670b879b8.png"
if (!existsSync(src)) copyFileSync(asset, src)

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height } = info
const visited = new Uint8Array(width * height)
const queue = []

function idx(x, y) {
  return (y * width + x) * 4
}

function isBackground(x, y) {
  const i = idx(x, y)
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  return r < 50 && g < 50 && b < 50
}

for (let x = 0; x < width; x++) {
  queue.push([x, 0], [x, height - 1])
}
for (let y = 0; y < height; y++) {
  queue.push([0, y], [width - 1, y])
}

while (queue.length) {
  const [x, y] = queue.pop()
  if (x < 0 || y < 0 || x >= width || y >= height) continue
  const pi = y * width + x
  if (visited[pi]) continue
  if (!isBackground(x, y)) continue
  visited[pi] = 1
  data[idx(x, y) + 3] = 0
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

function isDark(x, y) {
  const i = idx(x, y)
  if (data[i + 3] === 0) return false
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  return Math.max(r, g, b) < 140
}

function hasTransparentNeighbor(x, y) {
  return (
    (x > 0 && data[idx(x - 1, y) + 3] === 0) ||
    (x < width - 1 && data[idx(x + 1, y) + 3] === 0) ||
    (y > 0 && data[idx(x, y - 1) + 3] === 0) ||
    (y < height - 1 && data[idx(x, y + 1) + 3] === 0)
  )
}

// Peel JPEG compression halo without touching interior blacks (eyes/mouth).
for (let pass = 0; pass < 12; pass++) {
  let changed = 0
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (isDark(x, y) && hasTransparentNeighbor(x, y)) {
        data[idx(x, y) + 3] = 0
        changed++
      }
    }
  }
  if (changed === 0) break
}

await sharp(data, { raw: { width, height, channels: 4 } }).png().toFile(out)

const meta = await sharp(out).metadata()
console.log(JSON.stringify({ width: meta.width, height: meta.height, hasAlpha: meta.hasAlpha }))
