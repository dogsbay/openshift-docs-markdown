{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of generic ephemeral volumes {id="generic-ephemeral-vols-overview_{{ context }}"}

Generic ephemeral volumes support network-attached storage, size limits, initial data population, and operations like cloning and snapshotting for temporary storage, with some driver-specific limitations. {._abstract}

Generic ephemeral volumes have the following features:

*   Storage can be local or network-attached.
*   Volumes can have a fixed size that pods cannot exceed.
*   Volumes might have some initial data, depending on the driver and parameters.
*   Typical operations on volumes are supported, assuming that the driver supports them, including snapshotting, cloning, resizing, and storage capacity tracking.


:::note

Generic ephemeral volumes do not support offline snapshotting and resizing.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp or microshift) %}
Due to this limitation, the following Container Storage Interface (CSI) drivers do not support the following features for generic ephemeral volumes:

*   Azure Disk CSI driver does not support resize.
*   Cinder CSI driver does not support snapshot.
{% endif %}

:::