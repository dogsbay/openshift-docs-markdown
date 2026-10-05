{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure firewall rules for installation {id="configure-firewall-rules-for-installation-intro_{{ context }}"}

If you use a firewall, you must configure your allowlist for the firewall to ensure {{ product_title }} has access to the URLs it requires to pull container images and access Red Hat services.  {._abstract}

Additional URLs are required for features such as Telemetry, {{ red_hat_lightspeed }}, cloud provider integrations, or certain build strategies.