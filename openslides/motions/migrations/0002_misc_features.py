# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-11 21:23
from __future__ import unicode_literals

import django.db.models.deletion
import jsonfield.fields
from django.conf import settings
from django.db import migrations, models

import openslides.utils.models


def change_label_of_state(apps, schema_editor):
    """
    Changes the label of former state "commited a bill" to "refered to committee".
    """
    # We get the model from the versioned app registry;
    # if we directly import it, it will be the wrong version.
    State = apps.get_model("motions", "State")

    try:
        state = State.objects.get(name="commited a bill")
    except State.DoesNotExist:
        # State does not exists, there is nothing to change.
        pass
    else:
        state.name = "refered to committee"
        state.action_word = "Refer to committee"
        state.save(skip_autoupdate=True)


def add_recommendation_labels(apps, schema_editor):
    """
    Adds recommendation labels to some of the built-in states.
    """
    # We get the model from the versioned app registry;
    # if we directly import it, it will be the wrong version.
    State = apps.get_model("motions", "State")

    name_label_map = {
        "accepted": "Acceptance",
        "rejected": "Rejection",
        "not decided": "No decision",
        "permitted": "Permission",
        "adjourned": "Adjournment",
        "not concerned": "No concernment",
        "refered to committee": "Referral to committee",
        "rejected (not authorized)": "Rejection (not authorized)",
    }
    for state in State.objects.all():
        if name_label_map.get(state.name):
            state.recommendation_label = name_label_map[state.name]
            state.save(skip_autoupdate=True)


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("motions", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="MotionBlock",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
            ],
            options={"default_permissions": ()},
            bases=(openslides.utils.models.RESTModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="MotionChangeRecommendation",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("rejected", models.BooleanField(default=False)),
                ("type", models.PositiveIntegerField(default=0)),
                ("line_from", models.PositiveIntegerField()),
                ("line_to", models.PositiveIntegerField()),
                ("text", models.TextField(blank=True)),
                ("creation_time", models.DateTimeField(auto_now=True)),
                (
                    "author",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "motion_version",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="change_recommendations",
                        to="motions.MotionVersion",
                    ),
                ),
            ],
            options={"default_permissions": ()},
            bases=(openslides.utils.models.RESTModelMixin, models.Model),
        ),
        migrations.AlterModelOptions(
            name="motion",
            options={
                "default_permissions": (),
                "ordering": ("identifier",),
                "permissions": (
                    ("can_see", "Can see motions"),
                    ("can_create", "Can create motions"),
                    ("can_support", "Can support motions"),
                    ("can_see_and_manage_comments", "Can see and manage comments"),
                    ("can_manage", "Can manage motions"),
                ),
                "verbose_name": "Motion",
            },
        ),
        migrations.AddField(
            model_name="motion",
            name="comments",
            field=jsonfield.fields.JSONField(null=True),
        ),
        migrations.AddField(
            model_name="motion",
            name="origin",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="motion",
            name="recommendation",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="motions.State",
            ),
        ),
        migrations.AddField(
            model_name="state",
            name="recommendation_label",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="state",
            name="show_recommendation_extension_field",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="state",
            name="show_state_extension_field",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="motion",
            name="state",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="motions.State",
            ),
        ),
        migrations.AddField(
            model_name="motion",
            name="motion_block",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="motions.MotionBlock",
            ),
        ),
        migrations.RunPython(change_label_of_state),
        migrations.RunPython(add_recommendation_labels),
    ]
