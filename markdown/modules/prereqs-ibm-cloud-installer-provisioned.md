{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on {{ ibm_cloud_name }} {id="prereqs-ibm-cloud-installer-provisioned_{{ context }}"}

Before installing an {{ product_title }} cluster on {{ ibm_cloud_name }} by using installer-provisioned infrastructure, ensure that you have configured your {{ ibm_cloud_name }} account, firewall, and the `ccoctl` utility. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You configured an {{ ibm_cloud_name }} account to host the cluster.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.
*   You configured the `ccoctl` utility before you installed the cluster.