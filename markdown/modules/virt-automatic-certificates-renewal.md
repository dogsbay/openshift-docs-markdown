{%- set _mod_docs_content_type = "CONCEPT" %}
# TLS certificates {id="virt-automatic-certificates-renewal_{{ context }}"}

TLS certificates for {{ VirtProductName }} components are renewed and rotated automatically. You are not required to refresh them manually. {._abstract}

## Automatic renewal schedules {id="_automatic_renewal_schedules"}

TLS certificates are automatically deleted and replaced according to the following schedule:

*   KubeVirt certificates are renewed daily.
*   Containerized Data Importer controller (CDI)
 certificates are renewed every 15 days.
{%- if not openshift_dedicated %}
*   MAC pool certificates are renewed every year.
{%- endif %}
Automatic TLS certificate rotation does not disrupt any operations. For example, the following operations continue to function without any disruption:
*   Migrations
*   Image uploads
*   VNC and console connections