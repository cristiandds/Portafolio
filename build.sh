#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalar dependencias de python
pip install -r requirements.txt

# Construir el frontend
cd frontend
npm install
npm run build

cd ..

# Recolectar archivos estaticos en Django
python manage.py collectstatic --noinput
python manage.py migrate

# Crear superusuario automáticamente si no existe
python manage.py shell << END
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='tu_usuario').exists():
    User.objects.create_superuser('cristian', 'cjulonmiranda@gmail.com', '2204Cr7')
    print("Superusuario creado correctamente")
else:
    print("El superusuario ya existe")
END