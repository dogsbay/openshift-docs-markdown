{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage types {id="storage-types_{{ context }}"}

{{ product_title }} storage is broadly classified into two categories, namely ephemeral storage and persistent storage. {._abstract}

## Ephemeral storage {id="ephemeral-storage_{{ context }}"}

Pods and containers are ephemeral or transient in nature and designed for stateless applications. Ephemeral storage allows administrators and developers to better manage the local storage for some of their operations.

## Persistent storage {id="persistent-storage_{{ context }}"}

Stateful applications deployed in containers require persistent storage. {{ product_title }} uses a pre-provisioned storage framework called persistent volumes (PV) to allow cluster administrators to provision persistent storage. The data inside these volumes can exist beyond the lifecycle of an individual pod. Developers can use persistent volume claims (PVCs) to request storage requirements.