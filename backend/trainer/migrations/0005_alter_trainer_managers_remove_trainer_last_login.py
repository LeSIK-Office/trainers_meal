# Generated by Django 4.2.14 on 2024-08-21 08:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("trainer", "0004_alter_trainer_managers"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="trainer",
            managers=[],
        ),
        migrations.RemoveField(
            model_name="trainer",
            name="last_login",
        ),
    ]
