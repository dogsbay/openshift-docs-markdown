{%- set _mod_docs_content_type = "REFERENCE" %}
# Provisioned {{ gcp_short }} Infrastructure {id="ccs-gcp-provisioned_{{ context }}"}

This is an overview of the provisioned {{ gcp_first }} components on a deployed {{ product_title }} cluster. For a more detailed listing of all provisioned {{ gcp_short }} components, see the [{{ OCP }} documentation](https://access.redhat.com/documentation/en-us/openshift_container_platform/). {._abstract}

## Compute instances {id="gcp-policy-instances_{{ context }}"}

{{ gcp_short }} compute instances are required to deploy the control plane and data plane functions of {{ product_title }} in {{ gcp_short }}. Instance types might vary for control plane and infrastructure nodes depending on worker node count.

*   Single availability zone
    *   2 infra nodes  (n2-highmem-4 machine type: 4 vCPU and 32 GB RAM)
    *   3 control plane nodes  (n2-standard-8 machine type: 8 vCPU and 32 GB RAM)
    *   2 worker nodes (default n2-standard-4 machine type: 4 vCPU and 16 GB RAM)
*   Multiple availability zones
    *   3 infra nodes  (n2-highmem-4 machine type: 4 vCPU and 32 GB RAM)
    *   3 control plane nodes (n2-standard-8 machine type: 8 vCPU and 32 GB RAM)
    *   3 worker nodes (default n2-standard-4 machine type: 4 vCPU and 16 GB RAM)

## Storage {id="gcp-policy-storage_{{ context }}"}

*   Infrastructure volumes:
    *   300 GB SSD persistent disk (deleted on instance deletion)
    *   110 GB  Standard persistent disk (kept on instance deletion)
*   Worker volumes:
    *   300 GB SSD persistent disk  (deleted on instance deletion)
*   Control plane volumes:
    *   350 GB SSD persistent disk  (deleted on instance deletion)

## Installing a new cluster into an existing VPC {id="gcp-policy-vpc_{{ context }}"}

You must have at least one VPC network within the {{ GCP }} project where the {{ product_title }} cluster is being installed. The VPC network must include the following subnets within the same region as the cluster:

*   A control plane subnet for the OpenShift control plane.
*   A compute subnet for user workloads.
*   A Private Service Connect (PSC) subnet when a private cluster is deployed using PSC.


:::note

Installing a new {{ product_title }} cluster into a VPC that was automatically created by the installer for a different cluster is not supported.

IPv6 and dual-stack (IPv4 and IPv6) address ranges are not supported within the {{ product_title }} cluster.

:::


## Services {id="gcp-policy-services_{{ context }}"}

For a list of services that must be enabled on a {{ gcp_short }} CCS cluster, see the _Required API services_ table.