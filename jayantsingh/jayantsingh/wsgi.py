"""
WSGI config for jayantsingh project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# add the hellodjango project path into the sys.path
sys.path.append(BASE_DIR)

# add the virtualenv site-packages path to the sys.path
sys.path.append(os.path.join(BASE_DIR, '../venv/lib64/python3.5/site-packages'))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "jayantsingh.settings")

application = get_wsgi_application()
