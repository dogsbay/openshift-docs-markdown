{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manage notification contacts by using the {{ rosa_cli_title }} {id="rosa-manage-notification-contacts-cli_{{ context }}"}

Use the {{ rosa_cli_first }} to add, change, or remove the notification contacts for your cluster so that the appropriate users receive cluster notification emails. {._abstract}

You can also set notification contacts when you create a cluster by specifying the `--notification-contacts` option with the `rosa create cluster` command.

**Prerequisites**

*   You have installed and configured {{ rosa_cli }} 1.2.66 or later.
*   You are logged in to your Red&#160;Hat account by using the {{ rosa_cli }} as the cluster owner or as a user with the `cluster editor` role.
*   Each intended notification recipient has a Red&#160;Hat Customer Portal account associated with the same organization as the cluster.

**Procedure**

*   Set the notification contacts for your cluster by running the following command:
    ```terminal
    $ rosa edit cluster --cluster <cluster_name> --notification-contacts "<contact_1>,<contact_2>"
    ```

    where:

    `<cluster_name>`
    :   Specifies the name or ID of your cluster.

    `<contact_1>,<contact_2>`
    :   Specifies a comma-separated list of {{ cluster_manager }} account usernames or email addresses to receive cluster notification emails.

    :::important

    The `--notification-contacts` option replaces the entire list of notification contacts for the cluster. To add a contact, include all existing contacts and the new contact in the list. To remove a contact, specify the list of contacts without the contact that you want to remove.
    
    :::

    To remove all notification contacts from the cluster, specify an empty value:
    ```terminal
    $ rosa edit cluster --cluster <cluster_name> --notification-contacts ""
    ```

**Verification**

*   View the notification contacts for your cluster by running the following command:
    ```terminal
    $ rosa describe cluster --cluster <cluster_name>
    ```
    ```terminal title="Example output"
    ...
    Notification Contacts:      user1, user2
    ...
    ```

    If the cluster has no notification contacts, the `Notification Contacts` field is not displayed.