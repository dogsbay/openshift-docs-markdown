{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ oci }} infrastructure resources and services {id="abi-oci-resources-services_{{ context }}"}

You must create an {{ oci_distributed_no_rt }} environment on your virtual machine (VM) or bare-metal shape. By creating this environment, you can install {{ product_title }} and deploy a cluster on an infrastructure that supports a wide range of cloud options and strong security policies. {._abstract}

Having prior knowledge of {{ oci_first_no_rt }} components can help you with understanding the concept of {{ oci }} resources and how you can configure them to meet your organizational needs.

The Agent-based Installer method for installing an {{ product_title }} cluster on {{ oci_distributed_no_rt }} requires that you manually create {{ oci }} resources and services.


:::important

To ensure compatibility with {{ product_title }}, you must set `A` as the record type for each DNS record and name records as follows:

*   `api.<cluster_name>.<base_domain>`, which targets the `apiVIP` parameter of the API load balancer
*   `api-int.<cluster_name>.<base_domain>`, which targets the `apiVIP` parameter of the API load balancer
*   `*.apps.<cluster_name>.<base_domain>`, which targets the `ingressVIP` parameter of the Ingress load balancer

The `api.&#42;` and `api-int.&#42;` DNS records relate to control plane machines, so you must ensure that all nodes in your installed {{ product_title }} cluster can access these DNS records.

:::


**Prerequisites**

*   You configured an {{ oci }} account to host the {{ product_title }} cluster. See [Prerequisites (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/install-prereq.htm).

**Procedure**

*   Create the required {{ oci }} resources and services.

    For installations in a connected environment, see [Provisioning Cluster Infrastructure Using Terraform (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/openshift-on-oci/agent-installer-using-stack.htm).

    For installations in a disconnected environment, see [Provisioning OCI Resources for the Agent-based Installer in Disconnected Environments (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/agent-prereq.htm).