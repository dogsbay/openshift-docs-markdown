{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a cluster on {{ oci_distributed_no_rt }} {id="running-cluster-oci-agent-based_{{ context }}"}

To run a cluster on {{ oci_distributed }}, you must upload the generated agent ISO image to the default Object Storage bucket on {{ oci_distributed_no_rt }}. {._abstract}

Additionally, you must create a compute instance from the supplied base image, so that {{ product_title }} and {{ oci_distributed_no_rt }} can communicate with each other for the purposes of running the cluster on {{ oci_distributed_no_rt }}.


:::note

{{ oci_distributed_no_rt }} supports the following {{ product_title }} cluster topologies:

*   Installing an {{ product_title }} cluster on a single node.
*   A highly available cluster that has a minimum of three control plane instances and two compute instances.
*   A compact three-node cluster that has a minimum of three control plane instances.

:::


**Prerequisites**

*   You generated an agent ISO image. See the "Creating configuration files for installing a cluster on OCI" section.

**Procedure**

1.  Upload the agent ISO image to Oracle’s default Object Storage bucket and import the agent ISO image as a custom image to this bucket. Ensure you that you configure the custom image to boot in Unified Extensible Firmware Interface (UEFI) mode. For more information, see [Creating the {{ product_title }} ISO Image (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/installing-agent-image-creation.htm).
1.  Create a compute instance from the supplied base image for your cluster topology. See [Creating the {{ product_title }} cluster on {{ oci }} (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/installing-agent-first-node.htm).

    :::important

    Before you create the compute instance, check that you have enough memory and disk resources for your cluster. Additionally, ensure that at least one compute instance has the same IP address as the address stated under `rendezvousIP` in the `agent-config.yaml` file.
    
    :::