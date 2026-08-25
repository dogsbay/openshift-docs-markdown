{%- set _mod_docs_content_type = "CONCEPT" %}
# Manually pruning images {id="pruning-images-manual_{{ context }}"}

Manually remove orphaned image data from your integrated {{ product_registry }} to reclaim storage capacity and prevent node disk exhaustion. {._abstract}

The pruning custom resource enables automatic image pruning for the images from the {{ product_registry }}. Administrators can manually prune images with the `oc adm prune images <image_prune_option>` command.

For example:

```terminal
$ oc adm prune images <image_prune_option>
```
For more information about available pruning options, see "Manual image pruning command options".

This command removes images that are no longer required by the system.

Depending on your needs, you can prune images based on their age and tag history, or prune images that cause a project to exceed its defined storage limits.