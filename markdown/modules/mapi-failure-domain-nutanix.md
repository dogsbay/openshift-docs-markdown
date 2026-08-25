{%- set _mod_docs_content_type = "REFERENCE" %}
# Failure domains for Nutanix clusters {id="mapi-failure-domain-nutanix_{{ context }}"}

To modify failure domain configurations on a Nutanix cluster, you must modify the cluster infrastructure, control plane machine set, and compute machine set custom resources (CRs) to apply the new configuration. {._abstract}

To add or update the failure domain configuration on a Nutanix cluster, you must make coordinated changes to several resources. The following actions are required:

1.  Modify the cluster infrastructure custom resource (CR).
1.  Modify the cluster control plane machine set CR.
1.  Modify or replace the compute machine set CRs.

For more information, see "Adding failure domains to an existing Nutanix cluster".