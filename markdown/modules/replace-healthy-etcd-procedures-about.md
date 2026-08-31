{%- set _mod_docs_content_type = "CONCEPT" %}
# Replacing a healthy etcd member {id="replace-healthy-etcd-procedures-about_{{ context }}"}

To replace a healthy etcd member without disrupting cluster operations, choose the procedure that matches your control plane configuration. You can use a control plane machine set, the Machine API, or scale up and scale down control plane nodes. {._abstract}


:::important

Take an etcd backup before you replace a healthy etcd member so that you can restore your cluster if any issues occur. For more information, see "Backing up etcd data".

:::


Depending on your cluster configuration, use one of the following procedures:

*   Replacing a healthy etcd member with a control plane machine set
*   Replacing a healthy etcd member with the Machine API
*   Replacing a healthy etcd member by scaling up and scaling down

For clusters that were installed by using the {{ ai_full }}, see "Replacing a control plane node in a healthy cluster" in the {{ ai_full }} documentation.