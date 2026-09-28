{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for Customer Cloud Subscription on {{ gcp_short }} {id="ccs-gcp-customer-requirements_{{ context }}"}

{{ product_title }} clusters that use a Customer Cloud Subscription (CCS) model on {{ gcp_first }} must meet several prerequisites before they can be deployed. {._abstract}

As a {{ gcp_short }} user, you can validate many of these requirements directly within the [{{ gcp_short }} console](https://console.cloud.google.com/redhat-openshift/landing) before deployment.

## Account {id="ccs-gcp-requirements-account_{{ context }}"}

*   You must ensure that [{{ gcp_full }} limits](https://cloud.google.com/storage/quotas) and [allocation quotas that apply to Compute Engine](https://cloud.google.com/compute/resource-usage) are sufficient to support {{ product_title }} provisioned within your {{ gcp_short }} account.
*   Your {{ gcp_short }} account should be in your {{ gcp_full }} Organization.
*   Your {{ gcp_short }} account must not be transferable to Red&#160;Hat.
*   Do not impose {{ gcp_short }} usage restrictions on Red&#160;Hat activities. Imposing restrictions severely hinders Red&#160;Hat’s ability to respond to incidents.
*   Red&#160;Hat deploys monitoring into {{ gcp_short }} to alert Red&#160;Hat when a highly privileged account, such as a root account, logs into your {{ gcp_short }} account.
*   You can deploy native {{ gcp_short }} services within the same {{ gcp_short }} account.

    :::note

    You are encouraged, but not mandated, to deploy resources in a Virtual Private Cloud (VPC) separate from the VPC hosting {{ product_title }} and other Red&#160;Hat supported services.
    
    :::


## Access requirements {id="ccs-gcp-requirements-access_{{ context }}"}

*   To appropriately manage the {{ product_title }} service, Red&#160;Hat must have the `AdministratorAccess` policy applied to the administrator role at all times.

    :::note

    This policy only provides Red&#160;Hat with permissions and capabilities to change resources in your {{ gcp_short }} account.
    
    :::

*   Red&#160;Hat must have {{ gcp_short }} console access to your {{ gcp_short }} account. This access is protected and managed by Red&#160;Hat.
*   You must not use the {{ gcp_short }} account to elevate your permissions within the {{ product_title }} cluster.
*   Actions available in the {{ cluster_manager_url }} must not be directly performed in your {{ gcp_short }} account.

## Support requirements {id="ccs-gcp-requirements-support_{{ context }}"}

*   Red&#160;Hat recommends that you have at least [Enhanced Support](https://cloud.google.com/support) from {{ gcp_short }}.
*   Red&#160;Hat has authority to request {{ gcp_short }} support on your behalf.
*   Red&#160;Hat has authority to request {{ gcp_short }} resource limit increases on your account.
*   Red&#160;Hat manages the restrictions, limitations, expectations, and defaults for all {{ product_title }} clusters in the same manner, unless otherwise specified in this requirements section.

## Security requirements {id="ccs-gcp-requirements-security_{{ context }}"}

*   Your IAM credentials must be unique to your {{ gcp_short }} account and must not be stored anywhere in your {{ gcp_short }} account.
*   Volume snapshots will remain within your {{ gcp_short }} account and a region you specified.
*   To manage, monitor, and troubleshoot {{ product_title }} clusters, Red&#160;Hat must have direct access to the cluster’s API server. You must not restrict or otherwise prevent Red&#160;Hat’s access to the {{ product_title }} cluster’s API server.

    :::note

    Site reliability engineering (SRE) uses various methods to access clusters, depending on network configuration. Access to private clusters is restricted to Red&#160;Hat trusted IP addresses only. These access restrictions are managed automatically by Red&#160;Hat.
    
    :::

*   {{ product_title }} requires egress access to certain endpoints over the internet. Only clusters deployed with Private Service Connect can use a firewall to control egress traffic. For additional information, see [{{ gcp_short }} firewall prerequisites](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html-single/planning_your_environment/index#osd-gcp-psc-firewall-prerequisites_gcp-ccs).