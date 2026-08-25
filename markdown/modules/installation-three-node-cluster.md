{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a three-node cluster {id="installation-three-node-cluster_{{ context }}"}

{%- if not (ibm_z or ibm_z_kvm) %}
To create smaller, resource-efficient clusters for testing and production, deploy a bare-metal cluster with zero compute machines. This optional configuration uses only three control plane machines, optimizing infrastructure resources for administrators and developers.
{% endif %}
{% if ibm_z or ibm_z_kvm %}
To create smaller, resource-efficient clusters for testing and production, deploy a bare-metal cluster with zero compute machines in a minimal three-node cluster. This optional configuration uses only three control plane machines, optimizing infrastructure resources for testing, development, and production purposes.
{% endif %} {._abstract}

In three-node {{ product_title }} environments, the three control plane machines are schedulable, which means that your application workloads run on them.

**Prerequisites**

*   You have an existing `install-config.yaml` file.

**Procedure**

*   Ensure that the number of compute replicas is set to `0` in your `install-config.yaml` file, as shown in the following `compute` stanza:
    ```yaml
    compute:
    - name: worker
      platform: {}
      replicas: 0
    # ...
    ```

    :::note

    You must set the value of the `replicas` parameter for the compute machines to `0` when you install {{ product_title }} on user-provisioned infrastructure, regardless of the number of compute machines you deploy. In installer-provisioned installations, the parameter controls the number of compute machines that the cluster creates and manages for you. This does not apply to user-provisioned installations, where you deploy the compute machines manually.
    
    :::

{%- if ibm_z or ibm_z_kvm %}

    :::note

    The preferred resource for control plane nodes is six vCPUs and 21 GB. For three control plane nodes this is the memory + vCPU equivalent of a minimum five-node cluster. Back the three nodes, each installed on a 120 GB disk, with three IFLs that are SMT2 enabled. The minimum tested setup is three vCPUs and 10 GB on a 120 GB disk for each control plane node.
    
    :::

{%- endif %}

    **Next steps**

For three-node cluster installations, follow these next steps:

*   If you are deploying a three-node cluster with zero compute nodes, the Ingress Controller pods run on the control plane nodes. In three-node cluster deployments, you must configure your application ingress load balancer to route HTTP and HTTPS traffic to the control plane nodes. See the _Load balancing requirements for user-provisioned infrastructure_ section for more information.
*   When you create the Kubernetes manifest files in the following procedure, ensure that the `mastersSchedulable` parameter in the `<installation_directory>/manifests/cluster-scheduler-02-config.yml` file is set to `true`. This enables your application workloads to run on the control plane nodes.
*   Do not deploy any compute nodes when you create the {{ op_system_first }} machines.

{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}