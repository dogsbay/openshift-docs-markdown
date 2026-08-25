{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshooting {{ product_title }} cluster deployments {id="rosa-troubleshooting-cluster-deployments"}

{%- set context = "rosa-troubleshooting-cluster-deployments" %}

Troubleshoot cluster deployment errors by completing the following instructions.  {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-general-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-osdccsadmin-deployment.md" %}{% endleveloffset %}

{% if openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsnatgatewaylimitexceeded-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsapiratelimitexceeded-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-s3bucketslimitexceeded-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsvpclimit-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsinsufficientcapacity-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-toomanyroute53zones-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awssubnetnotexist-failure-deployment.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [AWS prerequisites for {{ product_title }}](/rosa_install_access_delete_clusters/rosa_getting_started_iam/rosa-aws-prereqs#rosa-vpc_prerequisites)

{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-invalidkmskey-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-multipleroute53zonesfound-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-invalidinstallconfigsubnet-failure-deployment.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [CIDR range definitions](/networking/networking_overview/cidr-range-definitions#cidr-range-definitions)

{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsinsufficientpermission-failure-deployment.md" %}{% endleveloffset %}
## Additional resources {id="_additional_resources" ._additional-resources}
*   [Detailed requirements for deploying {{ product_title }} using STS](/rosa_planning/rosa-sts-aws-prereqs#rosa-sts-aws-prereqs)

{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-deleteiamrole-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-awsec2quotaexceeded-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-pendingverification-failure-deployment.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-lblimitexceeded-failure-deployment.md" %}{% endleveloffset %}
{%- endif %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-elb-service-role.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/rosa-troubleshooting-cluster-deletion.md" %}{% endleveloffset %}