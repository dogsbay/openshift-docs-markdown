{%- set _mod_docs_content_type = "CONCEPT" %}
# Using {{ ztp }} to provision clusters at the network far edge {id="about-ztp_{{ context }}"}

{{ rh_rhacm_first }} manages clusters in a hub-and-spoke architecture, where a single hub cluster manages many spoke clusters. Hub clusters running {{ rh_rhacm }} provision and deploy the managed clusters by using {{ ztp_first }} and the assisted service that is deployed when you install {{ rh_rhacm }}. {._abstract}

The assisted service handles provisioning of {{ product_title }} on single node clusters, three-node clusters, or standard clusters running on bare metal.

A high-level overview of using {{ ztp }} to provision and maintain bare-metal hosts with {{ product_title }} is as follows:

*   A hub cluster running {{ rh_rhacm }} manages an {{ product_registry }} that mirrors the {{ product_title }} release images. {{ rh_rhacm }} uses the {{ product_registry }} to provision the managed clusters.
*   You manage the bare-metal hosts in a YAML format inventory file, versioned in a Git repository.
*   You make the hosts ready for provisioning as managed clusters, and use {{ rh_rhacm }} and the assisted service to install the bare-metal hosts on site.

Installing and deploying the clusters is a two-stage process, involving an initial installation phase, and a subsequent configuration and deployment phase. The following diagram illustrates this workflow:

![Using GitOps and {{ ztp }} to install and deploy managed clusters](/images/474_OpenShift_OpenShift_RAN_RDS_arch_updates_1023.png)