{%- set _mod_docs_content_type = "CONCEPT" %}
# KubeVirt CSI storage security and isolation {id="hcp-virt-storage-security-isolation_{{ context }}"}

KubeVirt Container Storage Interface (CSI) extends the storage capabilities of the underlying infrastructure cluster to hosted clusters.  {._abstract}

The CSI driver ensures secure and isolated access to the infrastructure storage classes and hosted clusters by using the following security constraints:

*   The storage of a hosted cluster is isolated from the other hosted clusters.
*   Compute nodes in a hosted cluster do not have a direct API access to the infrastructure cluster. The hosted cluster can provision storage on the infrastructure cluster only through the controlled KubeVirt CSI interface.
*   The hosted cluster does not have access to the KubeVirt CSI cluster controller. As a result, the hosted cluster cannot access arbitrary storage volumes on the infrastructure cluster that are not associated with the hosted cluster. The KubeVirt CSI cluster controller runs in a pod in the hosted control plane namespace.
*   Role-based access control (RBAC) of the KubeVirt CSI cluster controller limits the persistent volume claim (PVC) access to only the hosted control plane namespace. Therefore, KubeVirt CSI components cannot access storage from the other namespaces.