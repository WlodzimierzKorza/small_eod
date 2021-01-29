# Generated by Django 3.1.1 on 2020-10-01 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0005_auto_20200625_0113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='name',
            field=models.CharField(help_text='Name of file.', max_length=255, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='file',
            name='path',
            field=models.CharField(help_text='Path to file.', max_length=355, verbose_name='Path'),
        ),
    ]