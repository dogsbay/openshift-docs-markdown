---
title: Verifying cluster API versions between update versions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Verifying cluster API versions between update versions {id="update-api"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "update-api" %}

APIs change over time as components are updated.
It is important to verify that your application APIs are compatible with the updated cluster version.

{% leveloffset +1 %}{% include "./modules/update-api-compatibility.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding API tiers](/rest_api/overview/understanding-api-support-tiers#understanding-api-support-tiers)
*   [Kubernetes version skew policy](https://kubernetes.io/releases/version-skew-policy/)

{% leveloffset +1 %}{% include "./modules/update-determining-the-cluster-version-update-path.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/update-selecting-the-target-release.md" %}{% endleveloffset %}