---
title: Virtual machine health checks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Virtual machine health checks {id="virt-monitoring-vm-health"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-monitoring-vm-health" %}

Define probes and watchdogs in the `VirtualMachine` resource to configure virtual machine (VM) health checks. Health checks monitor and report the internal state of a VM.

You can configure VM health checks by defining readiness and liveness probes in the `VirtualMachine` resource.

{% leveloffset +1 %}{% include "./modules/virt-about-readiness-liveness-probes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-define-http-readiness-probe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-define-tcp-readiness-probe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-define-http-liveness-probe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-defining-watchdogs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-defining-watchdog-device-vm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-installing-watchdog-agent.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-define-guest-agent-ping-probe.md" %}{% endleveloffset %}
{% endif %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_monitoring-vm-health"}

*   [Monitoring application health by using health checks](/applications/application-health#application-health)
{% endif %}