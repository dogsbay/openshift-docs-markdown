{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the {{ loki_op }} {id="logging-upgrading-loki_{{ context }}"}

To update the {{ loki_op }} to a new major release version, you must modify the update channel for the Operator subscription.

**Prerequisites**

*   You have installed the {{ loki_op }}.
*   You have administrator permissions.
*   You have access to the {{ product_title }} web console and are viewing the **Administrator** perspective.

**Procedure**

1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Select the **openshift-operators-redhat** project.
1.  Click the **{{ loki_op }}**.
1.  Click **Subscription**. In the **Subscription details** section, click the **Update channel** link. This link text might be **stable** or **stable-5.y**, depending on your current update channel.
1.  In the **Change Subscription Update Channel** window, select the latest major version update channel, **stable-5.y**, and click **Save**. Note the `loki-operator.v5.y.z` version.
1.  Wait for a few seconds, then click **Ecosystem** -> **Installed Operators**. Verify that the {{ loki_op }} version matches the latest `loki-operator.v5.y.z` version.
1.  On the **Ecosystem** -> **Installed Operators** page, wait for the **Status** field to report **Succeeded**.
1.  Check if the `LokiStack` custom resource contains the `v13` schema version and add it if it is missing. For correctly adding the `v13` schema version, see "Upgrading the LokiStack storage schema".