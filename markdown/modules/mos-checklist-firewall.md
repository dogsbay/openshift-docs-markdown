{%- set _mod_docs_content_type = "CONCEPT" %}
# Firewall {id="mos-checklist-_firewall_{{ context }}"}

You must configure your firewall so that your cluster can access the required domains and ports. {._abstract}

*   Configure your firewall to allow access to the domains and ports listed in
{%- if openshift_rosa %}
[AWS firewall prerequisites](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/prepare_your_environment/rosa-cloud-expert-prereq-checklist#firewall).
{%- endif %}
{%- if openshift_rosa_hcp %}
[AWS firewall prerequisites](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/prepare_your_environment/rosa-hcp-prereqs#rosa-hcp-firewall-prerequisites_rosa-hcp-prereqs).
{%- endif %}