---
title: Exposing downward metrics for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Exposing downward metrics for virtual machines {id="virt-exposing-downward-metrics"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-exposing-downward-metrics" %}

As an administrator, you can expose a set of host and virtual machine (VM) metrics to a guest VM by enabling the `downwardMetrics` feature gate and configuring a downward metrics device. You can view these metrics by using the command line or the `vm-dump-metrics` tool.


:::note

On Red Hat Enterprise Linux (RHEL) 9, use the command line to view downward metrics.

The `vm-dump-metrics` tool is not supported on the Red Hat Enterprise Linux (RHEL) 9 platform.

:::


{% leveloffset +1 %}{% include "./modules/virt-enabling-disabling-downward-metrics-feature-gate-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-enabling-disabling-downward-metrics-feature-gate-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-downward-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-downward-metrics-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-downward-metrics-tool.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_virt-exposing-downward-metrics-for-vms"}

*   [Viewing downward metrics by using the command line](/virt/monitoring/virt-exposing-downward-metrics#virt-viewing-downward-metrics-cli_virt-exposing-downward-metrics)