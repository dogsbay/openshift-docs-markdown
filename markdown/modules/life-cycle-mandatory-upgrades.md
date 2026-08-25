{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Mandatory upgrades {id="rosa-mandatory-upgrades_{{ context }}"}

If a critical or important CVE, or other bug identified by Red&#160;Hat, significantly impacts the security or stability of the cluster, the customer must upgrade to the next supported patch release within two [business days](https://access.redhat.com/articles/2623321). {._abstract}

In extreme circumstances and based on Red&#160;Hat’s assessment of the CVE criticality to the environment, Red&#160;Hat will notify customers that they have two [business days](https://access.redhat.com/articles/2623321) to schedule or manually update their cluster to the latest, secure patch release. In the case that an update is not performed after two [business days](https://access.redhat.com/articles/2623321), Red&#160;Hat will automatically update the
{%- if openshift_rosa_hcp %}
cluster’s control plane
{%- endif %}
{%- if not openshift_rosa_hcp %}
cluster
{%- endif %}
to the latest, secure patch release to mitigate potential security breach(es) or instability. Red&#160;Hat might, at its own discretion, temporarily delay an automated update if requested by a customer through a [support case](https://access.redhat.com/support).

{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = "" -%}
{% endif %}