{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving the host firmware schema for a managed cluster {id="ztp-retrieving-the-host-firmware-schema_{{ context }}"}

You can discover the host firmware schema for managed clusters.
The host firmware schema for bare-metal hosts is populated with information that the Ironic API returns.
The API returns information about host firmware interfaces, including firmware setting types, allowable values, ranges, and flags. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have installed {{ rh_rhacm_first }} and logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have provisioned a cluster that is managed by {{ rh_rhacm }}.

**Procedure**

*   Discover the host firmware schema for the managed cluster.
Run the following command:
    ```terminal
    $ oc get firmwareschema -n <managed_cluster_namespace> -o yaml
    ```

    The following example output shows the host firmware schema:
    ```terminal
    apiVersion: v1
    items:
    - apiVersion: metal3.io/v1alpha1
      kind: FirmwareSchema
      metadata:
        creationTimestamp: "2024-09-11T10:29:43Z"
        generation: 1
        name: schema-40562318
        namespace: compute-1
        ownerReferences:
        - apiVersion: metal3.io/v1alpha1
          kind: HostFirmwareSettings
          name: compute-1.example.com
          uid: 65d0e89b-1cd8-4317-966d-2fbbbe033fe9
        resourceVersion: "280057624"
        uid: 511ad25d-f1c9-457b-9a96-776605c7b887
      spec:
        schema:
          AccessControlService:
            allowable_values:
            - Enabled
            - Disabled
            attribute_type: Enumeration
            read_only: false
          # ...
    ```