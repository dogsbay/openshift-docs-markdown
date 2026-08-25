{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing Service Mesh {id="installing-ossm-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-ossm-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

Installing the {{ SMProductShortName }} involves installing the OpenShift Elasticsearch, Jaeger, Kiali and {{ SMProductShortName }} Operators, creating and managing a `ServiceMeshControlPlane` resource to deploy the control plane, and creating a `ServiceMeshMemberRoll` resource to specify the namespaces associated with the {{ SMProductShortName }}.


:::note

Mixer’s policy enforcement is disabled by default. You must enable it to run policy tasks. See [Update Mixer policy enforcement](/service_mesh/v1x/prepare-to-deploy-applications-ossm#ossm-mixer-policy-1x_deploying-applications-ossm-v1x) for instructions on enabling Mixer policy enforcement.

:::



:::note

Multi-tenant control plane installations are the default configuration.

:::



:::note

The {{ SMProductShortName }} documentation uses `istio-system` as the example project, but you can deploy the service mesh to any project.

:::


## Prerequisites {id="_prerequisites"}
*   Follow the [Preparing to install {{ SMProductName }}](/service_mesh/v1x/preparing-ossm-installation#preparing-ossm-installation-v1x) process.
*   An account with the `cluster-admin` role.

The {{ SMProductShortName }} installation process uses the software catalog to install the `ServiceMeshControlPlane` custom resource definition within the `openshift-operators` project. The {{ SMProductName }} defines and monitors the `ServiceMeshControlPlane` related to the deployment, update, and deletion of the control plane.

Starting with {{ SMProductName }} {{ SMProductVersion1x }}, you must install the OpenShift Elasticsearch Operator, the Jaeger Operator, and the Kiali Operator before the {{ SMProductName }} Operator can install the control plane.

{% leveloffset +1 %}{% include "./modules/ossm-install-elasticsearch.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-install-jaeger-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-install-kiali.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-install-ossm-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-control-plane-deploy-1x.md" %}{% endleveloffset %}

For a multitenant installation, {{ SMProductName }} supports multiple independent control planes within the cluster.  You can create reusable configurations with `ServiceMeshControlPlane` templates.  For more information, see [Creating control plane templates](/service_mesh/v1x/prepare-to-deploy-applications-ossm#ossm-control-plane-templates-1x_deploying-applications-ossm-v1x).

{% leveloffset +1 %}{% include "./modules/ossm-member-roll-create.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-member-roll-modify.md" %}{% endleveloffset %}

## Manual updates {id="_manual_updates"}

If you choose to update manually, the Operator Lifecycle Manager (OLM) controls the installation, upgrade, and role-based access control (RBAC) of Operators in a cluster. OLM runs by default in {{ product_title }}.
OLM uses CatalogSources, which use the Operator Registry API, to query for available Operators as well as upgrades for installed Operators.

{% if openshift_enterprise %}
*   For more information about how {{ product_title }} handled upgrades, refer to the [Operator Lifecycle Manager](/operators/understanding/olm/olm-understanding-olm#olm-overview_olm-understanding-olm) documentation.
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-update-app-sidecar.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

*   [Prepare to deploy applications](/service_mesh/v1x/prepare-to-deploy-applications-ossm#deploying-applications-ossm-v1x) on {{ SMProductName }}.