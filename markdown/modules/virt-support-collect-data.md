{%- set _mod_docs_content_type = "CONCEPT" %}
# Collecting data for Red&#160;Hat Support {id="virt-support-collect-data_{{ context }}"}

Gather information about the issue affecting your environment to submit with your support case. This aids Red&#160;Hat Support in effectively diagnosing your issue. {._abstract}

Gather troubleshooting information by using the following tools:

*   Configure Prometheus and Alertmanager.

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   Configure and use the `must-gather` tool.
*   Collect `must-gather` data and memory dumps from VMs.
*   Collect `must-gather` data for {{ product_title }} and {{ VirtProductName }}
{%- endif %}