# Generated by Django 4.2.14 on 2024-08-21 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("client", "0002_alter_body_data_table_alter_client_table_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="client",
            name="is_subscribed",
            field=models.BooleanField(default=False, verbose_name="구독 유무"),
        ),
    ]
