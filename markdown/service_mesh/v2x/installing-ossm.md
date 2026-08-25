---
title: Installing the Operators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the Operators {id="installing-ossm"}
{%- set context = "installing-ossm" %}

To install {{ SMProductName }}, first install the {{ SMProductName }} Operator and any optional Operators on {{ product_title }}. Then create a `ServiceMeshControlPlane` resource to deploy the control plane.


:::note

This basic installation is configured based on the default OpenShift settings and is not designed for production use.  Use this default installation to verify your installation, and then configure your service mesh for your specific environment.

:::


**Prerequisites**

*   Read the [Preparing to install {{ SMProductName }}](/service_mesh/v2x/preparing-ossm-installation#preparing-ossm-installation) process.
{%- if openshift_rosa or openshift_rosa_hcp %}
*   An account with the `cluster-admin` role.
{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
*   An account with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
{%- endif %}

The following steps show how to install a basic instance of {{ SMProductName }} on {{ product_title }}.


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} are deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for these features during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::


{% leveloffset +1 %}{% include "./modules/ossm-installation-activities.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-install-ossm-operator.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/ossm-config-operator-infrastructure-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-confirm-operator-infrastructure-node.md" %}{% endleveloffset %}

{% endif %}

## Next steps {id="_next_steps"}

*   The {{ SMProductName }} Operator does not create the {{ SMProductShortName }} custom resource definitions (CRDs) until you deploy a {{ SMProductShortName }} control plane. You can use the `ServiceMeshControlPlane` resource to install and configure the {{ SMProductShortName }} components. For more information, see [Creating the ServiceMeshControlPlane](/service_mesh/v2x/ossm-create-smcp#ossm-create-smcp).