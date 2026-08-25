{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing an access request from an email notification {id="support-reviewing-an-access-request-from-an-email-notification_{{ context }}"}

To control when Red&#160;Hat Site Reliability Engineering (SRE) can access your cluster resources, you can review and respond to access requests from email notifications. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}

**Procedure**

1.  Click the link within the email to bring you to the {{ hybrid_console_second }}.
1.  In the **Access Request Details** dialog, click **Approve** or **Deny** under **Decision**.

    :::note

    Denying an access request requires you to complete the **Justification** field. In this case, SRE cannot directly act on the resources related to the incident. Customers can still use the [**Customer Support**](https://access.redhat.com/support/cases/#/case/list) to help investigate and resolve any issues.
    
    :::

1.  Click **Save**.