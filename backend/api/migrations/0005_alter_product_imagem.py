# Generated by Django 4.2.3 on 2023-07-16 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_product_options_product_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='media/'),
        ),
    ]
