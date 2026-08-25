---
title: Introduction to OpenShift updates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Introduction to OpenShift updates {id="understanding-openshift-updates"}
{%- set context = "understanding-openshift-updates" %}

With {{ product_title }} 4, you can update an {{ product_title }} cluster with a single operation by using the web console or the OpenShift CLI (`oc`). {._abstract}

Platform administrators can view new update options either by going to **Administration** → **Cluster Settings** in the web console or by looking at the output of the `oc adm upgrade` command.

{% leveloffset +1 %}{% include "./modules/about-updates.md" %}{% endleveloffset %}

{% if openshift_enterprise %}

{% leveloffset +1 %}{% include "./modules/update-availability-faq.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% endif %}

{% leveloffset +1 %}{% include "./modules/update-service-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/determining-upgrade-viability-conditiontype.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/determining-upgrade-viability-cv-conditiontype.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-common-terms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)
{%- if openshift_enterprise %}
*   [Using the OpenShift Update Service in a disconnected environment](/disconnected/updating/disconnected-update-osus#update-service-overview_updating-disconnected-cluster-osus)
*   [Update channels](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels_understanding-update-channels-releases)

## Additional resources {id="{{ context }}-additional-resources" ._additional-resources}
*   [How cluster updates work](/updating/understanding_updates/how-updates-work#how-updates-work)

{% endif %}