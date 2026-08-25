{%- set _mod_docs_content_type = "PROCEDURE" %}
# Approving a pending Operator update manually {id="olm-approving-pending-upgrade_{{ context }}"}

If an installed Operator has the approval strategy in its subscription set to **Manual**, you must manually approve the update before installation can begin. Manual approval reviews the changes and control when updates are applied to prevent unexpected downtime. {._abstract}

**Prerequisites**

*   An Operator previously installed using {{ olm_first }}.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Operators that have a pending update display a status with **Upgrade available**. Click the name of the Operator you want to update.
1.  Click the **Subscription** tab. Any updates requiring approval are displayed next to **Upgrade status**. For example, it might display **1 requires approval**.
1.  Click **1 requires approval**, then click **Preview Install Plan**.
1.  Review the resources that are listed as available for update. When satisfied, click **Approve**.
1.  Navigate back to the **Ecosystem** -> **Installed Operators** page to monitor the progress of the update. When complete, the status changes to **Succeeded** and **Up to date**.