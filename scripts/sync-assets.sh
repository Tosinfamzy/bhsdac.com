#!/bin/bash
# Sync website assets from Google Drive (Content team shared folder)
# Usage: npm run sync-assets
#        npm run sync-assets -- --dry-run   (preview without downloading)

set -e

REMOTE="gdrive:Content team"
SHARED="--drive-shared-with-me"
ASSETS="src/assets"
FLAGS="--progress --ignore-existing $SHARED"

# Pass --dry-run to preview
if [[ "$*" == *"--dry-run"* ]]; then
  FLAGS="$FLAGS --dry-run"
  echo "=== DRY RUN (no files will be downloaded) ==="
fi

echo ""
echo "Syncing assets from Google Drive → src/assets/"
echo "================================================"

# Convention 2026
echo ""
echo "[1/4] Convention 2026..."
rclone copy "$REMOTE/2026 Programs/Convention 2026" "$ASSETS/convention" $FLAGS

# Sabbath Photos (for Programs, Homepage, general use)
echo ""
echo "[2/4] Sabbath Photos..."
rclone copy "$REMOTE/Sabbath Photos Upload" "$ASSETS/sabbath-photos" $FLAGS

# 2026 Quarterly Program creatives
echo ""
echo "[3/4] 2026 Program Creatives..."
rclone copy "$REMOTE/2026 Programs/Generic refresh design" "$ASSETS/programs" $FLAGS

# Sermon cut videos thumbnails / outros (if useful)
echo ""
echo "[4/4] Video Outros..."
rclone copy "$REMOTE/Videos Outro" "$ASSETS/media" $FLAGS

echo ""
echo "================================================"
echo "Sync complete!"
echo ""
echo "Assets are in:"
echo "  src/assets/convention/     - Convention 2026 banners"
echo "  src/assets/sabbath-photos/ - Sabbath service photos"
echo "  src/assets/programs/       - Program creatives"
echo "  src/assets/media/          - Media/video assets"
