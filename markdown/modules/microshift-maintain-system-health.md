{%- set _mod_docs_content_type = "CONCEPT" %}
# Maintain system health with the greenboot health check framework {id="microshift-maintain-system-health_{{ context }}"}

Use the greenboot health check framework to verify that your {{ microshift_short }} system is healthy at boot time. If problems are detected, greenboot automatically rolls back to a previous working version so that you do not have to fix the system in person at remote edge locations.