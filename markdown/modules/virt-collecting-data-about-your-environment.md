{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting data about your environment {id="virt-collecting-data-about-your-environment_{{ context }}"}

Collecting data about your environment minimizes the time required to analyze and determine the root cause. {._abstract}

**Prerequisites**

{%- if openshift_dedicated or openshift_rosa %}
*   You have set the retention time for Prometheus metrics data to a minimum of seven days.
*   You have configured the Alertmanager to capture relevant alerts and to send alert notifications to a dedicated mailbox so that they can be viewed and persisted outside the cluster.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have set the retention time for Prometheus metrics data to a minimum of seven days.
*   You have configured the Alertmanager to capture relevant alerts and to send alert notifications to a dedicated mailbox so that they can be viewed and persisted outside the cluster.
{%- endif %}
*   You have recorded the exact number of affected nodes and virtual machines.

**Procedure**

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
1.  Collect must-gather data for the cluster.
1.  Collect must-gather data for {{ rh_storage_first }}, if necessary.
1.  Collect must-gather data for {{ VirtProductName }}.
{% endif %}
{% if not openshift_rosa_hcp %}
1.  Collect Prometheus metrics for the cluster.
{%- endif %}