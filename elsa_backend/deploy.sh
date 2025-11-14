#!/bin/bash
set -e

echo "Update logo_url di database..."
php artisan tinker --execute="\App\Models\Partner::all()->each(function (\$p) { \$url = \$p->logo_url; if (str_contains(\$url, '/')) { \$p->logo_url = substr(\$url, strrpos(\$url, '/') + 1); \$p->save(); } });"

echo "Pindahkan file ke public/partners..."
mkdir -p public/partners
cp -r storage/app/public/* public/partners/ 2>/dev/null || true

echo "Cache Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Deploy selesai!"