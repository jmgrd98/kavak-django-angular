# Generated by Django 4.2.3 on 2023-07-16 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_product_imagem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]