{%- set _mod_docs_content_type = "CONCEPT" %}
# Establish tenant boundaries and project defaults {id="secure-network-traffic-establish-tenant-boundaries-and-project-defaults-con_{{ context }}"}

When several teams share a cluster, you can isolate network traffic between projects by using network policy, and configure the default project template so that new projects automatically inherit those controls. Every namespace then starts with a known security posture instead of relying on each team to apply policy by hand.