{%- set _mod_docs_content_type = "PROCEDURE" %}
# Submit a support case {id="microshift-support-submitting-a-case_{{ context }}"}

If you encounter issues with {{ microshift_short }} that cannot be resolved through the standard troubleshooting, you can submit a support case to Red&#160;Hat. Providing detailed descriptions and diagnostic data helps Red&#160;Hat Support to analyze the problem and help you with a resolution. {._abstract}

**Prerequisites**

*   The {{ microshift_short }} service is running.
*   You have installed the OpenShift CLI (`oc`).
*   You have a Red Hat Customer Portal account.
*   You have a Red Hat Standard or Premium subscription.

**Procedure**

1.  Log in to [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
1.  Click **Get support**.
1.  On the **Cases** tab of the **Customer Support** page:
    1.  Optional: Change the pre-filled account and owner details if needed.
    1.  Select the appropriate category for your issue, such as **Bug or Defect**, and click **Continue**.
1.  Enter the following information:
    1.  In the **Summary** field, enter a concise but descriptive problem summary and further details about the symptoms being experienced, as well as your expectations.
    1.  Select **{{ op_system_bundle }}** from the **Product** drop-down menu.
    1.  Select **{{ rhde_version }}** from the **Version** drop-down.
1.  Review the list of suggested Red Hat Knowledgebase solutions for a potential match against the problem that is being reported. If the suggested articles do not address the issue, click **Continue**.
1.  Review the updated list of suggested Red Hat Knowledgebase solutions for a potential match against the problem that is being reported. The list is refined as you provide more information during the case creation process. If the suggested articles do not address the issue, click **Continue**.
1.  Ensure that the account information presented is as expected, and if not, amend accordingly.
1.  Complete the following questions where prompted. Include which type of install type you are using, either RPM or embedded-image. Click **Continue**:
    *   What are you experiencing? What are you expecting to happen?
    *   Define the value or impact to you or the business.
    *   Where are you experiencing this behavior? What environment?
    *   When does this behavior occur? Frequency? Repeatedly? At certain times?
1.  Upload relevant diagnostic data files and click **Continue**. Include data gathered using the `sos` tool or etcd as a starting point, plus any issue-specific data that is not collected in those logs.
1.  Add relevant case management details and click **Continue**.
1.  Preview the case details and click **Submit**.