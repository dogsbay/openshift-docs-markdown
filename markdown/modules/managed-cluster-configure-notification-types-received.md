{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring notification types received {id="config-notification-types-received_{{ context }}"}

Notification contacts receive emails when cluster notifications are sent to the cluster.

By default, a notification contact receives an email for every notification sent to the cluster, regardless of notification type. You can configure the type of notification you want to receive in the {{ hybrid_console }} notification settings for OpenShift.

**Prerequisites**

*   Your cluster is deployed and registered to the {{ hybrid_console_second }}.
*   You are logged in to the {{ hybrid_console_second }}.

**Procedure**

1.  Log in to the {{ hybrid_console_second }}.
1.  Click ***Settings*** -> ***Notifications*** to open the Notifications overview.
1.  Click ***Notification Preferences***.
1.  On the My Notifications page, under OpenShift, click ***Cluster Manager***.
1.  Specify the notification types that you want to receive by selecting or clearing the relevant checkbox.
1.  Click ***Save***.

**Verification steps**

*   The "Notification preferences successfully saved" message displays.