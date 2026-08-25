{%- set _mod_docs_content_type = "REFERENCE" %}
# Capabilities during degraded TNF operation {id="capabilities-during-degraded-tnf-operation_{{ context }}"}

When a two-node OpenShift cluster with fencing (TNF) cluster is operating in a degraded state, some of the cluster capabilities are still available. {._abstract}

**Cluster capabilities during degraded operation**

| Capability | Available |
| --- | --- |
| Kubernetes API server (read and write) | Yes |
| Workloads on the surviving node | Yes |
| Scheduling new workloads to the surviving node | Yes |
| etcd (single-member quorum) | Yes |
| Cluster monitoring and alerting | Yes |
| Ingress (single endpoint) | Yes |
| Existing certificates | Yes |
| Static pod restarts using existing configuration | Yes |
| etcd redundancy | No |
| Fencing of the surviving node | No |
| Cluster upgrades | No |
| etcd CA rotation | No |
| `MachineConfig` object changes that require a node reboot | No |
| Workloads or storage tied exclusively to the failed node | No |