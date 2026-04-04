#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalar dependencias de python
pip install -r requirements.txt

# Construir el frontend
cd frontend
npm install
npm run build

# Recolectar archivos estaticos en Django
python manage.py collectstatic --noinput
python manage.py migrate
