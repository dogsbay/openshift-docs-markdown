{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of deploying managed clusters with {{ ztp }} {id="ztp-ztp-building-blocks_{{ context }}"}

{{ rh_rhacm_first }} uses {{ ztp_first }} to deploy single-node {{ product_title }} clusters, three-node clusters, and standard clusters. You manage site configuration data as {{ product_title }} custom resources (CRs) in a Git repository. {{ ztp }} uses a declarative GitOps approach for a develop once, deploy anywhere model to deploy the managed clusters. {._abstract}

The deployment of the clusters includes:

*   Installing the host operating system (RHCOS) on a blank server
*   Deploying {{ product_title }}
*   Creating cluster policies and site subscriptions
*   Making the necessary network configurations to the server operating system
*   Deploying profile Operators and performing any needed software-related configuration, such as performance profile, PTP, and SR-IOV


:::note

To deploy clusters with virtualized control planes running on {{ VirtProductName }} VMs instead of physical servers, you can use KubeVirt Redfish to expose VMs as Redfish endpoints.
For more information, see "Virtualized control planes".

:::