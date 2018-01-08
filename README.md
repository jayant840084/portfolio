# portfolio
Portfolio website

## Configuration
Place "systemd/portfolio.service" in "/etc/systemd/system/"
Place "nginx/jayantsingh.in" in "/etc/nginx/sites-enabled"

Check for configuration: nginx -t
Reload nginx: nginx -s reload
Reload systemctl: systemctl daemon-reload
Run on system boot: systemctl enable portfolio

## Run
Start: systemctl start portfolio
Restart: systemctl restart portfolio
Stop: systemctl stop portfolio