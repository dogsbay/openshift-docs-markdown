{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restricting the API server to private for an {{ azure_full }} cluster {id="private-clusters-setting-api-private-azure_{{ context }}"}

If the security posture of your organization does not allow clusters to use an open API endpoint, you can restrict the API server to use only internal load balancers.
To implement this API server restriction, use the {{ azure_first }} console to delete the external load balancer component. {._abstract}

**Prerequisites**

*   You have installed an {{ product_title }} cluster on {{ azure_short }}.
*   You have access to the {{ azure_short }} console as a user with administrator privileges.

**Procedure**

1.  Log in to the {{ azure_short }} console as a user with administrator privileges.
1.  Delete the following resources:
    *   The `api-v4` rule for the public load balancer.
    *   The `frontendIPConfiguration` parameter that is associated with the `api-v4` rule for the public load balancer.
    *   The public IP address that is specified in the `frontendIPConfiguration` parameter.
1.  Configure the Ingress Controller endpoint publishing scope to `Internal`.
For more information, see "Configuring the Ingress Controller endpoint publishing scope to Internal".
1.  Delete the `api.<cluster_name>` DNS entry in the public zone.


    where `<cluster_name>` is the name of the cluster.