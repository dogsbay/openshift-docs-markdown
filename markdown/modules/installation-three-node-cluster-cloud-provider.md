{% if context == "installing-aws-three-node" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-azure-three-node" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-gcp-three-node" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-vsphere-three-node" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-nutanix-three-node" %}
{%- set nutanix = true -%}
{% endif %}
{% if context == "installing-openstack-three-node" %}
{%- set openstack = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a three-node cluster {id="installation-three-node-cluster_{{ context }}"}

To configure a three-node cluster, set the number of worker nodes to `0` in the `install-config.yaml` file before you deploy the cluster. {._abstract}

Setting the number of worker nodes to `0` ensures that the control plane machines are schedulable. This allows application workloads to be scheduled to run from the control plane nodes.


:::note

Because application workloads run from control plane nodes, additional subscriptions are required, as the control plane nodes are considered to be compute nodes.

:::


**Prerequisites**

*   You have an existing `install-config.yaml` file.

**Procedure**

{% if not (nutanix or openstack) %}
1.  Set the number of compute replicas to `0` in your `install-config.yaml` file, as shown in the following `compute` stanza:
{% endif %}

{% if nutanix or openstack %}
*   Set the number of compute replicas to `0` in your `install-config.yaml` file, as shown in the following `compute` stanza:
{% endif %}


.Example `install-config.yaml` file for a three-node cluster
```yaml
apiVersion: v1
baseDomain: example.com
compute:
- name: worker
  platform: {}
  replicas: 0
# ...
```

{% if not (vsphere or nutanix or openstack) %}
1.  If you are deploying a cluster with user-provisioned infrastructure:
    *   After you create the Kubernetes manifest files, make sure that the `spec.mastersSchedulable` parameter is set to `true` in `cluster-scheduler-02-config.yml` file. You can locate this file in `<installation_directory>/manifests`.
{%- if aws %}
    For more information, see "Creating the Kubernetes manifest and Ignition config files" in "Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates".
{%- endif %}
{%- if azure %}
    For more information, see "Creating the Kubernetes manifest and Ignition config files" in "Installing a cluster on Azure using ARM templates".
{%- endif %}
{%- if gcp %}
    For more information, see "Creating the Kubernetes manifest and Ignition config files" in "Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates".
{%- endif %}
    *   Do not create additional worker nodes.
{% endif %}

{% if vsphere %}
1.  If you are deploying a cluster with user-provisioned infrastructure:
    *   Configure your application ingress load balancer to route HTTP and HTTPS traffic to the control plane nodes. In a three-node cluster, the Ingress Controller pods run on the control plane nodes. For more information, see the "Load balancing requirements for user-provisioned infrastructure".
    *   After you create the Kubernetes manifest files, make sure that the `spec.mastersSchedulable` parameter is set to `true` in `cluster-scheduler-02-config.yml` file. You can locate this file in `<installation_directory>/manifests`.
{%- if vsphere %}
    For more information, see "Creating the Kubernetes manifest and Ignition config files" in "Installing a cluster on vSphere with user-provisioned infrastructure".
{%- endif %}
    *   Do not create additional worker nodes.
{% endif %}

{% if not (nutanix or openstack) %}

.Example `cluster-scheduler-02-config.yml` file for a three-node cluster
```yaml
apiVersion: config.openshift.io/v1
kind: Scheduler
metadata:
  creationTimestamp: null
  name: cluster
spec:
  mastersSchedulable: true
  policy:
    name: ""
status: {}
```
{% endif %}

{% if context == "installing-aws-three-node" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-azure-three-node" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-gcp-three-node" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-vsphere-three-node" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-nutanix-three-node" %}
{%- set nutanix = "" -%}
{% endif %}
{% if context == "installing-openstack-three-node" %}
{%- set openstack = "" -%}
{% endif %}