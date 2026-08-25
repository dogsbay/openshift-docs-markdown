{%- set _mod_docs_content_type = "CONCEPT" %}
# Additional details about how remote health monitoring data is used {id="additional-details-about-how-remote-health-monitoring-data-is-used_{{ context }}"}

Red&#160;Hat collects data about your use of the Red&#160;Hat Product(s) for specific purposes. {._abstract}

For more information about date collected to enable remote health monitoring, see "Information collected by Telemetry" and "Information collected by the {{ insights_operator }}".

Red&#160;Hat collects data about your use of the Red&#160;Hat Product(s) for purposes such as providing support and upgrades, optimizing performance or configuration, minimizing service impacts, identifying and remediating threats, troubleshooting, improving the offerings and user experience, responding to issues, and for billing purposes if applicable.


Collection safeguards
:   Red&#160;Hat employs technical and organizational measures designed to protect the telemetry and configuration data.


Sharing
:   Red&#160;Hat might share the data collected through Telemetry and the {{ insights_operator }} internally within Red&#160;Hat to improve your user experience. Red&#160;Hat might share telemetry and configuration data with its business partners in an aggregated form that does not identify customers to help the partners better understand their markets and their customers' use of Red&#160;Hat offerings or to ensure the successful integration of products jointly supported by those partners.


Third parties
:   Red&#160;Hat may engage certain third parties to assist in the collection, analysis, and storage of the Telemetry and configuration data.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

User control / enabling and disabling telemetry and configuration data collection
:   You can disable {{ product_title }} Telemetry and the {{ insights_operator }} by following the instructions "Remote health reporting".
{% endif %}