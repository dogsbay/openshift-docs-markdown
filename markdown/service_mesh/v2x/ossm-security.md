---
title: Security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Security {id="ossm-security"}
{%- set context = "ossm-security" %}

If your service mesh application is constructed with a complex array of microservices, you can use {{ SMProductName }} to customize the security of the communication between those services. The infrastructure of {{ product_title }} along with the traffic management features of {{ SMProductShortName }} help you manage the complexity of your applications and secure microservices.

**Before you begin**

If you have a project, add your project to the [`ServiceMeshMemberRoll` resource](/service_mesh/v2x/ossm-create-mesh#ossm-member-roll-create_ossm-create-mesh).

If you don’t have a project, install the [Bookinfo sample application](/service_mesh/v2x/ossm-create-mesh#ossm-tutorial-bookinfo-overview_ossm-create-mesh) and add it to the `ServiceMeshMemberRoll` resource. The sample application helps illustrate security concepts.

{% leveloffset +1 %}{% include "./modules/ossm-security-mtls.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-sec-mtls-mesh.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-config-sidecar-mtls.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-sidecar-out-mtls.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-mtls-min-max.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-validate-encryption-kiali.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-security-auth-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-security-cipher.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-configuring-jwks-resolver-ca.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-security-cert-manage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cert-manage-add-cert-key.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cert-manage-verify-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cert-cleanup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cert-manager-integration-istio.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cert-manager-installation.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_cert-manager-operator-red-hat-openshift" ._additional-resources}

For information about how to install the cert-manager Operator for {{ product_title }}, see:
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
[Installing the cert-manager Operator for Red Hat OpenShift](/security/cert_manager_operator/cert-manager-operator-install).
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
[Installing the cert-manager Operator for Red Hat OpenShift](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.12/html-single/security_and_compliance/index#cert-manager-operator-install).
{%- endif %}