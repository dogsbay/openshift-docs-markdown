{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.6 API reference {id="logging-5-6-api-ref"}
{%- set toc = true -%}
{%- set toclevels = "4" %}

## ClusterLogForwarder {id="_clusterlogforwarder"}
ClusterLogForwarder is an API to configure forwarding logs.

You configure forwarding by specifying a list of `pipelines`,
which forward from a set of named inputs to a set of named outputs.

There are built-in input names for common log categories, and you can
define custom inputs to do additional filtering.

There is a built-in output name for the default openshift log store, but
you can define your own outputs with a URL and other connection information
to forward logs to other stores or processors, inside or outside the cluster.

For more details see the documentation on the API fields.

| Property | Type | Description |
| --- | --- | --- |
| spec | object | Specification of the desired behavior of ClusterLogForwarder |
| status | object | Status of the ClusterLogForwarder |

### .spec {id="_spec"}
#### Description {id="_description"}
ClusterLogForwarderSpec defines how logs should be forwarded to remote targets.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| inputs | array | **(optional)** Inputs are named filters for log messages to be forwarded. |
| outputDefaults | object | **(optional)** DEPRECATED OutputDefaults specify forwarder config explicitly for the default store. |
| outputs | array | **(optional)** Outputs are named destinations for log messages. |
| pipelines | array | Pipelines forward the messages selected by a set of inputs to a set of outputs. |

### .spec.inputs[] {id="_specinputs"}
#### Description {id="_description"}
InputSpec defines a selector of log messages.

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| application | object | **(optional)** Application, if present, enables named set of `application` logs that |
| name | string | Name used to refer to the input of a `pipeline`. |

### .spec.inputs[].application {id="_specinputsapplication"}
#### Description {id="_description"}
Application log selector.
All conditions in the selector must be satisfied (logical AND) to select logs.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| namespaces | array | **(optional)** Namespaces from which to collect application logs. |
| selector | object | **(optional)** Selector for logs from pods with matching labels. |

### .spec.inputs[].application.namespaces[] {id="_specinputsapplicationnamespaces"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .spec.inputs[].application.selector {id="_specinputsapplicationselector"}
#### Description {id="_description"}
A label selector is a label query over a set of resources.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| matchLabels | object | **(optional)** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels |

### .spec.inputs[].application.selector.matchLabels {id="_specinputsapplicationselectormatchlabels"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.outputDefaults {id="_specoutputdefaults"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| elasticsearch | object | **(optional)** Elasticsearch OutputSpec default values |

### .spec.outputDefaults.elasticsearch {id="_specoutputdefaultselasticsearch"}
#### Description {id="_description"}
ElasticsearchStructuredSpec is spec related to structured log changes to determine the elasticsearch index

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| enableStructuredContainerLogs | bool | **(optional)** EnableStructuredContainerLogs enables multi-container structured logs to allow |
| structuredTypeKey | string | **(optional)** StructuredTypeKey specifies the metadata key to be used as name of elasticsearch index |
| structuredTypeName | string | **(optional)** StructuredTypeName specifies the name of elasticsearch schema |

### .spec.outputs[] {id="_specoutputs"}
#### Description {id="_description"}
Output defines a destination for log messages.

##### Type {id="_type"}
*   array

<table>
<thead>
<tr>
  <th>Property</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>syslog</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>fluentdForward</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>elasticsearch</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>kafka</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>cloudwatch</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>loki</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>googleCloudLogging</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>splunk</td>
  <td>object</td>
  <td><strong>(optional)</strong></td>
</tr>
<tr>
  <td>name</td>
  <td>string</td>
  <td>Name used to refer to the output from a <code>pipeline</code>.</td>
</tr>
<tr>
  <td>secret</td>
  <td>object</td>
  <td><strong>(optional)</strong> Secret for authentication.</td>
</tr>
<tr>
  <td>tls</td>
  <td>object</td>
  <td>TLS contains settings for controlling options on TLS client connections.</td>
</tr>
<tr>
  <td>type</td>
  <td>string</td>
  <td>Type of output plugin.</td>
</tr>
<tr>
  <td>url</td>
  <td>string</td>
  <td><strong>(optional)</strong> URL to send log records to.</td>
</tr>
</tbody>
</table>

### .spec.outputs[].secret {id="_specoutputssecret"}
#### Description {id="_description"}
OutputSecretSpec is a secret reference containing name only, no namespace.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of a secret in the namespace configured for log forwarder secrets. |

### .spec.outputs[].tls {id="_specoutputstls"}
#### Description {id="_description"}
OutputTLSSpec contains options for TLS connections that are agnostic to the output type.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| insecureSkipVerify | bool | If InsecureSkipVerify is true, then the TLS client will be configured to ignore errors with certificates. |

### .spec.pipelines[] {id="_specpipelines"}
#### Description {id="_description"}
PipelinesSpec link a set of inputs to a set of outputs.

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| detectMultilineErrors | bool | **(optional)** DetectMultilineErrors enables multiline error detection of container logs |
| inputRefs | array | InputRefs lists the names (`input.name`) of inputs to this pipeline. |
| labels | object | **(optional)** Labels applied to log records passing through this pipeline. |
| name | string | **(optional)** Name is optional, but must be unique in the `pipelines` list if provided. |
| outputRefs | array | OutputRefs lists the names (`output.name`) of outputs from this pipeline. |
| parse | string | **(optional)** Parse enables parsing of log entries into structured logs |

### .spec.pipelines[].inputRefs[] {id="_specpipelinesinputrefs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .spec.pipelines[].labels {id="_specpipelineslabels"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.pipelines[].outputRefs[] {id="_specpipelinesoutputrefs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .status {id="_status"}
#### Description {id="_description"}
ClusterLogForwarderStatus defines the observed state of ClusterLogForwarder

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| conditions | object | Conditions of the log forwarder. |
| inputs | Conditions | Inputs maps input name to condition of the input. |
| outputs | Conditions | Outputs maps output name to condition of the output. |
| pipelines | Conditions | Pipelines maps pipeline name to condition of the pipeline. |

### .status.conditions {id="_statusconditions"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.inputs {id="_statusinputs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   Conditions

### .status.outputs {id="_statusoutputs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   Conditions

### .status.pipelines {id="_statuspipelines"}
#### Description {id="_description"}

##### Type {id="_type"}
*   Conditions== ClusterLogging
A Red Hat OpenShift Logging instance. ClusterLogging is the Schema for the clusterloggings API

| Property | Type | Description |
| --- | --- | --- |
| spec | object | Specification of the desired behavior of ClusterLogging |
| status | object | Status defines the observed state of ClusterLogging |

### .spec {id="_spec"}
#### Description {id="_description"}
ClusterLoggingSpec defines the desired state of ClusterLogging

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| collection | object | Specification of the Collection component for the cluster |
| curation | object | ***(DEPRECATED)*** **(optional)** Deprecated. Specification of the Curation component for the cluster |
| forwarder | object | ***(DEPRECATED)*** **(optional)** Deprecated. Specification for Forwarder component for the cluster |
| logStore | object | **(optional)** Specification of the Log Storage component for the cluster |
| managementState | string | **(optional)** Indicator if the resource is &#39;Managed&#39; or &#39;Unmanaged&#39; by the operator |
| visualization | object | **(optional)** Specification of the Visualization component for the cluster |

### .spec.collection {id="_speccollection"}
#### Description {id="_description"}
This is the struct that will contain information pertinent to Log and event collection

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| resources | object | **(optional)** The resource requirements for the collector |
| nodeSelector | object | **(optional)** Define which Nodes the Pods are scheduled on. |
| tolerations | array | **(optional)** Define the tolerations the Pods will accept |
| fluentd | object | **(optional)** Fluentd represents the configuration for forwarders of type fluentd. |
| logs | object | ***(DEPRECATED)*** **(optional)** Deprecated. Specification of Log Collection for the cluster |
| type | string | **(optional)** The type of Log Collection to configure |

### .spec.collection.fluentd {id="_speccollectionfluentd"}
#### Description {id="_description"}
FluentdForwarderSpec represents the configuration for forwarders of type fluentd.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| buffer | object |  |
| inFile | object |  |

### .spec.collection.fluentd.buffer {id="_speccollectionfluentdbuffer"}
#### Description {id="_description"}
FluentdBufferSpec represents a subset of fluentd buffer parameters to tune
the buffer configuration for all fluentd outputs. It supports a subset of
parameters to configure buffer and queue sizing, flush operations and retry
flushing.

For general parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#buffering-parameters

For flush parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#flushing-parameters

For retry parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#retries-parameters

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| chunkLimitSize | string | **(optional)** ChunkLimitSize represents the maximum size of each chunk. Events will be |
| flushInterval | string | **(optional)** FlushInterval represents the time duration to wait between two consecutive flush |
| flushMode | string | **(optional)** FlushMode represents the mode of the flushing thread to write chunks. The mode |
| flushThreadCount | int | **(optional)** FlushThreadCount reprents the number of threads used by the fluentd buffer |
| overflowAction | string | **(optional)** OverflowAction represents the action for the fluentd buffer plugin to |
| retryMaxInterval | string | **(optional)** RetryMaxInterval represents the maximum time interval for exponential backoff |
| retryTimeout | string | **(optional)** RetryTimeout represents the maximum time interval to attempt retries before giving up |
| retryType | string | **(optional)** RetryType represents the type of retrying flush operations. Flush operations can |
| retryWait | string | **(optional)** RetryWait represents the time duration between two consecutive retries to flush |
| totalLimitSize | string | **(optional)** TotalLimitSize represents the threshold of node space allowed per fluentd |

### .spec.collection.fluentd.inFile {id="_speccollectionfluentdinfile"}
#### Description {id="_description"}
FluentdInFileSpec represents a subset of fluentd in-tail plugin parameters
to tune the configuration for all fluentd in-tail inputs.

For general parameters refer to:
https://docs.fluentd.org/input/tail#parameters

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| readLinesLimit | int | **(optional)** ReadLinesLimit represents the number of lines to read with each I/O operation |

### .spec.collection.logs {id="_speccollectionlogs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| fluentd | object | Specification of the Fluentd Log Collection component |
| type | string | The type of Log Collection to configure |

### .spec.collection.logs.fluentd {id="_speccollectionlogsfluentd"}
#### Description {id="_description"}
CollectorSpec is spec to define scheduling and resources for a collector

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| nodeSelector | object | **(optional)** Define which Nodes the Pods are scheduled on. |
| resources | object | **(optional)** The resource requirements for the collector |
| tolerations | array | **(optional)** Define the tolerations the Pods will accept |

### .spec.collection.logs.fluentd.nodeSelector {id="_speccollectionlogsfluentdnodeselector"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.collection.logs.fluentd.resources {id="_speccollectionlogsfluentdresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.collection.logs.fluentd.resources.limits {id="_speccollectionlogsfluentdresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.collection.logs.fluentd.resources.requests {id="_speccollectionlogsfluentdresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.collection.logs.fluentd.tolerations[] {id="_speccollectionlogsfluentdtolerations"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| effect | string | **(optional)** Effect indicates the taint effect to match. Empty means match all taint effects. |
| key | string | **(optional)** Key is the taint key that the toleration applies to. Empty means match all taint keys. |
| operator | string | **(optional)** Operator represents a key&#39;s relationship to the value. |
| tolerationSeconds | int | **(optional)** TolerationSeconds represents the period of time the toleration (which must be |
| value | string | **(optional)** Value is the taint value the toleration matches to. |

### .spec.collection.logs.fluentd.tolerations[].tolerationSeconds {id="_speccollectionlogsfluentdtolerationstolerationseconds"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

### .spec.curation {id="_speccuration"}
#### Description {id="_description"}
This is the struct that will contain information pertinent to Log curation (Curator)

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| curator | object | The specification of curation to configure |
| type | string | The kind of curation to configure |

### .spec.curation.curator {id="_speccurationcurator"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| nodeSelector | object | Define which Nodes the Pods are scheduled on. |
| resources | object | **(optional)** The resource requirements for Curator |
| schedule | string | The cron schedule that the Curator job is run. Defaults to &#34;30 3 * * *&#34; |
| tolerations | array |  |

### .spec.curation.curator.nodeSelector {id="_speccurationcuratornodeselector"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.curation.curator.resources {id="_speccurationcuratorresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.curation.curator.resources.limits {id="_speccurationcuratorresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.curation.curator.resources.requests {id="_speccurationcuratorresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.curation.curator.tolerations[] {id="_speccurationcuratortolerations"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| effect | string | **(optional)** Effect indicates the taint effect to match. Empty means match all taint effects. |
| key | string | **(optional)** Key is the taint key that the toleration applies to. Empty means match all taint keys. |
| operator | string | **(optional)** Operator represents a key&#39;s relationship to the value. |
| tolerationSeconds | int | **(optional)** TolerationSeconds represents the period of time the toleration (which must be |
| value | string | **(optional)** Value is the taint value the toleration matches to. |

### .spec.curation.curator.tolerations[].tolerationSeconds {id="_speccurationcuratortolerationstolerationseconds"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

### .spec.forwarder {id="_specforwarder"}
#### Description {id="_description"}
ForwarderSpec contains global tuning parameters for specific forwarder implementations.
This field is not required for general use, it allows performance tuning by users
familiar with the underlying forwarder technology.
Currently supported: `fluentd`.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| fluentd | object |  |

### .spec.forwarder.fluentd {id="_specforwarderfluentd"}
#### Description {id="_description"}
FluentdForwarderSpec represents the configuration for forwarders of type fluentd.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| buffer | object |  |
| inFile | object |  |

### .spec.forwarder.fluentd.buffer {id="_specforwarderfluentdbuffer"}
#### Description {id="_description"}
FluentdBufferSpec represents a subset of fluentd buffer parameters to tune
the buffer configuration for all fluentd outputs. It supports a subset of
parameters to configure buffer and queue sizing, flush operations and retry
flushing.

For general parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#buffering-parameters

For flush parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#flushing-parameters

For retry parameters refer to:
https://docs.fluentd.org/configuration/buffer-section#retries-parameters

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| chunkLimitSize | string | **(optional)** ChunkLimitSize represents the maximum size of each chunk. Events will be |
| flushInterval | string | **(optional)** FlushInterval represents the time duration to wait between two consecutive flush |
| flushMode | string | **(optional)** FlushMode represents the mode of the flushing thread to write chunks. The mode |
| flushThreadCount | int | **(optional)** FlushThreadCount reprents the number of threads used by the fluentd buffer |
| overflowAction | string | **(optional)** OverflowAction represents the action for the fluentd buffer plugin to |
| retryMaxInterval | string | **(optional)** RetryMaxInterval represents the maximum time interval for exponential backoff |
| retryTimeout | string | **(optional)** RetryTimeout represents the maximum time interval to attempt retries before giving up |
| retryType | string | **(optional)** RetryType represents the type of retrying flush operations. Flush operations can |
| retryWait | string | **(optional)** RetryWait represents the time duration between two consecutive retries to flush |
| totalLimitSize | string | **(optional)** TotalLimitSize represents the threshold of node space allowed per fluentd |

### .spec.forwarder.fluentd.inFile {id="_specforwarderfluentdinfile"}
#### Description {id="_description"}
FluentdInFileSpec represents a subset of fluentd in-tail plugin parameters
to tune the configuration for all fluentd in-tail inputs.

For general parameters refer to:
https://docs.fluentd.org/input/tail#parameters

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| readLinesLimit | int | **(optional)** ReadLinesLimit represents the number of lines to read with each I/O operation |

### .spec.logStore {id="_speclogstore"}
#### Description {id="_description"}
The LogStoreSpec contains information about how logs are stored.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| elasticsearch | object | Specification of the Elasticsearch Log Store component |
| lokistack | object | LokiStack contains information about which LokiStack to use for log storage if Type is set to LogStoreTypeLokiStack. |
| retentionPolicy | object | **(optional)** Retention policy defines the maximum age for an index after which it should be deleted |
| type | string | The Type of Log Storage to configure. The operator currently supports either using ElasticSearch |

### .spec.logStore.elasticsearch {id="_speclogstoreelasticsearch"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| nodeCount | int | Number of nodes to deploy for Elasticsearch |
| nodeSelector | object | Define which Nodes the Pods are scheduled on. |
| proxy | object | Specification of the Elasticsearch Proxy component |
| redundancyPolicy | string | **(optional)** |
| resources | object | **(optional)** The resource requirements for Elasticsearch |
| storage | object | **(optional)** The storage specification for Elasticsearch data nodes |
| tolerations | array |  |

### .spec.logStore.elasticsearch.nodeSelector {id="_speclogstoreelasticsearchnodeselector"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.logStore.elasticsearch.proxy {id="_speclogstoreelasticsearchproxy"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| resources | object |  |

### .spec.logStore.elasticsearch.proxy.resources {id="_speclogstoreelasticsearchproxyresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.logStore.elasticsearch.proxy.resources.limits {id="_speclogstoreelasticsearchproxyresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.logStore.elasticsearch.proxy.resources.requests {id="_speclogstoreelasticsearchproxyresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.logStore.elasticsearch.resources {id="_speclogstoreelasticsearchresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.logStore.elasticsearch.resources.limits {id="_speclogstoreelasticsearchresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.logStore.elasticsearch.resources.requests {id="_speclogstoreelasticsearchresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.logStore.elasticsearch.storage {id="_speclogstoreelasticsearchstorage"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| size | object | The max storage capacity for the node to provision. |
| storageClassName | string | **(optional)** The name of the storage class to use with creating the node&#39;s PVC. |

### .spec.logStore.elasticsearch.storage.size {id="_speclogstoreelasticsearchstoragesize"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| Format | string | Change Format at will. See the comment for Canonicalize for |
| d | object | d is the quantity in inf.Dec form if d.Dec != nil |
| i | int | i is the quantity in int64 scaled form, if d.Dec == nil |
| s | string | s is the generated value of this quantity to avoid recalculation |

### .spec.logStore.elasticsearch.storage.size.d {id="_speclogstoreelasticsearchstoragesized"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| Dec | object |  |

### .spec.logStore.elasticsearch.storage.size.d.Dec {id="_speclogstoreelasticsearchstoragesizeddec"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| scale | int |  |
| unscaled | object |  |

### .spec.logStore.elasticsearch.storage.size.d.Dec.unscaled {id="_speclogstoreelasticsearchstoragesizeddecunscaled"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| abs | Word | sign |
| neg | bool |  |

### .spec.logStore.elasticsearch.storage.size.d.Dec.unscaled.abs {id="_speclogstoreelasticsearchstoragesizeddecunscaledabs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   Word

### .spec.logStore.elasticsearch.storage.size.i {id="_speclogstoreelasticsearchstoragesizei"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

| Property | Type | Description |
| --- | --- | --- |
| scale | int |  |
| value | int |  |

### .spec.logStore.elasticsearch.tolerations[] {id="_speclogstoreelasticsearchtolerations"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| effect | string | **(optional)** Effect indicates the taint effect to match. Empty means match all taint effects. |
| key | string | **(optional)** Key is the taint key that the toleration applies to. Empty means match all taint keys. |
| operator | string | **(optional)** Operator represents a key&#39;s relationship to the value. |
| tolerationSeconds | int | **(optional)** TolerationSeconds represents the period of time the toleration (which must be |
| value | string | **(optional)** Value is the taint value the toleration matches to. |

### .spec.logStore.elasticsearch.tolerations[].tolerationSeconds {id="_speclogstoreelasticsearchtolerationstolerationseconds"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

### .spec.logStore.lokistack {id="_speclogstorelokistack"}
#### Description {id="_description"}
LokiStackStoreSpec is used to set up cluster-logging to use a LokiStack as logging storage.
It points to an existing LokiStack in the same namespace.

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the LokiStack resource. |

### .spec.logStore.retentionPolicy {id="_speclogstoreretentionpolicy"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

<table>
<thead>
<tr>
  <th>Property</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>application</td>
  <td>object</td>
  <td>audit</td>
</tr>
<tr>
  <td>object</td>
  <td>infra</td>
  <td>object</td>
</tr>
</tbody>
</table>

### .spec.logStore.retentionPolicy.application {id="_speclogstoreretentionpolicyapplication"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| diskThresholdPercent | int | **(optional)** The threshold percentage of ES disk usage that when reached, old indices should be deleted (e.g. 75) |
| maxAge | string | **(optional)** |
| namespaceSpec | array | **(optional)** The per namespace specification to delete documents older than a given minimum age |
| pruneNamespacesInterval | string | **(optional)** How often to run a new prune-namespaces job |

### .spec.logStore.retentionPolicy.application.namespaceSpec[] {id="_speclogstoreretentionpolicyapplicationnamespacespec"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| minAge | string | **(optional)** Delete the records matching the namespaces which are older than this MinAge (e.g. 1d) |
| namespace | string | Target Namespace to delete logs older than MinAge (defaults to 7d) |

### .spec.logStore.retentionPolicy.audit {id="_speclogstoreretentionpolicyaudit"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| diskThresholdPercent | int | **(optional)** The threshold percentage of ES disk usage that when reached, old indices should be deleted (e.g. 75) |
| maxAge | string | **(optional)** |
| namespaceSpec | array | **(optional)** The per namespace specification to delete documents older than a given minimum age |
| pruneNamespacesInterval | string | **(optional)** How often to run a new prune-namespaces job |

### .spec.logStore.retentionPolicy.audit.namespaceSpec[] {id="_speclogstoreretentionpolicyauditnamespacespec"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| minAge | string | **(optional)** Delete the records matching the namespaces which are older than this MinAge (e.g. 1d) |
| namespace | string | Target Namespace to delete logs older than MinAge (defaults to 7d) |

### .spec.logStore.retentionPolicy.infra {id="_speclogstoreretentionpolicyinfra"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| diskThresholdPercent | int | **(optional)** The threshold percentage of ES disk usage that when reached, old indices should be deleted (e.g. 75) |
| maxAge | string | **(optional)** |
| namespaceSpec | array | **(optional)** The per namespace specification to delete documents older than a given minimum age |
| pruneNamespacesInterval | string | **(optional)** How often to run a new prune-namespaces job |

### .spec.logStore.retentionPolicy.infra.namespaceSpec[] {id="_speclogstoreretentionpolicyinfranamespacespec"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| minAge | string | **(optional)** Delete the records matching the namespaces which are older than this MinAge (e.g. 1d) |
| namespace | string | Target Namespace to delete logs older than MinAge (defaults to 7d) |

### .spec.visualization {id="_specvisualization"}
#### Description {id="_description"}
This is the struct that will contain information pertinent to Log visualization (Kibana)

##### Type {id="_type"}
*   object

<table>
<thead>
<tr>
  <th>Property</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>kibana</td>
  <td>object</td>
  <td>Specification of the Kibana Visualization component</td>
</tr>
<tr>
  <td>type</td>
  <td>string</td>
  <td>The type of Visualization to configure</td>
</tr>
</tbody>
</table>

### .spec.visualization.kibana {id="_specvisualizationkibana"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| nodeSelector | object | Define which Nodes the Pods are scheduled on. |
| proxy | object | Specification of the Kibana Proxy component |
| replicas | int | Number of instances to deploy for a Kibana deployment |
| resources | object | **(optional)** The resource requirements for Kibana |
| tolerations | array |  |

### .spec.visualization.kibana.nodeSelector {id="_specvisualizationkibananodeselector"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.visualization.kibana.proxy {id="_specvisualizationkibanaproxy"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| resources | object |  |

### .spec.visualization.kibana.proxy.resources {id="_specvisualizationkibanaproxyresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.visualization.kibana.proxy.resources.limits {id="_specvisualizationkibanaproxyresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.visualization.kibana.proxy.resources.requests {id="_specvisualizationkibanaproxyresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.visualization.kibana.replicas {id="_specvisualizationkibanareplicas"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

### .spec.visualization.kibana.resources {id="_specvisualizationkibanaresources"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| limits | object | **(optional)** Limits describes the maximum amount of compute resources allowed. |
| requests | object | **(optional)** Requests describes the minimum amount of compute resources required. |

### .spec.visualization.kibana.resources.limits {id="_specvisualizationkibanaresourceslimits"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.visualization.kibana.resources.requests {id="_specvisualizationkibanaresourcesrequests"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .spec.visualization.kibana.tolerations[] {id="_specvisualizationkibanatolerations"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| effect | string | **(optional)** Effect indicates the taint effect to match. Empty means match all taint effects. |
| key | string | **(optional)** Key is the taint key that the toleration applies to. Empty means match all taint keys. |
| operator | string | **(optional)** Operator represents a key&#39;s relationship to the value. |
| tolerationSeconds | int | **(optional)** TolerationSeconds represents the period of time the toleration (which must be |
| value | string | **(optional)** Value is the taint value the toleration matches to. |

### .spec.visualization.kibana.tolerations[].tolerationSeconds {id="_specvisualizationkibanatolerationstolerationseconds"}
#### Description {id="_description"}

##### Type {id="_type"}
*   int

### .status {id="_status"}
#### Description {id="_description"}
ClusterLoggingStatus defines the observed state of ClusterLogging

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| collection | object | **(optional)** |
| conditions | object | **(optional)** |
| curation | object | **(optional)** |
| logStore | object | **(optional)** |
| visualization | object | **(optional)** |

### .status.collection {id="_statuscollection"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| logs | object | **(optional)** |

### .status.collection.logs {id="_statuscollectionlogs"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| fluentdStatus | object | **(optional)** |

### .status.collection.logs.fluentdStatus {id="_statuscollectionlogsfluentdstatus"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| clusterCondition | object | **(optional)** |
| daemonSet | string | **(optional)** |
| nodes | object | **(optional)** |
| pods | string | **(optional)** |

### .status.collection.logs.fluentdStatus.clusterCondition {id="_statuscollectionlogsfluentdstatusclustercondition"}
#### Description {id="_description"}
`operator-sdk generate crds` does not allow map-of-slice, must use a named type.

##### Type {id="_type"}
*   object

### .status.collection.logs.fluentdStatus.nodes {id="_statuscollectionlogsfluentdstatusnodes"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.conditions {id="_statusconditions"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.curation {id="_statuscuration"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| curatorStatus | array | **(optional)** |

### .status.curation.curatorStatus[] {id="_statuscurationcuratorstatus"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| clusterCondition | object | **(optional)** |
| cronJobs | string | **(optional)** |
| schedules | string | **(optional)** |
| suspended | bool | **(optional)** |

### .status.curation.curatorStatus[].clusterCondition {id="_statuscurationcuratorstatusclustercondition"}
#### Description {id="_description"}
`operator-sdk generate crds` does not allow map-of-slice, must use a named type.

##### Type {id="_type"}
*   object

### .status.logStore {id="_statuslogstore"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| elasticsearchStatus | array | **(optional)** |

### .status.logStore.elasticsearchStatus[] {id="_statuslogstoreelasticsearchstatus"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| cluster | object | **(optional)** |
| clusterConditions | object | **(optional)** |
| clusterHealth | string | **(optional)** |
| clusterName | string | **(optional)** |
| deployments | array | **(optional)** |
| nodeConditions | object | **(optional)** |
| nodeCount | int | **(optional)** |
| pods | object | **(optional)** |
| replicaSets | array | **(optional)** |
| shardAllocationEnabled | string | **(optional)** |
| statefulSets | array | **(optional)** |

### .status.logStore.elasticsearchStatus[].cluster {id="_statuslogstoreelasticsearchstatuscluster"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| activePrimaryShards | int | The number of Active Primary Shards for the Elasticsearch Cluster |
| activeShards | int | The number of Active Shards for the Elasticsearch Cluster |
| initializingShards | int | The number of Initializing Shards for the Elasticsearch Cluster |
| numDataNodes | int | The number of Data Nodes for the Elasticsearch Cluster |
| numNodes | int | The number of Nodes for the Elasticsearch Cluster |
| pendingTasks | int |  |
| relocatingShards | int | The number of Relocating Shards for the Elasticsearch Cluster |
| status | string | The current Status of the Elasticsearch Cluster |
| unassignedShards | int | The number of Unassigned Shards for the Elasticsearch Cluster |

### .status.logStore.elasticsearchStatus[].clusterConditions {id="_statuslogstoreelasticsearchstatusclusterconditions"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.logStore.elasticsearchStatus[].deployments[] {id="_statuslogstoreelasticsearchstatusdeployments"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .status.logStore.elasticsearchStatus[].nodeConditions {id="_statuslogstoreelasticsearchstatusnodeconditions"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.logStore.elasticsearchStatus[].pods {id="_statuslogstoreelasticsearchstatuspods"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.logStore.elasticsearchStatus[].replicaSets[] {id="_statuslogstoreelasticsearchstatusreplicasets"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .status.logStore.elasticsearchStatus[].statefulSets[] {id="_statuslogstoreelasticsearchstatusstatefulsets"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

### .status.visualization {id="_statusvisualization"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

| Property | Type | Description |
| --- | --- | --- |
| kibanaStatus | array | **(optional)** |

### .status.visualization.kibanaStatus[] {id="_statusvisualizationkibanastatus"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array

| Property | Type | Description |
| --- | --- | --- |
| clusterCondition | object | **(optional)** |
| deployment | string | **(optional)** |
| pods | string | **(optional)** The status for each of the Kibana pods for the Visualization component |
| replicaSets | array | **(optional)** |
| replicas | int | **(optional)** |

### .status.visualization.kibanaStatus[].clusterCondition {id="_statusvisualizationkibanastatusclustercondition"}
#### Description {id="_description"}

##### Type {id="_type"}
*   object

### .status.visualization.kibanaStatus[].replicaSets[] {id="_statusvisualizationkibanastatusreplicasets"}
#### Description {id="_description"}

##### Type {id="_type"}
*   array