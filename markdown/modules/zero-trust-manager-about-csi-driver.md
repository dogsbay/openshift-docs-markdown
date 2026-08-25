{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIFFE CSI Driver {id="zero-trust-manager-about-csi-driver_{{ context }}"}

The SPIFFE Container Storage Interface (CSI) driver helps pods securely obtain their {{ svid_full }} by delivering the Workload API socket. By using Kubernetes ephemeral inline volumes, the driver simplifies how applications request temporary storage for identity management. {._abstract}

When the pod starts, the Kubelet calls the SPIFFE CSI driver to provision and mount a volume into the pod’s containers. The SPIFFE CSI driver mounts a directory that contains the SPIFFE Workload API into the pod. Applications in the pod then communicate with the Workload API to obtain their SVIDs. The driver guarantees that each SVID is unique.