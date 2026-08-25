---
title: Installing a cluster in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster in a disconnected environment {id="installing-disconnected-environments"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-disconnected-environments" %}

You can install an {{ product_title }} cluster in a disconnected environment, choosing the installation method and infrastructure that best suits your requirements.
This includes installing {{ product_title }} on either on-premise hardware or on a cloud hosting service such as Amazon Web Services (AWS).

The following sections outline all of the supported methods for installing a cluster in a disconnected environment.


:::note

To learn about other requirements for installing a cluster using a particular method, be sure to review other content in the procedure’s respective section of the documentation.

For example, if you plan to install a cluster on {{ aws_short }} with installer-provisioned infrastructure, see "Configuring an AWS account" and "Preparing to install a cluster on {{ aws_short }}".

:::


{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/installing-agent-based-installer.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/installing-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-gcp.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/installing-ibm-cloud.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/installing-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-baremetal.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/installing-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ibm-power.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/installing-openstack.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-vsphere.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Configuring an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account)
*   [Preparing to install a cluster on {{ aws_short }}](/installing/installing_aws/ipi/ipi-aws-preparing-to-install#ipi-aws-preparing-to-install)