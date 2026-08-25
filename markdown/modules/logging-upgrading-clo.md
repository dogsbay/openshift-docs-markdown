{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the {{ clo }} {id="logging-upgrading-clo_{{ context }}"}

To update the {{ clo }} to a new major release version, you must modify the update channel for the Operator subscription.

**Prerequisites**

*   You have installed the {{ clo }}.
*   You have administrator permissions.
*   You have access to the {{ product_title }} web console and are viewing the **Administrator** perspective.

**Procedure**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Select the **openshift-logging** project.
1.  Click the **Red Hat OpenShift Logging** Operator.
1.  Click **Subscription**. In the **Subscription details** section, click the **Update channel** link. This link text might be **stable** or **stable-5.9**, depending on your current update channel.
1.  In the **Change Subscription Update Channel** window, select the latest major version update channel, **stable-5.9**, and click **Save**. Note the `cluster-logging.v5.9.<z>` version.
1.  Wait for a few seconds, and then go to **Ecosystem** -> **Installed Operators** to verify that the {{ clo }} version matches the latest `cluster-logging.v5.9.<z>` version.
1.  On the **Ecosystem** -> **Installed Operators** page, wait for the **Status** field to report **Succeeded**.
1.  Check if the `LokiStack` custom resource contains the `v13` schema version and add it if it is missing. For correctly adding the `v13` schema version, see "Upgrading the LokiStack storage schema".