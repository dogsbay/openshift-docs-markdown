{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing an access request from the {{ hybrid_console_second }} {id="support-reviewing-an-access-request-from-the-hybrid-cloud-console_{{ context }}"}

You can use the {{ hybrid_console_second }} to approve or deny access requests for your {{ product_rosa }} clusters to control when Red&#160;Hat Site Reliability Engineering (SRE) can access your cluster resources. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
**Prerequisites**

*   You have access to the cluster as a user with the `Cluster Owner` role.
{% endif %}

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select **Cluster List**.
1.  Click the cluster name to review the **Access Request**.
1.  Select the **Access Requests** tab to list all **states**.
1.  Select **Open** under **Actions** for the **Pending** state.
1.  In the **Access Request Details** dialog, click **Approve** or **Deny** under **Decision**.

    :::note

    Denying an access request requires you to complete the **Justification** field. In this case, SRE cannot directly act on the resources related to the incident. Customers can still use the [**Customer Support**](https://access.redhat.com/support/cases/#/case/list) to help investigate and resolve any issues.
    
    :::

1.  Click **Save**.