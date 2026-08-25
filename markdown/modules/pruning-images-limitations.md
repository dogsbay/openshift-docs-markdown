{%- set _mod_docs_content_type = "REFERENCE" %}
# Image pruning limitations {id="pruning-images-limitations_{{ context }}"}

Review image layer removal rules and external registry limitations before running prune operations to predict layer deletion and avoid unpruned image streams. {._abstract}

*   Pruning images from external registries is unsupported.
*   When an image is pruned, all references to the image are removed from all image streams that contain the image in `status.tags`.
*   Image layers that are no longer referenced by any images are removed.