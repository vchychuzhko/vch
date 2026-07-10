---
title: Nginx + Apache
description: Guide to set up Nginx and Apache to run simultaneously
---

# Nginx + Apache

This is a guide to set up Nginx and Apache web servers to run at the same time for the developer environment.

## Prerequisites

- Debian-based linux system
- Installed Nginx and Apache

## Setup

### hosts

Set hostnames mapping to the hosts file:

```bash
sudo nano /etc/hosts
```

Add these lines:

```text
127.0.0.1 nginx
127.0.0.2 apache
```

### Nginx

Update Nginx to listen to its mapped hostname:

```bash
sudo nano /etc/nginx/sites-enabled/default
```

Replace default lines:

```nginx
server {
    listen 80 default_server; # [!code --]
    listen [::]:80 default_server; # [!code --]
    listen nginx:80; # [!code ++]
    ...
}
```

Restart Nginx service:

```bash
sudo service nginx restart
```

### Apache

Update Apache to listen to its mapped hostname:

```bash
sudo nano /etc/apache2/ports.conf
```

Replace default lines:

```apache
# [!code --]
Listen 80
# [!code ++]
Listen apache:80

# [!code --]
Listen 443
# [!code ++]
Listen apache:443
```

Update default virtual host:

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

Replace default lines:

```apache
# [!code --]
<VirtualHost *:80>
# [!code ++]
<VirtualHost apache:80>
```

Restart Apache service:

```bash
sudo service apache2 restart
```

## How to use

For new or existing configuration files prepend the necessary hostname before port:

```nginx{2,7}
server {
    listen nginx:80;
    ...
}

server {
    listen nginx:443 ssl http2;
    ...
}
```

And for Apache:

```apache{1,5}
<VirtualHost apache:80>
    ...
</VirtualHost>

<VirtualHost apache:443>
    ...
</VirtualHost>
```

When adding domain in `/etc/hosts` file specify [mapped local IP address](#hosts):

```text
127.0.0.1 example1.lan # nginx
127.0.0.2 example2.lan # apache
```

## What it solves

This approach allows you to have both services working at the same time with no additional ports required.

So you can use the necessary web server for different projects to replicate production environments more precisely.

Suitable when Docker is not an option.

## Understanding

This works by creating some sort of local proxy domains - aliases - for Nginx and Apache services.

Your project domain pointed to a mapped local IP address will be handled by a web server mapped to this IP address, as it listens to it by alias.
