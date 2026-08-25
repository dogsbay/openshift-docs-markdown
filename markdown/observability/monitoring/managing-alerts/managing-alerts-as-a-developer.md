{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing alerts as a Developer {id="managing-alerts-as-a-developer"}
{%- set context = "managing-alerts-as-a-developer" %}

In {{ product_title }}, the Alerting UI enables you to manage alerts, silences, and alerting rules.

{% include "./snippets/snip-unified-perspective-web-console.md" %}


:::note

The alerts, silences, and alerting rules that are available in the Alerting UI relate to the projects that you have access to.

:::


{% leveloffset +1 %}{% include "./modules/monitoring-accessing-the-alerting-ui.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Searching and filtering alerts, silences, and alerting rules](/observability/monitoring/about-ocp-monitoring/key-concepts#searching-alerts-silences-and-alerting-rules_key-concepts)

{% leveloffset +1 %}{% include "./modules/monitoring-getting-information-about-alerts-silences-and-alerting-rules.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [GitHub {{ cmo_full }} runbooks repository](https://github.com/openshift/runbooks/tree/master/alerts/cluster-monitoring-operator)

## Managing silences {id="managing-silences_{{ context }}" ._additional-resources}

You can create a silence for an alert in the {{ product_title }} web console.
After you create silences, you can view, edit, and expire them. You also do not receive notifications about a silenced alert when the alert fires.


:::note

When you create silences, they are replicated across Alertmanager pods. However, if you do not configure persistent storage for Alertmanager, silences might be lost. This can happen, for example, if all Alertmanager pods restart at the same time.

:::


**Additional resources**
{._additional-resources}

*   [Managing silences](/observability/monitoring/about-ocp-monitoring/key-concepts#managing-silences_key-concepts)

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring persistent storage](/observability/monitoring/configuring-core-platform-monitoring/storing-and-recording-data#configuring-persistent-storage_storing-and-recording-data)
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   [Configuring persistent storage](/observability/monitoring/configuring-user-workload-monitoring/storing-and-recording-data-uwm#configuring-persistent-storage_storing-and-recording-data-uwm)
{% endif %}

{% leveloffset +2 %}{% include "./modules/monitoring-silencing-alerts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-editing-silences.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-expiring-silences.md" %}{% endleveloffset %}

## Managing alerting rules for user-defined projects {id="managing-alerting-rules-for-user-defined-projects-uwm_{{ context }}" ._additional-resources}

In {{ product_title }}, you can create, view, edit, and remove alerting rules for user-defined projects. Those alerting rules will trigger alerts based on the values of the chosen metrics.

**Additional resources**
{._additional-resources}

*   [Creating alerting rules for user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#about-creating-alerting-rules-for-user-defined-projects_key-concepts)
*   [Managing alerting rules for user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#managing-alerting-rules-for-user-defined-projects_key-concepts)
*   [Optimizing alerting for user-defined projects](/observability/monitoring/about-ocp-monitoring/key-concepts#optimizing-alerting-for-user-defined-projects_key-concepts)

{% leveloffset +2 %}{% include "./modules/monitoring-creating-alerting-rules-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-creating-cross-project-alerting-rules-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Monitoring stack architecture](/observability/monitoring/about-ocp-monitoring/monitoring-stack-architecture#monitoring-stack-architecture)
*   [Alerting (Prometheus documentation)](https://prometheus.io/docs/practices/alerting/)

{% leveloffset +2 %}{% include "./modules/monitoring-accessing-alerting-rules-for-your-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-removing-alerting-rules-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Alertmanager (Prometheus documentation)](https://prometheus.io/docs/alerting/alertmanager/)