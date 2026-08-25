{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing OpenShift Service Mesh Console plugin using the CLI {id="ossm-kiali-ossmc-plugin-install-cli_{{ context }}"}

You can install the {{ SMPlugin }} using the CLI, instead of the {{ product_title }} web console.

**Prerequisites**

*   {{ product_title }} is installed.
*   {{ KialiProduct }} 1.73 is installed.
*   {{ SMProductName }} (OSSM) is installed.
*   `ServiceMeshControlPlane` (SMCP) 2.5 or later is installed.

**Procedure**

1.  Create a small `OSSMConsole` custom resource (CR) to instruct the operator to install the plugin:
    ```yaml
    cat <<EOM | oc apply -f -
    apiVersion: kiali.io/v1alpha1
    kind: OSSMConsole
    metadata:
      namespace: openshift-operators
      name: ossmconsole
    EOM
    ```

    :::note

    The plugin resources are deployed in the same namespace where the `OSSMConsole` CR is created.
    
    :::

1.  Go to the {{ product_title }} web console.
1.  Refresh the browser window to see the new OSSMC plugin menu options.