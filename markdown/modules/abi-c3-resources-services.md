{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ oci }} infrastructure resources and services {id="abi-c3-resources-services_{{ context }}"}

You must create an {{ oci_edge_no_rt }} environment on your virtual machine (VM) shape. By creating this environment, you can install {{ product_title }} and deploy a cluster on an infrastructure that supports a wide range of cloud options and strong security policies. {._abstract}

Having prior knowledge of {{ oci_first_no_rt }} components can help you with understanding the concept of {{ oci }} resources and how you can configure them to meet your organizational needs.


:::important

To ensure compatibility with {{ product_title }}, you must set `A` as the record type for each DNS record and name records as follows:

*   `api.<cluster_name>.<base_domain>`, which targets the `apiVIP` parameter of the API load balancer
*   `api-int.<cluster_name>.<base_domain>`, which targets the `apiVIP` parameter of the API load balancer
*   `*.apps.<cluster_name>.<base_domain>`, which targets the `ingressVIP` parameter of the Ingress load balancer

The `api.&#42;` and `api-int.&#42;` DNS records relate to control plane machines, so you must ensure that all nodes in your installed {{ product_title }} cluster can access these DNS records.

:::


**Prerequisites**

*   You configured an {{ oci }} account to host the {{ product_title }} cluster.
See "Access and Considerations" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) (Oracle documentation).

**Procedure**

*   Create the required {{ oci }} resources and services.

    For more information, see "Terraform Script Execution" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) (Oracle documentation).