#!/usr/bin/env bash
# Reproduce el CI (.github/workflows/ci.yml) sobre un clon limpio de HEAD: el runner solo ve lo
# versionado, así que se prueba eso y no el working copy.
#   Node 22 (el del CI) → npm ci → npm test → npm run build
# El build escribe en ../../backend/... (outDir de vite.config): el clon se anida para que ese
# directorio quede dentro de la carpeta temporal y no pise el dist/ real del backend.
# Uso: bash scripts/verificar.sh
set -euo pipefail

REPO="$(git -C "$(dirname "$0")/.." rev-parse --show-toplevel)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

NODE_MAJOR="$(node --version | sed -E 's/^v([0-9]+).*/\1/')"
[ "$NODE_MAJOR" = "22" ] || echo "AVISO: Node $(node --version); el CI usa Node 22."

echo "==> Clon limpio de HEAD ($(git -C "$REPO" rev-parse --short HEAD))"
git clone -q "$REPO" "$WORK/a/b/frontend"
cd "$WORK/a/b/frontend"

echo "==> npm ci"
npm ci --no-audit --no-fund

echo "==> npm test"
npm test

echo "==> npm run build (VITE_API_BASE_URL de producción, como el secret del CI)"
VITE_API_BASE_URL=https://nicolasandrescl.pythonanywhere.com npm run build

echo "OK: el CI debería pasar con este HEAD."
