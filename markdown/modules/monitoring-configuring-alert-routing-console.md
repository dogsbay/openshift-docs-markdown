{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring alert routing with the {{ product_title }} web console {id="configuring-alert-routing-console_{{ context }}"}

You can configure alert routing through the {{ product_title }} web console to ensure that you learn about important issues with your cluster. 


:::note

The {{ product_title }} web console provides fewer settings to configure alert routing than the `alertmanager-main` secret. To configure alert routing with the access to more configuration settings, see "Configuring alert routing for default platform alerts".

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.

**Procedure**

1.  In the {{ product_title }} web console, go to **Administration** -> **Cluster Settings** -> **Configuration** -> **Alertmanager**.

    :::note

    Alternatively, you can go to the same page through the notification drawer. Select the bell icon at the top right of the {{ product_title }} web console and choose **Configure** in the **AlertmanagerReceiverNotConfigured** alert.
    
    :::

1.  Click **Create Receiver** in the **Receivers** section of the page.
1.  In the **Create Receiver** form, add a **Receiver name** and choose a **Receiver type** from the list.
1.  Edit the receiver configuration:
    *   For PagerDuty receivers:
        1.  Choose an integration type and add a PagerDuty integration key.
        1.  Add the URL of your PagerDuty installation.
        1.  Click **Show advanced configuration** if you want to edit the client and incident details or the severity specification.
    *   For webhook receivers:
        1.  Add the endpoint to send HTTP POST requests to.
        1.  Click **Show advanced configuration** if you want to edit the default option to send resolved alerts to the receiver.
    *   For email receivers:
        1.  Add the email address to send notifications to.
        1.  Add SMTP configuration details, including the address to send notifications from, the smarthost and port number used for sending emails, the hostname of the SMTP server, and authentication details.

            :::important

            Alertmanager requires an external SMTP server to send email alerts. To configure email alert receivers, ensure you have the necessary connection details for an external SMTP server.
            
            :::

        1.  Select whether TLS is required.
        1.  Click **Show advanced configuration** if you want to edit the default option not to send resolved alerts to the receiver or edit the body of email notifications configuration.
    *   For Slack receivers:
        1.  Add the URL of the Slack webhook.
        1.  Add the Slack channel or user name to send notifications to.
        1.  Select **Show advanced configuration** if you want to edit the default option not to send resolved alerts to the receiver or edit the icon and username configuration. You can also choose whether to find and link channel names and usernames.
1.  By default, firing alerts with labels that match all of the selectors are sent to the receiver. If you want label values for firing alerts to be matched exactly before they are sent to the receiver, perform the following steps:
    1.  Add routing label names and values in the **Routing labels** section of the form.
    1.  Click **Add label** to add further routing labels.
1.  Click **Create** to create the receiver.