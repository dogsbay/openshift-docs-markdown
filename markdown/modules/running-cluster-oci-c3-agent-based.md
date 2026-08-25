{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a cluster on {{ oci_edge_no_rt }} {id="running-cluster-oci-c3-agent-based_{{ context }}"}

To run a cluster on {{ oci_edge }}, you must first convert your generated Agent ISO image into an {{ oci }} image, upload it to an {{ oci }} Home Region Bucket, and then import the uploaded image to the {{ oci_edge_no_rt }} system. {._abstract}


:::note

{{ oci_edge_no_rt }} supports the following {{ product_title }} cluster topologies:

*   Installing an {{ product_title }} cluster on a single node.
*   A highly available cluster that has a minimum of three control plane instances and two compute instances.
*   A compact three-node cluster that has a minimum of three control plane instances.

:::


**Prerequisites**

*   You generated an Agent ISO image. See the "Creating configuration files for installing a cluster on {{ oci_edge_no_rt }}" section.

**Procedure**

1.  Convert the agent ISO image to an {{ oci }} image, upload it to an {{ oci }} Home Region Bucket, and then import the uploaded image to the {{ oci_edge_no_rt }} system.
See "Prepare the OpenShift Master Images" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer (Oracle documentation)](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) for instructions.
1.  Create control plane instances on {{ oci_edge_no_rt }}.
See "Create control plane instances on C3 and Master Node LB Backend Sets" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer (Oracle documentation)](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) for instructions.
1.  Create a compute instance from the supplied base image for your cluster topology.
See "Add worker nodes" in [OpenShift Cluster Setup with Agent Based Installer on Compute Cloud@Customer (Oracle documentation)](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_agent_based_installation.pdf?source=:em:nl:mt::::PCATP) for instructions.

    :::important

    Before you create the compute instance, check that you have enough memory and disk resources for your cluster. Additionally, ensure that at least one compute instance has the same IP address as the address stated under `rendezvousIP` in the `agent-config.yaml` file.
    
    :::