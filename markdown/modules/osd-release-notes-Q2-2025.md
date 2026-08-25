{%- set _mod_docs_content_type = "REFERENCE" %}
# Q2 2025 {id="osd-q2-2025_{{ context }}"}

The following items were added during the second quarter of 2025. {._abstract}


Updated version requirements for migration from OpenShift SDN to OVN-Kubernetes
:   Your cluster version must be 4.16.43 or above to initiate live migration from the OpenShift SDN network plugin to the OVN-Kubernetes network plugin.

    If your cluster uses the OpenShift SDN network plugin, you cannot upgrade to future major versions of {{ product_title }} without migrating to OVN-Kubernetes.

    For more information about migrating to OVN-Kubernetes, see [Migrating from OpenShift SDN network plugin to OVN-Kubernetes network plugin](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/ovn-kubernetes_network_plugin/migrate-from-openshift-sdn-osd).


New version of {{ product_title }} available
:   {{ product_title }} on {{ gcp }} and {{ product_title }} on {{ aws }} versions 4.19 are now available for new clusters.


Support for enabling and disabling Secure Boot for Shielded VMs on a per machine basis
:   {{ product_title }} on {{ GCP }} users can now enable or disable Secure Boot for Shielded VMs on a per machine basis. For more information, see [Managing compute nodes](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/cluster_administration/managing-compute-nodes-using-machine-pools#osd-managing-worker-nodes).