{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing managed clusters with ClusterInstance resources and {{ rh_rhacm }} {id="ztp-creating-ztp-crs-for-multiple-managed-clusters_{{ context }}"}

{{ ztp_first }} uses `ClusterInstance` custom resources (CRs) in a Git repository to manage the processes that install {{ product_title }} clusters. The `ClusterInstance` CR contains cluster-specific parameters required for installation. It has options for applying select configuration CRs during installation including user defined extra manifests. {._abstract}

The {{ ztp }} plugin processes `ClusterInstance` CRs to generate a collection of CRs on the hub cluster. This triggers the assisted service in {{ rh_rhacm_first }} to install {{ product_title }} on the bare-metal host. You can find installation status and error messages in these CRs on the hub cluster.
You can provision single clusters manually or in batches with {{ ztp }}:


Provisioning a single cluster
:   Create a single `ClusterInstance` CR and related configuration CRs for the cluster, and apply them in the hub cluster to begin cluster provisioning. This is a good way to test your CRs before deploying on a larger scale.


Provisioning many clusters
:   Install managed clusters in batches of up to 500 by defining `ClusterInstance` and related CRs in a Git repository. ArgoCD uses the `ClusterInstance` CRs to deploy the clusters. The {{ rh_rhacm }} policy generator creates the manifests and applies them to the hub cluster. This starts the cluster provisioning process.