{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a plugin to the {{ cli_manager }} {id="cli-manager-adding-plugin-yamls_{{ context }}"}

You can add a CLI plugin to the {{ cli_manager }} by creating a new plugin resource in the {{ product_title }} web console’s YAML view. {._abstract}

**Prerequisites**

*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
*   The {{ cli_manager }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  From the list, select **{{ cli_manager }}**.
1.  Select the **CLI Plugin** tab.
1.  Click **Create Plugin**.
1.  In the text box, enter the information for the plugin you are installing. See the following example YAML file.

```yaml title="Example YAML file to add a plugin"
apiVersion: config.openshift.io/v1alpha1
kind: Plugin
metadata:
  name: <plugin_name>
spec:
  description: <description_of_plugin>
  homepage: <plugin_homepage>
  platforms:
  - bin:
    files:
    - from: <plugin_file_path>
      to: .
    image: <plugin_image>
    imagePullSecret:
    platform: <platform>
  shortDescription: <short_description_of_plugin>
  version: <version>
```

where:


`<plugin_name>`
:   Specifies the name of the plugin you plan to use in commands.

`bin`
:   Specifies the path to the plugin executable.

`imagePullSecret`
:   Optional field if the registry is not public to add a pull secret to access your plugin image.

`<platform>`
:   Add the architecture for your system; for example, `linux/amd64`, `darwin/arm64`, `windows/amd64`, or another architecture.

`<version>`
:   The version must be in v0.0.0 format.

1.  Click **Save**.

**Verification**

*   Enter the following command to see if the plugin is listed and has been added successfully:

```terminal
$ oc get plugin/<plugin_name> -o yaml
```

*   Example output:

```terminal
<plugin_name> ready to be served.
```