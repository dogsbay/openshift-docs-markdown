{%- set _mod_docs_content_type = "CONCEPT" %}
# Extending the trusted image list {id="cnf-extending-trusted-numa-images_{{ context }}"}

You can add a custom scheduler image digest to the NUMA Resources Operator trusted list by setting the `SCHEDULER_IMAGE_DIGESTS` environment variable in the operator subscription.
To use a custom Resource Topology Exporter (RTE) image, see "RTE image validation". {._abstract}


:::warning

Adding a custom scheduler image to the trusted list allows that image to run with scheduler privileges. Verify that you trust the source and integrity of the image before you add it.

Add a custom scheduler image only when your environment requires it.

:::