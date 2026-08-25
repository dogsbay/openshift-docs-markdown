{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ oadp_short }} to automate disaster recovery for {{ hcp }} {id="hcp-dr-prep-oadp-auto_{{ context }}"}

Before you can automate disaster recovery by using {{ oadp_first }}, you need to configure it for your {{ hcp }} platform. {._abstract}

**Procedure**

*   If your hosted cluster is on {{ aws_short }}, follow the steps in "Configuring the {{ oadp_full }} with AWS S3 compatible storage" to configure {{ oadp_short }}.
*   If your hosted cluster is on a bare metal, follow the steps in "Configuring the {{ oadp_full }} with Multicloud Object Gateway" to configure {{ oadp_short }}.