{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-systemd" %}
# Configuring systemd-journald and Fluentd {id="cluster-logging-systemd"}
{% include "./_attributes/common-attributes.md" %}

Because Fluentd reads from the journal, and the journal default settings are very low, journal entries can be lost because the journal cannot keep up with the logging rate from system services.

We recommend setting `RateLimitIntervalSec=30s` and `RateLimitBurst=10000` (or even higher if necessary) to prevent the journal from losing entries.

{% leveloffset +1 %}{% include "./modules/cluster-logging-systemd-scaling.md" %}{% endleveloffset %}