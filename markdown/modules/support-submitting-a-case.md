{%- set _mod_docs_content_type = "PROCEDURE" %}
# Submitting a support case {id="support-submitting-a-case_{{ context }}"}

If you cannot resolve an {{ product_title }} issue by using the Red&#160;Hat Knowledgebase, submit a support case to get direct help from Red&#160;Hat Support. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the {{ cluster_manager_first }}.
{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have a Red&#160;Hat Customer Portal account.
*   You have a Red&#160;Hat Standard or Premium subscription.
{%- endif %}

**Procedure**

1.  Log in to [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red&#160;Hat Customer Portal.
1.  Click **Get support**.
1.  On the **Cases** tab of the **Customer Support** page:
    1.  Optional: Change the pre-filled account and owner details if needed.
    1.  Select the appropriate category for your issue, such as **Bug or Defect**, and click **Continue**.
1.  Enter the following information:
    1.  In the **Summary** field, enter a concise but descriptive problem summary and further details about the symptoms that you experience and your expectations.
    1.  Select **{{ product_title }}** from the **Product** drop-down menu.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    1.  Select **{{ product_version }}** from the **Version** drop-down.
{% endif %}
1.  Review the list of suggested Red&#160;Hat Knowledgebase solutions for a potential match against the problem that you are reporting. If the suggested articles do not address the issue, click **Continue**.
1.  Review the updated list of suggested Red&#160;Hat Knowledgebase solutions for a potential match against the problem that you are reporting. The list updates as you give more information during the case creation process. If the suggested articles do not address the issue, click **Continue**.
1.  Ensure that the account information presented is as expected, and if not, change it as needed.
1.  Check that the autofilled {{ product_title }} Cluster ID is correct. If it is not, manually obtain your cluster ID.
{%- if openshift_dedicated %}
    *   To manually obtain your cluster ID using {{ cluster_manager_url }}:
        1.  Navigate to **Cluster List**.
        1.  Click on the name of the cluster you need to open a support case for.
        1.  Find the value in the **Cluster ID** field of the **Details** section of the **Overview** tab.
{%- endif %}
    *   To manually obtain your cluster ID using the {{ product_title }} web console:
        1.  Navigate to **Home** → **Overview**.
        1.  Find the value in the **Cluster ID** field of the **Details** section.
    *   Or, open a new support case from the {{ product_title }} web console, which automatically fills in your cluster ID.
        1.  From the toolbar, navigate to **(?) Help** → **Open Support Case**.
        1.  The **Cluster ID** value automatically fills in.
    *   To obtain your cluster ID using the OpenShift CLI (`oc`), run the following command:
        ```terminal
        $ oc get clusterversion -o jsonpath='{.items[].spec.clusterID}{"\n"}'
        ```
1.  Complete the following questions where prompted and then click **Continue**:
    *   What are you experiencing? What are you expecting to happen?
    *   Define the value or impact to you or the business.
    *   Where are you experiencing this behavior? What environment?
    *   When does this behavior occur? Frequency? Repeatedly? At certain times?
1.  Upload relevant diagnostic data files and click **Continue**.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
Red&#160;Hat recommends including data gathered by using the `oc adm must-gather` command as a starting point, plus any issue-specific data that the command does not collect.
{%- endif %}
1.  Input relevant case management details and click **Continue**.
1.  Preview the case details and click **Submit**.