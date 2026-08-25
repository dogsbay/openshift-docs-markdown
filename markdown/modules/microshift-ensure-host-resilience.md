{%- set _mod_docs_content_type = "CONCEPT" %}
# Ensure host and control plane resilience against application resource exhaustion {id="microshift-ensure-host-resilience_{{ context }}"}

Configure strict resource boundaries so that application misbehavior, such as RAM leaks, CPU spikes, or unbounded logs, does not compromise the host operating system or the {{ microshift_short }} control plane.