{%- set _mod_docs_content_type = "CONCEPT" %}
# Persistent volumes with RWO access mode permissions {id="microshift-pv-rwo-access-mode-permission_{{ context }}"}

To enable concurrent access for pods on a single node, configure the `ReadWriteOnce` (RWO) access mode for your Persistent Volume Claims (PVCs). This setting allows multiple workloads on the same node to read from and write to the same Persistent Volume (PV) simultaneously. {._abstract}

Sometimes pods of the same node are not able to read or write into the same PV. This happens when the pods in the node do not have the same SELinux context. 

Persistent volumes can be mounted, while later claimed by PVCs, with the RWO access mode.