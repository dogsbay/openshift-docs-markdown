{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling hot plugging for all VMs on a cluster {id="virt-disable-kubervirt-hotplug-ratio_{{ context }}"}

If you are a cluster administrator and want to disable hot plugging for an entire cluster, you must modify the `spec.configuration.kubevirtConfiguration.developerConfiguration.maxHotplugRatio` setting in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have installed the {{ CNVOperatorDisplayName }}.

**Procedure**

1.  Modify the `HyperConverged` CR and set the `maxHotplugRatio` value to `1.0`:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      # ...
      kubevirtConfiguration:
        developerConfiguration:
          maxHotplugRatio: 1.0
    # ...
    ```
1.  Apply the changes to the `HyperConverged` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

1.  Check that you have configured the `maxHotplugRatio` value correctly, by running the following command:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} -n {{ CNVNamespace }} -o jsonpath='{.spec.liveUpdateConfiguration.maxHotplugRatio}'
    ```

    If the configuration was successful, the output is the `maxHotplugRatio` value that you set in the previous procedure:

    **Example output**
    ```terminal
    1.0
    ```