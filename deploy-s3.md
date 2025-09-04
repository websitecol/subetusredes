# Configuración para despliegue en AWS S3

## Pasos para subir a AWS S3:

1. **Ejecutar el build:**
   ```bash
   npm run build
   ```

2. **Configurar AWS CLI (si no está configurado):**
   ```bash
   aws configure
   ```

3. **Crear bucket S3 (reemplaza 'tu-bucket-name' con el nombre deseado):**
   ```bash
   aws s3 mb s3://tu-bucket-name
   ```

4. **Configurar el bucket para hosting web:**
   ```bash
   aws s3 website s3://tu-bucket-name --index-document index.html --error-document index.html
   ```

5. **Subir los archivos:**
   ```bash
   aws s3 sync build/ s3://tu-bucket-name --delete
   ```

6. **Configurar política de bucket para acceso público:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::tu-bucket-name/*"
       }
     ]
   }
   ```

7. **Aplicar la política:**
   ```bash
   aws s3api put-bucket-policy --bucket tu-bucket-name --policy file://bucket-policy.json
   ```

## URL de acceso:
http://tu-bucket-name.s3-website-[region].amazonaws.com

## Notas importantes:
- Asegúrate de colocar los archivos `logo.png` en `src/assets/` e `icon.png` en `public/` antes del build
- La página es completamente estática y no requiere servidor
- El build genera archivos optimizados en la carpeta `build/`

