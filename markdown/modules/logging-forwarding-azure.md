{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding to Azure Monitor Logs {id="logging-forwarding-azure_{{ context }}"}
With {{ logging }} 5.9 and later, you can forward logs to [Azure Monitor Logs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs) in addition to, or instead of, the default log store. This functionality is provided by the [Vector Azure Monitor Logs sink](https://vector.dev/docs/reference/configuration/sinks/azure_monitor_logs/).

**Prerequisites**

*   You are familiar with how to administer and create a `ClusterLogging` custom resource (CR) instance.
*   You are familiar with how to administer and create a `ClusterLogForwarder` CR instance.
*   You understand the `ClusterLogForwarder` CR specifications.
*   You have basic familiarity with Azure services.
*   You have an Azure account configured for Azure Portal or Azure CLI access.
*   You have obtained your Azure Monitor Logs primary or the secondary security key.
*   You have determined which log types to forward.

To enable log forwarding to Azure Monitor Logs via the HTTP Data Collector API:

Create a secret with your shared key:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
  namespace: openshift-logging
type: Opaque
data:
  shared_key: <your_shared_key> (1)
```
1.  Must contain a primary or secondary key for the [Log Analytics workspace](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview) making the request.

To obtain a [shared key](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key), you can use this command in Azure CLI:

```text
Get-AzOperationalInsightsWorkspaceSharedKey -ResourceGroupName "<resource_name>" -Name "<workspace_name>”
```

Create or edit your `ClusterLogForwarder` CR using the template matching your log selection.

```yaml title="Forward all logs"
apiVersion: "logging.openshift.io/v1"
kind: "ClusterLogForwarder"
metadata:
  name: instance
  namespace: openshift-logging
spec:
  outputs:
  - name: azure-monitor
    type: azureMonitor
    azureMonitor:
      customerId: my-customer-id (1)
      logType: my_log_type (2)
    secret:
       name: my-secret
  pipelines:
  - name: app-pipeline
    inputRefs:
    - application
    outputRefs:
    - azure-monitor
```
1.  Unique identifier for the Log Analytics workspace. Required field.
1.  [Azure record type](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-collector-api?tabs=powershell#record-type-and-properties) of the data being submitted. May only contain letters, numbers, and underscores (_), and may not exceed 100 characters.

```yaml title="Forward application and infrastructure logs"
apiVersion: "logging.openshift.io/v1"
kind: "ClusterLogForwarder"
metadata:
  name: instance
  namespace: openshift-logging
spec:
  outputs:
  - name: azure-monitor-app
    type: azureMonitor
    azureMonitor:
      customerId: my-customer-id
      logType: application_log (1)
    secret:
      name: my-secret
  - name: azure-monitor-infra
    type: azureMonitor
    azureMonitor:
      customerId: my-customer-id
      logType: infra_log #
    secret:
      name: my-secret
  pipelines:
    - name: app-pipeline
      inputRefs:
      - application
      outputRefs:
      - azure-monitor-app
    - name: infra-pipeline
      inputRefs:
      - infrastructure
      outputRefs:
      - azure-monitor-infra
```
1.  [Azure record type](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-collector-api?tabs=powershell#record-type-and-properties) of the data being submitted. May only contain letters, numbers, and underscores (_), and may not exceed 100 characters.

```yaml title="Advanced configuration options"
apiVersion: "logging.openshift.io/v1"
kind: "ClusterLogForwarder"
metadata:
  name: instance
  namespace: openshift-logging
spec:
  outputs:
  - name: azure-monitor
    type: azureMonitor
    azureMonitor:
      customerId: my-customer-id
      logType: my_log_type
      azureResourceId: "/subscriptions/111111111" (1)
      host: "ods.opinsights.azure.com" (2)
    secret:
       name: my-secret
  pipelines:
   - name: app-pipeline
    inputRefs:
    - application
    outputRefs:
    - azure-monitor
```
1.  Resource ID of the Azure resource the data should be associated with. Optional field.
1.  Alternative host for dedicated Azure regions. Optional field. Default value is `ods.opinsights.azure.com`. Default value for Azure Government is `ods.opinsights.azure.us`.