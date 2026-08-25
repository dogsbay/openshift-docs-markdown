---
title: Viewing pods
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-viewing" %}
{% include "./_attributes/common-attributes.md" %}
# Viewing pods {id="nodes-pods-viewing"}

As an administrator, you can view cluster pods, check their health, and evaluate the overall health of the cluster. You can also view a list of pods associated with a specific project or view usage statistics about pods. Regularly viewing pods can help you detect problems early, track resource usage, and ensure cluster stability. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-pods-viewing-project.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-general-describe-pod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-viewing-usage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/viewing-resource-logs-cli-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/viewing-resource-logs-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/viewing-resource-logs-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [oc describe](/cli_reference/openshift_cli/developer-cli-commands#oc-describe)