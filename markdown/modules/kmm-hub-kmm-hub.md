{%- set _mod_docs_content_type = "CONCEPT" %}
# KMM-Hub {id="kmm-hub-kmm-hub_{{ context }}"}

KMM-Hub is a hub-cluster edition of Kernel Module Management for {{ product_title }} multi-cluster deployments. It monitors spoke kernel versions, runs image builds and kmod signing on the hub, and delivers trimmed `Module` resources to spokes through {{ rh_rhacm }}. {._abstract}


:::note

KMM-Hub cannot be used to load kernel modules on the hub cluster. Install the regular edition of KMM to load kernel modules.

:::