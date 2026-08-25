{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ ibm_power_server_name }} Block CSI Driver Operator overview {id="persistent-storage-csi-ibm-powervs-block-overview_{{ context }}"}

{{ product_title }} can provision persistent volumes (PVs) by using the Container Storage Interface (CSI) driver for {{ ibm_power_server_name }} Block Storage. {._abstract}

Familiarity with persistent storage and configuring CSI volumes is helpful when working with a CSI Operator and driver. For more information, see "Understanding persistent storage" and "Configuring CSI volumes".

To create CSI-provisioned PVs that mount to {{ ibm_power_server_name }} Block storage assets, {{ product_title }} installs the {{ ibm_power_server_name }} Block CSI Driver Operator and the {{ ibm_power_server_name }} Block CSI driver by default in the `openshift-cluster-csi-drivers` namespace.

*   The _{{ ibm_power_server_name }} Block CSI Driver Operator_ provides two storage classes named `ibm-powervs-tier1` (default), and `ibm-powervs-tier3` for different tiers that you can use to create persistent volume claims (PVCs). The {{ ibm_power_server_name }} Block CSI Driver Operator supports dynamic volume provisioning by allowing storage volumes to be created on-demand, eliminating the need for cluster administrators to pre-provision storage.
*   With the _{{ ibm_power_server_name }} Block CSI driver_ you can create and mount {{ ibm_power_server_name }} Block PVs.