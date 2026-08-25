{%- set _mod_docs_content_type = "REFERENCE" %}
# Settings tab {id="ocm-settings-tab_{{ context }}"}

The ***Settings*** tab provides a few options for the cluster owner: {._abstract}

{% if openshift_rosa %}
*   ***Monitoring***, which is enabled by default, allows for reporting done on user-defined actions.
{%- endif %}
*   ***Update strategy*** allows you to determine if the cluster automatically updates on a certain day of the week at a specified time or if all updates are scheduled manually.
{%- if openshift_rosa %}
*   ***Node draining*** sets the duration that protected workloads are respected during updates. When this duration has passed, the node is forcibly removed.
{%- endif %}
*   ***Update status*** shows the current version and if there are any updates available.