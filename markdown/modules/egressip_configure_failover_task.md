{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the EgressIP failover time limit {id="egressip_configure_failover_task_{{ context }}"}

You can configure the `reachabilityTotalTimeoutSeconds` parameter to control how quickly the system detects a failing `egressIP` node and initiates a failover. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in to the cluster as a cluster administrator.

**Procedure**

1.  Edit the `Network` custom resource by running the following command:
    ```bash
    $ oc edit network.operator cluster
    ```
1.  Navigate to the `egressIPConfig: {}` section under `spec:defaultNetwork:ovnKubernetesConfig:`
1.  Modify the block to include the `reachabilityTotalTimeoutSeconds` parameter with your chosen value, 5 seconds for example. Make sure to use the correct indentation:
    ```yaml
      defaultNetwork:
        ovnKubernetesConfig:
          egressIPConfig:
            reachabilityTotalTimeoutSeconds: 5
    ```

    :::note

    The value must be an integer between 0 and 60. For details on possible values, see the "EgressIP failover settings" section.
    
    :::

1.  Save and exit the editor. The operator automatically applies the changes.

**Verification**

1.  Verify that the system correctly accepted the `reachabilityTotalTimeoutSeconds` parameter by running the following command:
    ```terminal
    $ oc get network.operator cluster -o yaml
    ```
1.  Inspect the output and confirm that the `reachabilityTotalTimeoutSeconds` parameter is correctly nested under `spec:defaultNetwork:ovnKubernetesConfig:egressIPConfig:` with your intended value:
    ```yaml
     # ...
      spec:
        # ...
        defaultNetwork:
          ovnKubernetesConfig:
            egressIPConfig:
              reachabilityTotalTimeoutSeconds: 5
            gatewayConfig:
      # ...
    ```