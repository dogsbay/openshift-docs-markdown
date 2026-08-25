{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying clusters and GCP Filestore {id="persistent-storage-csi-google-cloud-file-delete-instances_{{ context }}"}

To prevent orphaned resources and potential costs, verify that all Google Cloud Filestore resources are deleted after cluster destruction, as automated cleanup might not remove all resources. {._abstract}

Typically, if you destroy a cluster, the {{ product_title }} installer deletes all of the cloud resources that belong to that cluster. However, due to the special nature of the Google Compute Platform (GCP) Filestore resources, the automated cleanup process might not remove all of them in some rare cases. 

Therefore, Red Hat recommends that you verify that all cluster-owned Filestore resources are deleted by the uninstall process.

**Procedure**

1.  Access your Google Cloud account using the GUI or CLI.
1.  Search for any resources with the `kubernetes-io-cluster-${{ CLUSTER_ID }}=owned` label. 

    Since the cluster ID is unique to the deleted cluster, there should not be any remaining resources with that cluster ID.
1.  In the unlikely case there are some remaining resources, delete them.