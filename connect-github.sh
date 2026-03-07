#!/usr/bin/env bash
# Run after creating the repo at https://github.com/new?name=foundation-shops
# Usage: ./connect-github.sh YOUR_GITHUB_USERNAME
#    or: ./connect-github.sh https://github.com/YOUR_USERNAME/foundation-shops.git

set -e
cd "$(dirname "$0")"

if [ -z "$1" ]; then
  echo "Usage: ./connect-github.sh YOUR_GITHUB_USERNAME"
  echo "   or: ./connect-github.sh https://github.com/user/repo.git"
  echo ""
  echo "Create the repo first: https://github.com/new?name=foundation-shops"
  echo "(Leave 'Add README' unchecked, then Create repository)"
  exit 1
fi

if [[ "$1" == https://* ]] || [[ "$1" == git@* ]]; then
  REPO_URL="$1"
else
  REPO_URL="https://github.com/$1/foundation-shops.git"
fi

if git remote get-url origin 2>/dev/null; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

git branch -M main
git push -u origin main

echo ""
echo "Done! Now connect to Netlify:"
echo "  1. Go to https://app.netlify.com → Add new site → Import an existing project"
echo "  2. Choose GitHub and select foundation-shops"
echo "  3. Deploy (build settings are in netlify.toml)"
