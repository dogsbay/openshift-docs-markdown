{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure automatic image pruning {id="configure-automatic-image-pruning-con_{{ context }}"}

Rather than deleting unused images by hand, you can configure the image registry to prune them on a schedule. The `ImagePruner` custom resource sets the schedule and the retention policy, including how many tag revisions to keep and how young an image must be to survive a prune.