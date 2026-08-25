{%- set _mod_docs_content_type = "PROCEDURE" %}
# Azure storage {id="logging-loki-storage-azure_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You created a [bucket](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) on Azure.

**Procedure**

*   Create an object storage secret with the name `logging-loki-azure` by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-azure \
      --from-literal=container="<azure_container_name>" \
      --from-literal=environment="<azure_environment>" \ (1)
      --from-literal=account_name="<azure_account_name>" \
      --from-literal=account_key="<azure_account_key>"
    ```
    1.  Supported environment values are `AzureGlobal`, `AzureChinaCloud`, `AzureGermanCloud`, or `AzureUSGovernment`.

## Azure storage for {{ entra_first }} enabled clusters {id="azure_storage_workload_id_{{ context }}"}

If your cluster has {{ entra_first }} enabled, the Cloud Credential Operator (CCO) supports short-term authentication using {{ entra_short }}.

You can create the Loki object storage secret manually by running the following command:

```terminal
$ oc -n openshift-logging create secret generic logging-loki-azure \
--from-literal=environment="<azure_environment>" \
--from-literal=account_name="<storage_account_name>" \
--from-literal=container="<container_name>"
```