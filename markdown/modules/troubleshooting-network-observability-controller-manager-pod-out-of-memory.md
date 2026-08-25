{%- set _mod_docs_content_type = "PROCEDURE" %}
# Network observability controller manager pod runs out of memory {id="controller-manager-pod-runs-out-of-memory_{{ context }}"}

Resolve memory issues with the Network Observability Operator by increasing the memory limits in the `Subscription` object to prevent the controller manager pod from running out of memory. {._abstract}

You can increase memory limits for the Network Observability Operator by editing the `spec.config.resources.limits.memory` specification in the `Subscription` object.

**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**
1.  Click **Network Observability** and then select **Subscription**.
1.  From the **Actions** menu, click **Edit Subscription**.
    1.  Alternatively, you can use the CLI to open the YAML configuration for the `Subscription` object by running the following command:
        ```terminal
        $ oc edit subscription netobserv-operator -n openshift-netobserv-operator
        ```
1.  Edit the `Subscription` object to add the `config.resources.limits.memory` specification and set the value to account for your memory requirements. See the Additional resources for more information about resource considerations:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: netobserv-operator
      namespace: openshift-netobserv-operator
    spec:
      channel: stable
      config:
        resources:
          limits:
            memory: 800Mi     (1)
          requests:
            cpu: 100m
            memory: 100Mi
      installPlanApproval: Automatic
      name: netobserv-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      startingCSV: <network_observability_operator_latest_version> (2)
    ```
    1.  For example, you can increase the memory limit to `800Mi`.
    1.  This value should not be edited, but note that it changes depending on the most current release of the Operator.