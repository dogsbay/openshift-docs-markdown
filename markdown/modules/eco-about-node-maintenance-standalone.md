{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Node Maintenance Operator {id="eco-about-node-maintenance-operator_{{ context }}"}

The Node Maintenance Operator watches for new or deleted `NodeMaintenance` CRs. When a new `NodeMaintenance` CR is detected, no new workloads are scheduled and the node is cordoned off from the rest of the cluster. All pods that can be evicted are evicted from the node. When a `NodeMaintenance` CR is deleted, the node that is referenced in the CR is made available for new workloads.


:::note

Using a `NodeMaintenance` CR for node maintenance tasks achieves the same results as the `oc adm cordon` and `oc adm drain` commands using standard {{ product_title }} CR processing.

:::