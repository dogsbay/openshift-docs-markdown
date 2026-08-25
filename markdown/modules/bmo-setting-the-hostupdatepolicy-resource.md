{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the HostUpdatePolicy resource {id="bmo-setting-the-hostupdatepolicy-resource_{{ context }}"}

By default, the `HostUpdatePolicy` disables live updates. To enable live updates, create the `HostUpdatePolicy` resource. {._abstract}


:::warning

Performing a live update to the `HostUpdatePolicy` resource can be a destructive and destabilizing action. Perform these updates only after careful consideration.

Before you apply a live update in a production cluster, validate the update in a development or test cluster. Ensure that these updates comply with your organization’s test policies before you apply them to a production cluster.

If a cluster has fewer than three compute nodes, use caution. Firmware updates in such clusters can result in the cluster entering a degraded state.

Do not interrupt firmware updates. If the update stops responding, engage the support of your hardware vendor.

:::


**Procedure**

1.  Create the `HostUpdatePolicy` resource by running the following command:
    ```terminal
    $ vim hup.yaml
    ```

    You can use any text editor you prefer.
    ```yaml title="Example HostUpdatePolicy resource:"
    apiVersion: metal3.io/v1alpha1
    kind: HostUpdatePolicy
    metadata:
      name: <hostname>
      namespace: openshift-machine-api
    spec:
      firmwareSettings: onReboot
      firmwareUpdates: onReboot
    ```

    Replace `<hostname>` with the name of the host.
1.  Save the changes to the `hup.yaml` file.
1.  Apply the policy by running the following command:
    ```terminal
    $ oc apply -f hup.yaml
    ```