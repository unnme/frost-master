# Настройка редиректа www на non-www в Nginx

Для правильной работы SEO необходимо настроить редирект с версии с www на версию без www.

## Рекомендуемая настройка Nginx

Добавьте следующий блок в ваш Nginx конфиг **перед** основным server блоком:

```nginx
# ======================
# Redirect www to non-www
# ======================
server {
    listen 80;
    listen [::]:80;
    server_name www.frost-master.com;
    return 301 https://frost-master.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.frost-master.com;
    
    ssl_certificate /etc/letsencrypt/live/frost-master.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/frost-master.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    return 301 https://frost-master.com$request_uri;
}
```

## Что это делает

1. **HTTP редирект**: Все запросы к `http://www.frost-master.com` перенаправляются на `https://frost-master.com`
2. **HTTPS редирект**: Все запросы к `https://www.frost-master.com` перенаправляются на `https://frost-master.com`
3. **301 редирект**: Постоянный редирект, который сообщает поисковым системам, что версия без www является основной

## После настройки

1. Проверьте редирект: `curl -I https://www.frost-master.com`
2. Должен вернуться статус `301 Moved Permanently` с заголовком `Location: https://frost-master.com`
3. В Yandex.Webmaster и Google Search Console укажите предпочтительный домен: `frost-master.com` (без www)

## Важно

- Canonical ссылки в коде уже настроены на версию без www
- Структурированные данные используют версию без www
- Sitemap.xml использует версию без www
- После настройки редиректа поисковые системы будут использовать только версию без www

