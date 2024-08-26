# Generated by Django 4.2.14 on 2024-08-19 13:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("order", "0002_baseinfo_flavorinfo_proinfo_veginfo_and_more"),
    ]

    operations = [
        migrations.AlterModelTable(
            name="base_util",
            table="base_util",
        ),
        migrations.AlterModelTable(
            name="baseinfo",
            table="base_info",
        ),
        migrations.AlterModelTable(
            name="flavor_util",
            table="flavor_util",
        ),
        migrations.AlterModelTable(
            name="flavorinfo",
            table="flavor_info",
        ),
        migrations.AlterModelTable(
            name="meal",
            table="meal",
        ),
        migrations.AlterModelTable(
            name="nutrients",
            table="nutrients",
        ),
        migrations.AlterModelTable(
            name="order",
            table="order",
        ),
        migrations.AlterModelTable(
            name="order_detail",
            table="order_detail",
        ),
        migrations.AlterModelTable(
            name="payment",
            table="payment",
        ),
        migrations.AlterModelTable(
            name="price",
            table="price",
        ),
        migrations.AlterModelTable(
            name="pro_util",
            table="pro_util",
        ),
        migrations.AlterModelTable(
            name="proinfo",
            table="pro_info",
        ),
        migrations.AlterModelTable(
            name="veg_util",
            table="veg_util",
        ),
        migrations.AlterModelTable(
            name="veginfo",
            table="veg_info",
        ),
    ]
