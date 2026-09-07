{%- set _mod_docs_content_type = "CONCEPT" %}
# How manifest resource deletion works {id="microshift-manifests-deletion-behavior_{{ context }}"}

When creating new manifests in {{ microshift_short }}, you can use manifest resource deletion to remove or update old objects, ensuring there are no conflicts or issues.

{{ microshift_short }} supports the deletion of manifest resources in the following situations:

*   Manifest removal: Manifests can be removed when you need to completely remove a resource from the node.
*   Manifest upgrade: During an application upgrade, some resources might need to be removed while others are retained to preserve data.


:::important

Manifest files placed in the `delete` subdirectories are not automatically removed and require manual deletion. Only the resources listed in the manifest files placed in the delete subdirectories are deleted.

:::