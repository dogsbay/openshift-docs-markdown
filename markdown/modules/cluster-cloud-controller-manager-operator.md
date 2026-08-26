{% if context == "operator-reference" %}
{%- set operators = true -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Cloud Controller Manager Operator {id="cluster-cloud-controller-manager-operator_{{ context }}"}

{% if cluster_caps %}
The Cloud Controller Manager Operator provides features for the `CloudControllerManager` capability. {._abstract}


:::note

Currently, disabling the `CloudControllerManager` capability is not supported on all platforms.

:::


You can determine if your cluster supports disabling the `CloudControllerManager` capability by checking values in the installation configuration (`install-config.yaml`) file for your cluster.

In the `install-config.yaml` file, locate the `platform` parameter.

*   If the value of the `platform` parameter is `Baremetal` or `None`, you can disable the `CloudControllerManager` capability on your cluster.
*   If the value of the `platform` parameter is `External`, locate the `platform.external.cloudControllerManager` parameter.
If the value of the `platform.external.cloudControllerManager` parameter is `None`, you can disable the `CloudControllerManager` capability on your cluster.


:::important

If these parameters contain any other values than those listed, you cannot disable the `CloudControllerManager` capability on your cluster.

:::

{% endif %}


:::note

The status of this Operator is General Availability for {{ aws_first }}, {{ gcp_first }}, {{ ibm_cloud_name }}, global {{ azure_full }}, Microsoft Azure Stack Hub, Nutanix, {{ rh_openstack_first }}, and {{ vmw_full }}.

The Operator is available as a Technology Preview for {{ ibm_power_server_name }}.

:::


The Cloud Controller Manager Operator manages and updates the cloud controller managers deployed on top of {{ product_title }}. The Operator is based on the Kubebuilder framework and `controller-runtime` libraries. You can install the Cloud Controller Manager Operator by using the Cluster Version Operator (CVO).

The Cloud Controller Manager Operator includes the following components:

*   Operator
*   Cloud configuration observer

By default, the Operator exposes Prometheus metrics through the `metrics` service.

{% if context == "operator-reference" %}
{%- set operators = "" -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = "" -%}
{% endif %}