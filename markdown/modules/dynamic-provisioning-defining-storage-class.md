{%- set _mod_docs_content_type = "CONCEPT" %}
# Defining a storage class {id="dynamic-provisioning-defining-storage-class_{{ context }}"}

`StorageClass` objects apply cluster-wide and are available to all namespaces. Only users with cluster-admin or storage-admin privileges can create or modify them. This centralized control ensures consistent storage policies across your cluster while requiring application teams to coordinate with administrators for custom storage configurations. {._abstract}

{% if not (microshift or openshift_rosa or openshift_rosa_hcp) %}

:::important

The Cluster Storage Operator might install a default storage class depending on the platform in use. This storage class is owned and controlled by the Operator. It cannot be deleted or modified beyond defining annotations and labels. If different behavior is required, you must define a custom storage class.

:::

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}

:::important

The Cluster Storage Operator installs a default storage class. This storage class is owned and controlled by the Operator. It cannot be deleted or modified beyond defining annotations and labels. If different behavior is required, you must define a custom storage class.

:::

{% endif %}

The following sections describe the basic definition for a `StorageClass` object and specific examples for each of the supported plugin types.