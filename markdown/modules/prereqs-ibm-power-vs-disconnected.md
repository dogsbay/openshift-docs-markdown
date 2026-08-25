{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prereqs-ibm-power-vs-disconnected_{{ context }}"}

Before you install a {{ product_title }} cluster on {{ ibm_power_server_name }} in a restricted network, complete the prerequisite tasks to mirror images, configure an {{ ibm_cloud_name }} account, and prepare an existing Virtual Private Cloud (VPC). {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You configured an {{ ibm_cloud_name }} account to host the cluster.
*   You mirrored the images for a disconnected installation to your registry and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that machine to complete all installation steps.
    
    :::

*   You have an existing VPC in {{ ibm_cloud_name }}. When installing a cluster in a restricted network, you cannot use the installer-provisioned VPC. You must use a user-provisioned VPC that satisfies one of the following requirements:
    *   Contains the mirror registry
    *   Has firewall rules or a peering connection to access the mirror registry hosted elsewhere
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.
*   You configured the `ccoctl` utility before you installed the cluster.