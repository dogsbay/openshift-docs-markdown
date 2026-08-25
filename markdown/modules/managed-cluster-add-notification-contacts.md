{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add notification contacts to your cluster {id="add-notification-contact_{{ context }}"}

Configure additional users as notification contacts to ensure that all appropriate users receive cluster notification emails. {._abstract}

**Prerequisites**

*   Your cluster is deployed and registered to the {{ hybrid_console }}.
*   You are logged in to the {{ hybrid_console_second }} as the cluster owner or as a user with the cluster editor role.
*   The intended notification recipient has a Red&#160;Hat Customer Portal account associated with the same organization as the cluster owner.

**Procedure**

1.  Navigate to the Clusters page of the {{ hybrid_console_second }}.
1.  Click the name of your cluster to go to the cluster details page.
1.  Click the ***Support*** tab.
1.  On the ***Support*** tab, find the ***Notification contacts*** section.
1.  Click ***Add notification contact***.
1.  In the ***Red&#160;Hat username or email*** field, enter the email address or the user name of the new recipient.
1.  Click ***Add contact***.

**Verification**

*   The "Notification contact added successfully" message is displayed.