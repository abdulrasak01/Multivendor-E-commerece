# Generated by Django 5.0.7 on 2024-09-01 17:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_customeraddress_default_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('reviews', models.TextField()),
                ('add_time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.customer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.product')),
            ],
        ),
    ]
