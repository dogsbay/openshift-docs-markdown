---
title: Container image signatures
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Container image signatures {id="security-container-signature"}
{%- set context = "security-container-signature" %}

To verify the integrity of the images in the Red Hat Container Registries between Red Hat registries and your infrastructure, you can enable signature verification. {._abstract}

Red Hat delivers signatures for the images in the Red Hat Container Registries. Those signatures can be automatically verified when being pulled to {{ product_title }} 4 clusters by using the Machine Config Operator (MCO).

To verify the integrity of those images between Red Hat registries and your infrastructure, enable signature verification.

{% leveloffset +1 %}{% include "./modules/containers-signature-verify-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/containers-signature-verify-application.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/containers-signature-verify-unsigned.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/containers-signature-verify-skopeo.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_security-container-signature" ._additional-resources}
*   [Quay.io](https://quay.io/)
*   [Red Hat Ecosystem Catalog Container images](https://catalog.redhat.com/software/containers/explore)
*   [Introduction to OpenShift Updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)
*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)
*   [OpenShift release signatures mirror site](https://mirror.openshift.com/pub/openshift-v4/signatures/openshift-release-dev/ocp-release/)
*   [Red Hat GPG release key](https://access.redhat.com/security/data/fd431d51.txt)