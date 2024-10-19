# Generated by Django 5.0.7 on 2024-10-18 14:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_productrating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productrating',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_ratings', to='main.product'),
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='product_imgs/')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_imgs', to='main.customer')),
            ],
        ),
    ]
