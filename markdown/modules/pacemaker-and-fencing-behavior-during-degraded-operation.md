{%- set _mod_docs_content_type = "CONCEPT" %}
# Pacemaker and fencing behavior during degraded operation {id="pacemaker-and-fencing-behavior-during-degraded-operation_{{ context }}"}

During degraded operation, the Pacemaker cluster manager transitions from a distributed coordination model to a localized enforcement structure on the surviving node. {._abstract}

Degraded cluster operations include the following structural behaviors:

*   The surviving node remains `ONLINE` and continues managing etcd, kubelet, and Shoot The Other Node In The Head (STONITH) fence devices.
*   The failed node is reported as `OFFLINE` or `UNCLEAN OFFLINE`, depending on whether the shutdown was clean.
*   Fencing devices remain enabled. The STONITH device for the failed node is still available on the surviving node. However, the STONITH device for the surviving node cannot be used because the node that would trigger it is offline.
*   Pacemaker does not attempt to restart resources on the failed node or migrate resources to it.


:::important

Mutual fencing protection is unavailable during degraded operations. Fencing actions cannot execute against the surviving node because the communication and execution paths from the peer node are offline.

:::