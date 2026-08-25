{%- set _mod_docs_content_type = "CONCEPT" %}

# Overview of Manila CSI Driver Operator {id="persistent-storage-csi-manila-overview_{{ context }}"}

{{ product_title }} is capable of provisioning persistent volumes (PVs) using the Container Storage Interface (CSI) driver for the OpenStack Manila shared file system service. {._abstract}

Familiarity with persistent storage] and configuring CSI volumes is recommended when working with CSI Operator and driver. For more information, see "Understanding persistent storage" and "Configuring CSI volumes".

To create CSI-provisioned PVs that mount to Manila storage assets, {{ product_title }} installs the Manila CSI Driver Operator and the Manila CSI driver by default on any OpenStack cluster that has the Manila service enabled.


Manila CSI Driver Operator
:   The Manila CSI Driver Operator creates the required storage class that is needed to create persistent volumes claims (PVCs) for all available Manila share types. The Operator is installed in the `openshift-cluster-csi-drivers` namespace.


Manila CSI driver
:   The Manila CSI driver enables you to create and mount Manila PVs. The driver is installed in the `openshift-manila-csi-driver` namespace.