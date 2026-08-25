{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ insights_operator }} {id="insights-operator-about_{{ context }}"}

The {{ insights_operator }} periodically gathers configuration and component failure status and, by default, reports that data every two hours to Red&#160;Hat. This information enables Red&#160;Hat to assess configuration and deeper failure data than is reported through Telemetry. {._abstract}

Users of {{ product_title }} can display the report of each cluster in the {{ insights_advisor_url }} service on {{ hybrid_console }}. If any issues have been identified, {{ red_hat_lightspeed }} provides further details and, if available, steps on how to solve a problem.

The {{ insights_operator }} does not collect identifying information, such as user names, passwords, or certificates. For information about {{ red_hat_lightspeed }} data collection and controls, see {{ red_hat_lightspeed }} Data & Application Security.

Red Hat uses all connected cluster information to:

*   Identify potential cluster issues and provide a solution and preventive actions in the {{ insights_advisor_url }} service on {{ hybrid_console }}
*   Improve {{ product_title }} by providing aggregated and critical information to product and support teams
*   Make {{ product_title }} more intuitive