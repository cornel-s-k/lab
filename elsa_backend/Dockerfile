FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    build-essential \
    zip \
    unzip \
    git \
    curl \
    sqlite3 \
    libsqlite3-dev

RUN docker-php-ext-install pdo pdo_mysql pdo_sqlite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN php artisan key:generate
RUN php artisan storage:link

CMD php artisan serve --host=0.0.0.0 --port=$PORT
