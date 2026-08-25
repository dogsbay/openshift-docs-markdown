{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing the project request message {id="customizing-project-request-message_{{ context }}"}

A developer or a service account that is unable to self-provision projects can make a project creation request by using the web console or CLI. {._abstract}

The following error message is returned by default:

```terminal
You may not request a new project via this API.
```

Cluster administrators can customize this message.
Consider updating the message to provide further instructions on how to request a new project specific to your organization.
The following examples show a customized message:

*   To request a project, contact your system administrator at `projectname@example.com`.
*   To request a new project, fill out the project request form located at `https://internal.example.com/openshift-project-request`.

**Procedure**

1.  Edit the project configuration resource using the web console or CLI.
    *   By using the web console, complete the following steps:
        1.  Navigate to the **Administration** -> **Cluster Settings** page.
        1.  Click **Configuration** to view all configuration resources.
        1.  Find the entry for **Project** and click **Edit YAML**.
    *   By using the CLI, complete the following steps:
        1.  Log in as a user with `cluster-admin` privileges.
        1.  Edit the `project.config.openshift.io/cluster` resource:
            ```terminal
            $ oc edit project.config.openshift.io/cluster
            ```
1.  Update the `spec` section to include the `projectRequestMessage` parameter and
set the value to your custom message:
    ```yaml title="Project configuration resource with custom project request message"
    apiVersion: config.openshift.io/v1
    kind: Project
    metadata:
    # ...
    spec:
      projectRequestMessage: <message_string>
    # ...
    ```

    The following example uses actual values:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Project
    metadata:
    # ...
    spec:
      projectRequestMessage: To request a project, contact your system administrator at projectname@example.com.
    # ...
    ```
1.  After saving your changes, attempt to create a new project by using a developer or service account that cannot self-provision projects.
By doing this task, you can verify that your changes were successfully applied.