{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remove notification contacts from your cluster {id="remove-notification-contact_{{ context }}"}

Remove notification contacts from your cluster support settings to prevent them from receiving notification emails. {._abstract}

**Prerequisites**

*   Your cluster is deployed and registered to the {{ hybrid_console }}.
*   You are logged in to the {{ hybrid_console_second }} as the cluster owner or as a user with the cluster editor role.

**Procedure**

1.  Navigate to the Clusters page of the {{ hybrid_console_second }}.
1.  Click the name of your cluster to go to the cluster details page.
1.  Click the ***Support*** tab.
1.  On the ***Support*** tab, find the ***Notification contacts*** section.
1.  Click the options menu (***&#9881;***) beside the recipient you want to remove.
1.  Click ***Delete***.

**Verification**

*   The "Notification contact deleted successfully" message is displayed.