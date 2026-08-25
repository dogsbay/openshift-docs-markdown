---
title: "Upgrading {{ oadp_short }} 1.5 to 1.6"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

# Upgrading {{ oadp_short }} 1.5 to 1.6 {id="oadp-upgrade-notes-1-6"}

{%- set context = "oadp-upgrade-notes-1-6" %}

Learn how to upgrade your existing {{ oadp_full }} 1.5 installation to {{ oadp_short }} 1.6. {._abstract}


:::note

Always upgrade to the next minor version. Do not skip versions. To update to a later version, upgrade only one channel at a time. For example, to upgrade from {{ oadp_short }} 1.1 to 1.3, upgrade first to 1.2, and then to 1.3.

:::


{% leveloffset +1 %}{% include "./modules/changes-from-oadp-1-5-to-1-6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-backing-up-dpa-configuration-1-6-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-upgrading-oadp-operator-1-6-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/converting-dpa-to-the-new-version-for-oadp-1-6-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-verifying-upgrade-1-6-0.md" %}{% endleveloffset %}