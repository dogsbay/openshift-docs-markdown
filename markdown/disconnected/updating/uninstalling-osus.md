---
title: Uninstalling the OpenShift Update Service from a cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the OpenShift Update Service from a cluster {id="uninstalling-osus"}
{%- set context = "uninstalling-osus" %}

You can remove a local copy of the OpenShift Update Service (OSUS) from your cluster. To do this, you must first delete the OSUS application and then uninstall the OSUS Operator. {._abstract}

{% leveloffset +1 %}{% include "./modules/delete-update-service-application.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-delete-service-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-delete-service-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/uninstall-update-service-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-uninstall-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-service-uninstall-cli.md" %}{% endleveloffset %}