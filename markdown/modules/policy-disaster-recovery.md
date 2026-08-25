{%- set _mod_docs_content_type = "REFERENCE" %}
# Disaster recovery {id="policy-disaster-recovery_{{ context }}"}

{{ product_title }} provides disaster recovery for failures that occur at the pod, worker node, infrastructure node, control plane node, and availability zone levels. {._abstract}

All disaster recovery requires that the customer use best practices for deploying highly available applications, storage, and cluster architecture (for example, single-zone deployment vs. multi-zone deployment) to account for the level of desired availability.

One single-zone cluster will not provide disaster avoidance or recovery in the event of an availability zone or region outage. Multiple single-zone clusters with customer-maintained failover can account for outages at the zone or region levels.

One multi-zone cluster will not provide disaster avoidance or recovery in the event of a full region outage. Multiple multi-zone clusters with customer-maintained failover can account for outages at the region level.