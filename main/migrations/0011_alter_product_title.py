# Generated by Django 5.0.7 on 2024-10-19 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_product_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
