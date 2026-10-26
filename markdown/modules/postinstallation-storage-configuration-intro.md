{%- set _mod_docs_content_type = "CONCEPT" %}
# Postinstallation storage configuration {id="postinstallation-storage-configuration-intro_{{ context }}"}

You can configure persistent storage after installation by using dynamic or static provisioning to retain application data beyond the lifetime of individual containers. {._abstract}

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements, including storage configuration.

By default, containers operate by using the ephemeral storage or transient local storage. The ephemeral storage has a lifetime limitation. To store the data for a long time, you must configure persistent storage. You can configure storage by using one of the following methods:


Dynamic provisioning
:   You can dynamically provision storage on-demand by defining and creating storage classes that control different levels of storage, including storage access.


Static provisioning
:   You can use Kubernetes persistent volumes to make existing storage available to a cluster. Static provisioning can support various device configurations and mount options.