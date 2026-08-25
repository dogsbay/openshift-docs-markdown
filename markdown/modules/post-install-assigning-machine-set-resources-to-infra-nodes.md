{%- set _mod_docs_content_type = "CONCEPT" %}
# Assigning machine set resources to infrastructure nodes {id="assigning-machine-set-resources-to-infra-nodes_{{ context }}"}

Apply taints and tolerations to infrastructure nodes so user workloads are not scheduled inadvertently to those nodes. {._abstract}

After creating an infrastructure machine set, the `worker` and `infra` roles are applied to new infra nodes. Nodes with the `infra` role are not counted toward the total number of subscriptions that are required to run the environment, even when the `worker` role is also applied.

However, when an infra node is assigned the worker role, there is a chance that user workloads can get assigned inadvertently to the infra node. To avoid this, you can apply a taint to the infra node and tolerations for the pods that you want to control.