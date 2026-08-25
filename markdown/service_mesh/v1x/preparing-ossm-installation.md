{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install Service Mesh {id="preparing-ossm-installation-v1x"}
{%- set context = "preparing-ossm-installation-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

Before you can install {{ SMProductName }}, review the installation activities, ensure that you meet the prerequisites:

## Prerequisites {id="_prerequisites"}

*   Possess an active {{ product_title }} subscription on your Red Hat account. If you do not have a subscription, contact your sales representative for more information.

{% if openshift_enterprise %}
*   Review the [{{ product_title }} {{ product_version }} overview](/architecture/architecture-installation#installation-overview_architecture-installation).
*   Install {{ product_title }} {{ product_version }}.
    *   [Install {{ product_title }} {{ product_version }} on AWS](/installing/installing_aws/ipi/installing-aws-default#installing-aws-default)
    *   [Install {{ product_title }} {{ product_version }} on AWS with user-provisioned infrastructure](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)
    *   [Install {{ product_title }} {{ product_version }} on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
    *   [Install {{ product_title }} {{ product_version }} on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)

        :::note

        If you are installing {{ SMProductName }} on a [restricted network](/installing/overview/installing-preparing#installing-preparing-supported-installation-methods-reference_installing-preparing), follow the instructions for your chosen {{ product_title }} infrastructure.
        
        :::

{% endif %}
*   Install the version of the {{ product_title }} command-line utility (the `oc` client tool) that matches your {{ product_title }} version and add it to your path.

{% if openshift_enterprise %}
    *   If you are using {{ product_title }} {{ product_version }}, see [About the OpenShift CLI](/cli_reference/openshift_cli/getting-started-cli#cli-about-cli_cli-developer-commands).
{% endif %}

{% leveloffset +1 %}{% include "./modules/ossm-supported-configurations-v1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-installation-activities.md" %}{% endleveloffset %}

{% if openshift_enterprise %}

## Next steps {id="_next_steps"}

*   [Install {{ SMProductName }}](/service_mesh/v1x/installing-ossm#installing-ossm-v1x) in your {{ product_title }} environment.
{% endif %}