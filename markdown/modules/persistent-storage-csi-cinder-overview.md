{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview {id="persistent-storage-csi-cinder-overview_{{ context }}"}

{{ product_title }} is capable of provisioning persistent volumes (PVs) using the Container Storage Interface (CSI) driver for OpenStack Cinder. {._abstract}

Familiarity with persistent storage and configuring CSI volumes is recommended when working with a CSI Operator and driver. For more information, see "Understanding persistent storage" and "Configuring CSI volumes."

To create CSI-provisioned PVs that mount to OpenStack Cinder storage assets, {{ product_title }} installs the OpenStack Cinder CSI Driver Operator and the OpenStack Cinder CSI driver in the `openshift-cluster-csi-drivers` namespace.

*   The _OpenStack Cinder CSI Driver Operator_ provides a CSI storage class that you can use to create PVCs. You can disable this default storage class if needed (see "Managing the default storage class").
*   The _OpenStack Cinder CSI driver_ enables you to create and mount OpenStack Cinder PVs.


:::note

{{ product_title }} provides automatic migration for the Cinder in-tree volume plugin to its equivalent CSI driver. For more information, see "CSI automatic migration".

:::



:::important

{{ product_title }} defaults to using the CSI plugin to provision Cinder storage.

:::