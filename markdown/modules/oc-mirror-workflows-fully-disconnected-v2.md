{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirroring an image set in a fully disconnected environment {id="oc-mirror-workflows-fully-disconnected-v2_{{ context }}"}

You can mirror image sets in a fully disconnected environment where the {{ product_title }} cluster cannot access the public internet. {._abstract}

The following high-level workflow describes the mirroring process:

1.  **Mirror to disk**: Mirror the image set to an archive.
1.  **Disk transfer**: Manually transfer the archive to the network of the disconnected mirror registry.
1.  **Disk to mirror**: Mirror the image set from the archive to the target disconnected registry.