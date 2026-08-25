{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding Agent-based Installer {id="understanding-agent-install_{{ context }}"}

As an {{ product_title }} user, you can leverage the advantages of the Assisted Installer hosted service in disconnected environments. {._abstract}

The Agent-based Installer uses a bootable ISO that contains the Assisted discovery agent and the Assisted Service. Both are required to perform the cluster installation, but the Assisted Service runs on only one of the hosts.


:::note

Currently, ISO boot support on {{ ibm_z_name }} (`s390x`) is available only for {{ op_system_base_full }} KVM, which provides the flexibility to choose either PXE or ISO-based installation. For installations with z/VM and Logical Partition (LPAR), only PXE boot is supported.

:::


The `openshift-install agent create image` subcommand generates an ephemeral ISO based on the inputs that you provide. You can choose to provide inputs through the following manifests:

Preferred manifests:

*   `install-config.yaml`
*   `agent-config.yaml`

Optional ZTP manifests:

*   `cluster-manifests/cluster-deployment.yaml`
*   `cluster-manifests/agent-cluster-install.yaml`
*   `cluster-manifests/pull-secret.yaml`
*   `cluster-manifests/infraenv.yaml`
*   `cluster-manifests/cluster-image-set.yaml`
*   `cluster-manifests/nmstateconfig.yaml`
*   `mirror/registries.conf`
*   `mirror/ca-bundle.crt`

## Agent-based Installer workflow {id="agent-based-installer-workflow_{{ context }}"}

One of the control plane hosts runs the Assisted Service at the start of the boot process and eventually becomes the bootstrap host. This node is called the **rendezvous host** (or node 0).

The Assisted Service ensures that all the hosts meet the requirements and triggers an {{ product_title }} cluster deployment. All the nodes have the {{ op_system_base_full }} image written to the disk. The non-bootstrap nodes reboot and initiate a cluster deployment.

Once the nodes are rebooted, the rendezvous host reboots and joins the cluster. The bootstrapping is then complete and the cluster is deployed.

**Figure 1. Node installation workflow**

![Agent-based installer workflow](/_assets/images/agent-based-installer-workflow.png)

You can install a disconnected {{ product_title }} cluster through the `openshift-install agent create image` subcommand for the following topologies:

*   **A single-node {{ product_title }} cluster**: A node that is both a control plane and compute.
*   **A three-node {{ product_title }} cluster** : A compact cluster that has three control plane nodes that are also compute nodes.
*   **Highly available {{ product_title }} cluster (HA)**: Three control plane nodes with any number of compute nodes.
*   **Two-node {{ product_title }} cluster with Arbiter**: Two control plane nodes with one local arbiter node. For more information, see "About a local arbiter node".

## Recommended resources for topologies {id="agent-based-installer-recommended-resources_{{ context }}"}

The following cluster resources are recommended for each topology:

**Recommended cluster resources**

<table>
<thead>
<tr>
  <th>Topology</th>
  <th>Number of control plane nodes</th>
  <th>Number of compute nodes</th>
  <th>vCPU</th>
  <th>Memory</th>
  <th>Storage</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Single-node cluster</td>
  <td>1</td>
  <td>0</td>
  <td>8 vCPUs</td>
  <td>16 GB of RAM</td>
  <td>120 GB</td>
</tr>
<tr>
  <td rowspan="2">Two-node OpenShift cluster with Arbiter</td>
  <td>2 (control plane nodes)</td>
  <td>0</td>
  <td>4 vCPUs</td>
  <td>16 GB of RAM</td>
  <td>120 GB</td>
</tr>
<tr>
  <td>1 (arbiter node)</td>
  <td>0</td>
  <td>2 vCPUs</td>
  <td>8 GB of RAM</td>
  <td>50 GB</td>
</tr>
<tr>
  <td>Two-node OpenShift cluster with fencing (TNF)</td>
  <td>2</td>
  <td>0</td>
  <td>4 vCPUs</td>
  <td>16 GB of RAM</td>
  <td>120 GB</td>
</tr>
<tr>
  <td>Compact cluster</td>
  <td>3</td>
  <td>0 or 1</td>
  <td>8 vCPUs</td>
  <td>16 GB of RAM</td>
  <td>120 GB</td>
</tr>
<tr>
  <td>HA cluster</td>
  <td>3 to 5</td>
  <td>2 and above</td>
  <td>8 vCPUs</td>
  <td>16 GB of RAM</td>
  <td>120 GB</td>
</tr>
</tbody>
</table>


:::note

You can use as few as 4 vCPUs for an {{ sno }} cluster.

However, running {{ sno }} on 4 vCPUs leaves very little "headroom" for user applications, and creates a high risk of resource contention and performance degradation.

To ensure cluster stability at this threshold, you must take steps to minimize the total resource footprint of the cluster, such as limiting the amount of workloads running on the cluster or limiting cluster capabilities.
For more information, see "Cluster capabilities".

Otherwise, it is recommended to provide more compute resources to the cluster.

:::


## Supported platforms {id="agent-based-installer-supported-platforms_{{ context }}"}

In the `install-config.yaml` file, specify the platform on which to perform the installation. The following platforms are supported:

*   `baremetal`
*   `vsphere`
*   `nutanix`
*   `external`
*   `none`

For a two-node {{ product_title }} cluster with fencing (TNF), only the following platforms are supported:

*   `baremetal`
*   `external`
*   `none`

    The `vsphere` and `nutanix` platforms are not supported for two-node clusters with fencing.


    :::important

    For platform `none`:

    *   The `none` option requires the provision of DNS name resolution and load balancing infrastructure in your cluster. See _Requirements for a cluster using the platform "none" option_ in the "Additional resources" section for more information.
    *   See "Deploying OpenShift 4.x on non-tested platforms using the bare metal install method" before you attempt to install an {{ product_title }} cluster in virtualized or cloud environments.
    
    :::



    :::note

    For installations on {{ ibm_z_name }} (`s390x`) architecture, the minimum memory requirement is 24 GB RAM per host instead of 16 GB.
    
    :::