{%- set _mod_docs_content_type = "CONCEPT" %}
# About dynamic provisioning {id="about_{{ context }}"}

The `StorageClass` resource object describes and classifies storage that can be requested, and provides a means for passing parameters for dynamically provisioned storage on-demand.  {._abstract}

`StorageClass` objects can also serve as a management mechanism for controlling different levels of storage and access to the storage. Cluster Administrators (`cluster-admin`) or Storage Administrators (`storage-admin`) define and create the `StorageClass` objects that users can request without needing any detailed knowledge about the underlying storage volume sources.

The {{ product_title }} persistent volume framework enables this functionality and allows administrators to provision a cluster with persistent storage. The framework also gives users a way to request those resources without having any knowledge of the underlying infrastructure.

Many storage types are available for use as persistent volumes in {{ product_title }}. While all of them can be statically provisioned by an administrator, some types of storage are created dynamically using the built-in provider and plugin APIs.