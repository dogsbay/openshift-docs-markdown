{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster autoscaling {id="machine-mgmt-intro-autoscaling_{{ context }}"}

You can automatically scale your {{ product_title }} cluster to ensure flexibility for changing workloads. {._abstract}

To [autoscale](/machine_management/applying-autoscaling#applying-autoscaling) your cluster, you must first deploy a cluster autoscaler, and then deploy a machine autoscaler for each compute machine set.

*   The [_cluster autoscaler_](/machine_management/applying-autoscaling#cluster-autoscaler-about_applying-autoscaling) increases and decreases the size of the cluster based on deployment needs.
*   The [_machine autoscaler_](/machine_management/applying-autoscaling#machine-autoscaler-about_applying-autoscaling) adjusts the number of machines in the compute machine sets that you deploy in your {{ product_title }} cluster.