{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating custom notification banners {id="creating-custom-notification-banners_{{ context }}"}

You can create a `ConsoleNotification` custom resource to display a banner at the top or bottom of every page in the web console. {._abstract}

**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  From **Administration** → **Custom Resource Definitions**, click **ConsoleNotification**.
1.  Select the **Instances** tab.
1.  Click **Create Console Notification** and edit the file:
    ```yaml
    apiVersion: console.openshift.io/v1
    kind: ConsoleNotification
    metadata:
      name: example
    spec:
      text: This is an example notification message with an optional link.
      location: BannerTop
      link:
        href: 'https://www.example.com'
        text: Optional link text
      color: '#fff'
      backgroundColor: '#0088ce'
    ```

    The `location` field accepts `BannerTop`, `BannerBottom`, or `BannerTopBottom`.
1.  Click **Create** to apply your changes.