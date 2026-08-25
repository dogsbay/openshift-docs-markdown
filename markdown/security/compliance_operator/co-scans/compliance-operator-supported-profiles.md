---
title: Supported compliance profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Supported compliance profiles {id="compliance-operator-supported-profiles"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "compliance-operator-supported-profiles" %}

There are several profiles available as part of the Compliance Operator (CO) installation. Although you can use these profiles to assess gaps in a cluster, usage alone does not infer or guarantee compliance with a particular profile and is not an auditor.

To be compliant or certified under these various standards, you need to engage an authorized auditor such as a Qualified Security Assessor (QSA), Joint Authorization Board (JAB), or other industry recognized regulatory authority to assess your environment. You are required to work with an authorized auditor to achieve compliance with a standard.


:::important

The Compliance Operator might report incorrect results on some managed platforms, such as OpenShift Dedicated and Azure Red Hat OpenShift. For more information, see Red Hat Knowledgebase Solution #6983418.

:::


{% leveloffset +1 %}{% include "./modules/compliance-supported-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-profile-types.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Red Hat Knowledgebase Solution #6983418](https://access.redhat.com/solutions/6983418)
*   [Product Compliance](https://access.redhat.com/compliance)