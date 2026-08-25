---
title: Image Registry Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Image Registry Operator in {{ product_title }} {id="configuring-registry-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-registry-operator" %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Image Registry on cloud platforms and OpenStack {id="image-registry-on-cloud"}
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
## Image Registry on {{ product_title }} {id="_image_registry_on_product_title"}
{% endif %}

The Image Registry Operator installs a single instance of the {{ product_registry }} and manages all registry configuration, including setting up registry storage.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

:::note

Storage is only automatically configured when you install an installer-provisioned infrastructure cluster on {{ aws_short }}, {{ azure_short }}, {{ gcp_short }}, {{ ibm_name }}, or {{ rh_openstack }}.

When you install or upgrade an installer-provisioned infrastructure cluster on {{ aws_short }}, {{ azure_short }}, {{ gcp_short }}, {{ ibm_name }}, or {{ rh_openstack }}, the Image Registry Operator sets the `spec.storage.managementState` parameter to `Managed`. If the `spec.storage.managementState` parameter is set to `Unmanaged`, the Image Registry Operator takes no action related to storage.

:::

{% endif %}

After the control plane deploys in the management cluster, the Operator creates a default `configs.imageregistry.operator.openshift.io` custom resource (CR) instance based on configuration detected in the cluster.

If insufficient information is available to define a complete `configs.imageregistry.operator.openshift.io` CR, the incomplete resource is defined and the Operator updates the resource status with information about what is missing.

{% if openshift_rosa_hcp %}
The Image Registry Operator runs in the `CONTROL_PLANE_NAMESPACE` environment variable of the management cluster, and manages the registry instance in the `openshift-image-registry` namespace of the cluster. All configuration and workload resources for the registry reside in that namespace.
{% endif %}
{% if openshift_rosa %}
The Image Registry Operator runs in the `openshift-image-registry` namespace, and manages the registry instance in that location. All configuration and workload resources for the registry reside in that namespace.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

:::important

The Image Registry Operator’s behavior for managing the pruner is orthogonal to the `managementState` specified on the `ClusterOperator` object for the Image Registry Operator. If the Image Registry Operator is not in the `Managed` state, the image pruner can still be configured and managed by the `Pruning` custom resource.

However, the `managementState` of the Image Registry Operator alters the behavior of the deployed image pruner job:

*   `Managed`: the `--prune-registry` flag for the image pruner is set to `true`.
*   `Removed`: the `--prune-registry` flag for the image pruner is set to `false`, meaning the image pruner job only prunes image metadata in etcd.

:::

{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Image Registry on bare metal, Nutanix, and vSphere {id="image-registry-on-bare-metal-vsphere"}

{% leveloffset +2 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-distribution-across-availability-zones.md" %}{% endleveloffset %}

{% if not openshift_rosa_portal %}
## Additional resources {id="_additional_resources"}

*   [Configuring pod topology spread constraints](/nodes/scheduling/nodes-scheduler-pod-topology-spread-constraints#nodes-scheduler-pod-topology-spread-constraints)
{% endif %}

{% leveloffset +1 %}{% include "./modules/registry-operator-configuration-resource-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-default-crd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-configuration-cas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-operator-config-resources-storage-credentials.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configuring the registry for AWS user-provisioned infrastructure](/registry/configuring_registry_storage/configuring-registry-storage-aws-user-infrastructure#configuring-registry-storage-aws-user-infrastructure)
*   [Configuring the registry for {{ gcp_short }} user-provisioned infrastructure](/registry/configuring_registry_storage/configuring-registry-storage-gcp-user-infrastructure#configuring-registry-storage-gcp-user-infrastructure)
*   [Configuring the registry for Azure user-provisioned infrastructure](/registry/configuring_registry_storage/configuring-registry-storage-azure-user-infrastructure#configuring-registry-storage-azure-user-infrastructure)
*   [Configuring the registry for bare metal](/registry/configuring_registry_storage/configuring-registry-storage-baremetal#configuring-registry-storage-baremetal)
*   [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
*   [Configuring the registry for {{ rh_openstack }}](/registry/configuring_registry_storage/configuring-registry-storage-osp#configuring-registry-storage-openstack)
*   [Configuring the registry for {{ rh_storage_first }}](/registry/configuring_registry_storage/configuring-registry-storage-rhodf#configuring-registry-storage-rhodf)
*   [Configuring the registry for Nutanix](/registry/configuring_registry_storage/configuring-registry-storage-nutanix#configuring-registry-storage-nutanix)
{% endif %}