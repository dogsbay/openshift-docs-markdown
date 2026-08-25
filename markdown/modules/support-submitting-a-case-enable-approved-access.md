{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling approved access for ROSA clusters by submitting a support case {id="support-submitting-a-case-enable-approved-access_{{ context }}"}

Enable the Approved Access feature for your {{ product_rosa }} clusters by creating a support ticket so that you can control when Red&#160;Hat Site Reliability Engineering (SRE) accesses your cluster resources. {._abstract}

**Procedure**

1.  Log in to the [**Customer Support**](https://access.redhat.com/support/cases/#/case/list) page of the Red&#160;Hat Customer Portal.
1.  Click **Get support**.
1.  On the **Cases** tab of the **Customer support** page:
    1.  Optional: Change the pre-filled account and owner details if needed.
    1.  Select the **Configuration** category and click **Continue**.
1.  Enter the following information:

{% if openshift_rosa %}
    1.  In the **Product** field, select **{{ product_title }}**.
        {% endif %}
        {% if openshift_rosa_hcp %}
    1.  In the **Product** field, select **{{ product_title }} {{ hcp_capital }}**.
        {%- endif %}
    1.  In the **Problem statement** field, enter **Enable ROSA Access Protection**.
    1.  Click **See more options**.
1.  Select **OpenShift Cluster ID** from the drop-down list.
1.  Fill the remaining mandatory fields in the form:
    1.  What are you experiencing? What are you expecting to happen?
        1.  Fill with **Approved Access**.
    1.  Define the value or impact to you or the business.
        1.  Fill with **Approved Access**.
    1.  Click **Continue**.
1.  Select **Severity** as **4(Low)** and click **Continue**.
1.  Preview the case details and click **Submit**.