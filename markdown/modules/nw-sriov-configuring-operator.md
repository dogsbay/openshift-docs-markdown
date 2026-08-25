{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the SR-IOV Network Operator {id="nw-sriov-configuring-operator_{{ context }}"}

To manage SR-IOV network devices and network attachments in your cluster, configure the Single Root I/O Virtualization (SR-IOV) Network Operator. {._abstract}

**Procedure**

1.  Create a `SriovOperatorConfig` custom resource (CR). The following example creates a file named `sriovOperatorConfig.yaml`:
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator 
    spec:
      disableDrain: false
      enableInjector: true
      enableOperatorWebhook: true
      logLevel: 2
      featureGates:
        metricsExporter: false
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies the name of the SR-IOV Network Operator instance. The only valid name for the `SriovOperatorConfig` resource is `default` and the name must be in the namespace where the Operator is deployed. 


`spec.enableInjector`
:   Specifies if any `network-resources-injector` pod can run in the namespace. If not specified in the CR or explicitly set to `true`, defaults to `false` or `<none>`, preventing any `network-resources-injector` pod from running in the namespace. The recommended setting is `true`. 


`spec.enableOperatorWebhook`
:   Specifies if any `operator-webhook` pods can run in the namespace. The `enableOperatorWebhook` field, if not specified in the CR or explicitly set to true, defaults to `false` or `<none>`, preventing any `operator-webhook` pod from running in the namespace. The recommended setting is `true`. 

1.  Apply the resource to your cluster by running the following command:
    ```terminal
    $ oc apply -f sriovOperatorConfig.yaml
    ```