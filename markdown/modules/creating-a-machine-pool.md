{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a machine pool {id="creating_a_machine_pool_{{ context }}"}

A machine pool is created when you install a {{ product_title }} cluster. After installation, you can create additional machine pools for your cluster by using {{ cluster_manager }} or the {{ rosa_cli_first }}.

:::note

For users of `rosa` version 1.2.25 and earlier versions, the machine pool created along with the cluster is identified as `Default`. For users of `rosa` version 1.2.26 and later, the machine pool created along with the cluster is identified as `worker`.

:::