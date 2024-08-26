# Generated by Django 4.2.13 on 2024-08-26 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("client", "0006_remove_client_weight_body_data_weight"),
    ]

    operations = [
        migrations.AlterField(
            model_name="body_data",
            name="skeletal_muscle",
            field=models.DecimalField(
                decimal_places=2, max_digits=5, null=True, verbose_name="골격근량"
            ),
        ),
    ]
