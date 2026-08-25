---
title: Preparing to install Service Mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install Service Mesh {id="preparing-ossm-installation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "preparing-ossm-installation" %}

Before you can install {{ SMProductName }}, you must subscribe to {{ product_title }} and install {{ product_title }} in a supported configuration.

## Prerequisites {id="_prerequisites"}

*   Maintain an active {{ product_title }} subscription on your Red Hat account. If you do not have a subscription, contact your sales representative for more information.

{% if openshift_enterprise %}
*   Review the [{{ product_title }} {{ product_version }} overview](/architecture/architecture-installation#installation-overview_architecture-installation).
*   Install {{ product_title }} {{ product_version }}. If you are installing {{ SMProductName }} on a [restricted network](/installing/overview/installing-preparing#installing-preparing-supported-installation-methods-reference_installing-preparing), follow the instructions for your chosen {{ product_title }} infrastructure.
    *   [Install {{ product_title }} {{ product_version }} on AWS](/installing/installing_aws/ipi/installing-aws-default#installing-aws-default)
    *   [Install {{ product_title }} {{ product_version }} on AWS with user-provisioned infrastructure](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)
    *   [Install {{ product_title }} {{ product_version }} on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
    *   [Install {{ product_title }} {{ product_version }} on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
    *   [Install {{ product_title }} {{ product_version }} on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
    *   [Install {{ product_title }} {{ product_version }} on {{ ibm_power_name }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)
{% endif %}
*   Install the version of the {{ product_title }} command-line utility (the `oc` client tool) that matches your {{ product_title }} version and add it to your path.
    {%- if openshift_enterprise %}
    *   If you are using {{ product_title }} {{ product_version }}, see [About the OpenShift CLI](/cli_reference/openshift_cli/getting-started-cli#cli-about-cli_cli-developer-commands).
{% endif %}

For additional information about {{ SMProductName }} lifecycle and supported platforms, refer to the [Support Policy](https://access.redhat.com/support/policy/updates/openshift#ossm).

{% leveloffset +1 %}{% include "./modules/ossm-supported-configurations.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

*   [Install {{ SMProductName }}](/service_mesh/v2x/installing-ossm#installing-ossm) in your {{ product_title }} environment.