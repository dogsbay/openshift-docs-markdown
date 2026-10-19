{%- set _mod_docs_content_type = "CONCEPT" %}
# Restart the cluster gracefully {id="graceful-restart-cluster-intro_{{ context }}"}

You can restart your {{ product_title }} cluster after a graceful shutdown by powering on nodes and verifying cluster health. The cluster returns to normal operations when nodes and Operators are healthy. {._abstract}

Even though the cluster is expected to be functional after the restart, the cluster might not recover due to unexpected conditions:

*   etcd data corruption during shutdown
*   Node failure due to hardware
*   Network connectivity issues

If your cluster fails to recover, follow the steps in "Restoring to an earlier cluster state".