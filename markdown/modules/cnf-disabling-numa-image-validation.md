{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling image validation {id="cnf-disabling-numa-image-validation_{{ context }}"}

You can disable scheduler or Resource Topology Exporter (RTE) image validation by setting the appropriate environment variables to `false` in the NUMA Resources Operator subscription. {._abstract}


:::warning

Disabling image validation removes important security controls.
Any image that you set in the custom resource runs without filtering or validation.
With validation disabled, users with write access to these custom resources can specify arbitrary container images that will run with elevated privileges.

Only disable validation in exceptional circumstances.
If you disable validation, ensure that only cluster administrators can change these resources, and implement additional security controls to verify image integrity.

:::