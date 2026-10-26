{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable CPU hot plug for all VMs in a cluster {id="virt-disable-kubervirt-hotplug-ratio_{{ context }}"}

You can disable hot plugging for every virtual machine (VM) in a cluster to give each VM a fixed CPU allocation, without configuring VMs or instance types individually. {._abstract}

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