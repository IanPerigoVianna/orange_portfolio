# Generated by Django 4.1.10 on 2024-01-28 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autenticacao', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/usuarios/imagens'),
        ),
    ]