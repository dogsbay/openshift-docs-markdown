{%- set _mod_docs_content_type = "REFERENCE" %}
# CSI architecture {id="persistent-storage-csi-architecture_{{ context }}"}

Container Storage Interface (CSI) architecture uses containerized drivers and bridge components for communication between {{ product_title }} and storage backends. Each driver requires controller deployments and daemon sets for volume operations. Multiple drivers can run simultaneously. {._abstract}

The Container Storage Interface (CSI) allows {{ product_title }} to consume storage from storage back ends that implement the CSI interface as persistent storage.


:::note

{{ product_title }} {{ product_version }} supports version 1.6.0 of the CSI specification.

:::


For more information about the CSI spec, see "CSI spec".

CSI drivers are typically shipped as container images. These containers are not aware of {{ product_title }} where they run. To use CSI-compatible storage back end in {{ product_title }}, the cluster administrator must deploy several components that serve as a bridge between {{ product_title }} and the storage driver.

The following diagram provides a high-level overview about the components running in pods in the {{ product_title }} cluster.

![Architecture of CSI components](/_assets/images/csi-arch-rev1.png)

It is possible to run multiple CSI drivers for different storage back ends. Each driver needs its own external controllers deployment and daemon set with the driver and CSI registrar.