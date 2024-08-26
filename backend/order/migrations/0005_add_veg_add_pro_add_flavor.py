# Generated by Django 4.2.13 on 2024-08-26 08:40

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("order", "0004_menu_image_remove_order_detail_order_order_week_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Add_Veg",
            fields=[
                (
                    "add_veg_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="추가 채소 고유 ID",
                    ),
                ),
                (
                    "order_detail",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="order.order_detail",
                    ),
                ),
                (
                    "veg_util",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="order.veg_util"
                    ),
                ),
            ],
            options={
                "db_table": "add_veg",
            },
        ),
        migrations.CreateModel(
            name="Add_Pro",
            fields=[
                (
                    "add_pro_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="추가 단백질 고유 ID",
                    ),
                ),
                (
                    "order_detail",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="order.order_detail",
                    ),
                ),
                (
                    "pro_util",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="order.pro_util"
                    ),
                ),
            ],
            options={
                "db_table": "add_pro",
            },
        ),
        migrations.CreateModel(
            name="Add_Flavor",
            fields=[
                (
                    "add_flavor_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="추가 소스 고유 ID",
                    ),
                ),
                (
                    "flavor_util",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="order.flavor_util",
                    ),
                ),
                (
                    "order_detail",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="order.order_detail",
                    ),
                ),
            ],
            options={
                "db_table": "add_flavor",
            },
        ),
    ]
