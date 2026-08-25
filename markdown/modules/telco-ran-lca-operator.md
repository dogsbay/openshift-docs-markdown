{%- set _mod_docs_content_type = "REFERENCE" %}
# Lifecycle Agent {id="telco-ran-lca-operator_{{ context }}"}

The Lifecycle Agent provides local lifecycle management services for image-based upgrade of {{ sno }} clusters. {._abstract}


New in this release
:   *   No reference design updates in this release

Description
:   The Lifecycle Agent provides local lifecycle management services for image-based upgrade of {{ sno }} clusters.
    Image-based upgrade is the recommended upgrade method for {{ sno }} clusters.


Limits and requirements
:   *   The Lifecycle Agent is not applicable in multi-node clusters or {{ sno }} clusters with an additional worker.
    *   The Lifecycle Agent requires a persistent volume that you create when installing the cluster.

For more information about partition requirements, see "Configuring a shared container directory between ostree stateroots when using {{ ztp }}".