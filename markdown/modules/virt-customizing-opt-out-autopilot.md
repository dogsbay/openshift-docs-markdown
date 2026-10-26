{%- set _mod_docs_content_type = "CONCEPT" %}
# Customize or opt-out of managed configurations {id="virt-customizing-opt-out-autopilot_{{ context }}"}

The `virt-platform-autopilot` controller applies opinionated defaults, but you can override managed configurations to suit your environment. {._abstract}

z


Stop reconciliation of a resource
:   Mark a resource as unmanaged so that the controller does not reconcile it after it is created. You take full ownership of that resource’s configuration.

You can combine these approaches across different resources in the same cluster.