{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling a dynamic plugin with the CLI {id="enabling-a-dynamic-plugin-by-using-the-cli_{{ context }}"}

You can enable a dynamic plugin to extend the core web console with more features, such as additional pages, perspectives, or dashboard items. Use the {{ oc_first }} after a scripted installation, such as an Operator or Helm-based install. Add the `ConsolePlugin` name to `spec.plugins` in the console Operator configuration (`console.operator.openshift.io/cluster`) so the web console loads it. {._abstract}

**Prerequisites**

*   You logged in to the cluster as a user with `cluster-admin` privileges.
*   You installed the dynamic plugin using a scripted installation, such as an Operator or Helm chart.
*   A `ConsolePlugin` custom resource (CR) exists on the cluster.

**Procedure**

1.  Confirm the name of the `ConsolePlugin` resource by running the following command:
    ```terminal
    $ oc get consoleplugin
    ```
1.  Optional: View details for a specific `ConsolePlugin` resource by running the following commands:
    1.  Set the plugin name as an environment variable:
        ```terminal
        $ PLUGIN_NAME="<plugin_name>"
        ```

        where `<plugin_name>` is the name of the `ConsolePlugin` resource.
    1.  Verify the plugin details:
        ```terminal
        $ oc get consoleplugin "${PLUGIN_NAME}" -o yaml
        ```

        The following example shows a `ConsolePlugin` YAML with the plugin listed in `spec.plugins`:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: Console
        metadata:
          name: cluster
        spec:
          plugins:
            - <plugin_name> 
            # ...
        ```

        Replace `<plugin_name>` with the name of your plugin.
1.  Enable the dynamic plugin by adding the `ConsolePlugin` name to the console Operator configuration. 

    :::note

    Make sure the Operator finishes installing the dynamic plugin before you run the following patch command.
    
    :::

    1.  Set the plugin patch as an environment variable:
        ```terminal
        $ PLUGIN_PATCH=$(cat <<EOF
        [
          {
            "op": "add",
            "path": "/spec/plugins/-",
            "value": "<plugin_name>"
          }
        ]
        EOF
        )
        ```
    1.  Patch the console Operator configuration:
        ```terminal
        $ oc patch consoles.operator.openshift.io cluster --type=json -p "${PLUGIN_PATCH}"
        ```

**Verification**

1.  Confirm that the console Operator configuration includes the `ConsolePlugin` name by running the following command:
    ```terminal
    $ oc get console.operator.openshift.io cluster -o jsonpath='{.spec.plugins}{"\n"}'
    ```
1.  Refresh the {{ product_title }} web console.

    The console can take a few minutes to apply the updated configuration.

**Additional resources**
{._additional-resources}

*   [Upstream demo instructions for enabling a plugin](https://github.com/openshift/console/tree/main/dynamic-demo-plugin#enabling-the-plugin)
*   [Helm template that patches the console Operator configuration](https://github.com/openshift/console-plugin-template/blob/3a06152cffdd10ad9654b6b607cb00a055f29733/charts/openshift-console-plugin/templates/patch-consoles-job.yaml)