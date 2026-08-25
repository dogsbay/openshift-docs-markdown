{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving the host firmware settings for a managed cluster {id="ztp-retrieving-the-host-firmware-settings_{{ context }}"}

You can retrieve the host firmware settings for managed clusters.
This is useful when you have deployed changes to the host firmware and you want to monitor the changes and ensure that they are applied successfully. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have installed {{ rh_rhacm_first }} and logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have provisioned a cluster that is managed by {{ rh_rhacm }}.

**Procedure**

1.  Retrieve the host firmware settings for the managed cluster.
Run the following command:
    ```terminal
    $ oc get hostfirmwaresettings -n <cluster_namespace> <node_name> -o yaml
    ```

    The following example output shows the host firmware settings:
    ```terminal
    apiVersion: v1
    items:
    - apiVersion: metal3.io/v1alpha1
      kind: HostFirmwareSettings
      metadata:
        creationTimestamp: "2024-09-11T10:29:43Z"
        generation: 1
        name: compute-1.example.com
        namespace: kni-qe-24
        ownerReferences:
        - apiVersion: metal3.io/v1alpha1
          blockOwnerDeletion: true
          controller: true
          kind: BareMetalHost
          name: compute-1.example.com
          uid: 0baddbb7-bb34-4224-8427-3d01d91c9287
        resourceVersion: "280057626"
        uid: 65d0e89b-1cd8-4317-966d-2fbbbe033fe9
      spec:
        settings: {}
      status:
        conditions:
        - lastTransitionTime: "2024-09-11T10:29:43Z"
          message: ""
          observedGeneration: 1
          reason: Success
          # Indicates that a change in the host firmware settings has been detected.
          status: "True"
          type: ChangeDetected
        - lastTransitionTime: "2024-09-11T10:29:43Z"
          message: Invalid BIOS setting
          observedGeneration: 1
          reason: ConfigurationError
          # Indicates that the host has an invalid firmware setting.
          status: "False"
          type: Valid
        lastUpdated: "2024-09-11T10:29:43Z"
        schema:
          name: schema-40562318
          namespace: compute-1
        # Contains the complete list of configured host firmware settings returned under the `status.settings` field.
        settings:
          AccessControlService: Enabled
          AcpiHpet: Enabled
          AcpiRootBridgePxm: Enabled
          # ...
    ```
1.  Optional: Check the status of the `HostFirmwareSettings` (`hfs`) custom resource in the cluster:
    ```terminal
    $ oc get hfs -n <managed_cluster_namespace> <managed_cluster_name> -o jsonpath='{.status.conditions[?(@.type=="ChangeDetected")].status}'
    ```

    The following example output shows a detected change:
    ```terminal
    True
    ```
1.  Optional: Check for invalid firmware settings in the cluster host by running the following command:
    ```terminal
    $ oc get hfs -n <managed_cluster_namespace> <managed_cluster_name> -o jsonpath='{.status.conditions[?(@.type=="Valid")].status}'
    ```

    The following example output shows an invalid firmware setting:
    ```terminal
    False
    ```