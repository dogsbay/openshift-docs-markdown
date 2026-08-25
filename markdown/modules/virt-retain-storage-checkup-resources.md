{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retaining resources for troubleshooting storage checkups {id="virt-retain-storage-checkup-resources_{{ context }}"}

The predefined storage checkup includes `skipTeardown` configuration options, which control resource clean up after a storage checkup runs.
By default, the `skipTeardown` field value is `Never`, which means that the checkup always performs teardown steps and deletes all resources after the checkup runs. {._abstract}

You can retain resources for further inspection in case a failure occurs by setting the `skipTeardown` field to `onfailure`.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Run the following command to edit the `storage-checkup-config` config map:
    ```terminal
    $ oc edit configmap storage-checkup-config -n <checkup_namespace>
    ```
1.  Configure the `skipTeardown` field to use the `onfailure` value. You can do this by modifying the `storage-checkup-config` config map, stored in the `storage_checkup.yaml` file:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: storage-checkup-config
      namespace: <checkup_namespace>
    data:
      spec.param.skipTeardown: onfailure
    # ...
    ```
1.  Reapply the `storage-checkup-config` config map by running the following command:
    ```terminal
    $ oc apply -f storage_checkup.yaml -n <checkup_namespace>
    ```