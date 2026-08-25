{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deploying {{ sandboxed_containers_first }} workloads {id="deploying-sandboxed-containers-workloads"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deploying-sandboxed-containers" %}

You can install the {{ sandboxed_containers_operator }} using either the web console or OpenShift CLI (`oc`). Before installing the {{ sandboxed_containers_operator }}, you must prepare your {{ product_title }} cluster.

{% leveloffset +1 %}{% include "./modules/sandboxed-containers-preparing-openshift-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a user-provisioned cluster on bare metal](/installing/installing_bare_metal/installing-bare-metal#installing-bare-metal)

{% leveloffset +2 %}{% include "./modules/sandboxed-containers-check-node-eligiblilty.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about installing the Node Feature Discovery (NFD) Operator, see [Installing NFD](/hardware_enablement/psap-node-feature-discovery-operator#installing-the-node-feature-discovery-operator_node-feature-discovery-operator).

## Deploying {{ sandboxed_containers_first }} workloads using the web console {id="deploying-sandboxed-containers-workloads-web-console" ._additional-resources}

You can deploy {{ sandboxed_containers_first }} workloads from the web console. First, you must install the {{ sandboxed_containers_operator }}, then create the `KataConfig` custom resource (CR). Once you are ready to deploy a workload in a sandboxed container, you must manually add `kata` as the `runtimeClassName` to the workload YAML file.

{% leveloffset +2 %}{% include "./modules/sandboxed-containers-installing-operator-web-console.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/sandboxed-containers-create-kataconfig-resource-web-console.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/sandboxed-containers-deploying-workloads-with-kata-runtime-web.md" %}{% endleveloffset %}

## Deploying {{ sandboxed_containers_first }} workloads using the CLI {id="deploying-sandboxed-containers-workloads-cli"}

You can deploy {{ sandboxed_containers_first }} workloads using the CLI. First, you must install the {{ sandboxed_containers_operator }}, then create the `KataConfig` custom resource. Once you are ready to deploy a workload in a sandboxed container, you must add `kata` as the `runtimeClassName` to the workload YAML file.

{% leveloffset +2 %}{% include "./modules/sandboxed-containers-installing-operator-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing from OperatorHub using the CLI](/operators/admin/olm-adding-operators-to-cluster#olm-installing-operator-from-operatorhub-using-cli_olm-adding-operators-to-a-cluster)

{% leveloffset +2 %}{% include "./modules/sandboxed-containers-create-kata-config-resource-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)

{% leveloffset +2 %}{% include "./modules/sandboxed-containers-deploying-workloads-with-kata-runtime-cli.md" %}{% endleveloffset %}

## Additional resources {id="deploying-sandboxed-containers-workloads_additional-resources" ._additional-resources}

*   The {{ sandboxed_containers_operator }} is supported in a restricted network environment. For more information, [Using Operator Lifecycle Manager on restricted networks](/operators/admin/olm-restricted-networks#olm-restricted-networks).
*   When using a disconnected cluster on a restricted network, you must [configure proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support) to access the OperatorHub. Using a proxy allows the cluster to fetch the {{ sandboxed_containers_operator }}.