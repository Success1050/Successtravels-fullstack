# Generated by Django 5.1.4 on 2024-12-20 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=62)),
                ('email', models.EmailField(max_length=254)),
                ('image', models.ImageField(default='default.png', upload_to='images/')),
                ('message', models.TextField()),
            ],
        ),
    ]