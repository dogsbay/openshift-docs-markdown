## kubernetes {id="cluster-logging-exported-fields-kubernetes_{{ context }}"}

The namespace for Kubernetes-specific metadata


Data type
:   group

### kubernetes.pod_name {id="_kubernetespod_name"}

The name of the pod


Data type
:   keyword

### kubernetes.pod_id {id="_kubernetespod_id"}

The Kubernetes ID of the pod


Data type
:   keyword

### kubernetes.namespace_name {id="_kubernetesnamespace_name"}

The name of the namespace in Kubernetes


Data type
:   keyword

### kubernetes.namespace_id {id="_kubernetesnamespace_id"}

The ID of the namespace in Kubernetes


Data type
:   keyword

### kubernetes.host {id="_kuberneteshost"}

The Kubernetes node name


Data type
:   keyword

### kubernetes.container_name {id="_kubernetescontainer_name"}

The name of the container in Kubernetes


Data type
:   keyword

### kubernetes.annotations {id="_kubernetesannotations"}

Annotations associated with the Kubernetes object


Data type
:   group

### kubernetes.labels {id="_kuberneteslabels"}

Labels present on the original Kubernetes Pod


Data type
:   group

### kubernetes.event {id="_kubernetesevent"}

The Kubernetes event obtained from the Kubernetes master API. This event description loosely follows `type Event` in [Event v1 core](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#event-v1-core).


Data type
:   group

#### kubernetes.event.verb {id="_kuberneteseventverb"}

The type of event, `ADDED`, `MODIFIED`, or `DELETED`


Data type
:   keyword

Example value
:   `ADDED`

#### kubernetes.event.metadata {id="_kuberneteseventmetadata"}

Information related to the location and time of the event creation


Data type
:   group

##### kubernetes.event.metadata.name {id="_kuberneteseventmetadataname"}

The name of the object that triggered the event creation


Data type
:   keyword

Example value
:   `java-mainclass-1.14d888a4cfc24890`

##### kubernetes.event.metadata.namespace {id="_kuberneteseventmetadatanamespace"}

The name of the namespace where the event originally occurred. Note that it differs from `kubernetes.namespace_name`, which is the namespace where the `eventrouter` application is deployed.


Data type
:   keyword

Example value
:   `default`

##### kubernetes.event.metadata.selfLink {id="_kuberneteseventmetadataselflink"}

A link to the event


Data type
:   keyword

Example value
:   `/api/v1/namespaces/javaj/events/java-mainclass-1.14d888a4cfc24890`

##### kubernetes.event.metadata.uid {id="_kuberneteseventmetadatauid"}

The unique ID of the event


Data type
:   keyword

Example value
:   `d828ac69-7b58-11e7-9cf5-5254002f560c`

##### kubernetes.event.metadata.resourceVersion {id="_kuberneteseventmetadataresourceversion"}

A string that identifies the server’s internal version of the event. Clients can use this string to determine when objects have changed.


Data type
:   integer

Example value
:   `311987`

#### kubernetes.event.involvedObject {id="_kuberneteseventinvolvedobject"}

The object that the event is about.


Data type
:   group

##### kubernetes.event.involvedObject.kind {id="_kuberneteseventinvolvedobjectkind"}

The type of object


Data type
:   keyword

Example value
:   `ReplicationController`

##### kubernetes.event.involvedObject.namespace {id="_kuberneteseventinvolvedobjectnamespace"}

The namespace name of the involved object. Note that it may differ from `kubernetes.namespace_name`, which is the namespace where the `eventrouter` application is deployed.


Data type
:   keyword

Example value
:   `default`

##### kubernetes.event.involvedObject.name {id="_kuberneteseventinvolvedobjectname"}

The name of the object that triggered the event


Data type
:   keyword

Example value
:   `java-mainclass-1`

##### kubernetes.event.involvedObject.uid {id="_kuberneteseventinvolvedobjectuid"}

The unique ID of the object


Data type
:   keyword

Example value
:   `e6bff941-76a8-11e7-8193-5254002f560c`

##### kubernetes.event.involvedObject.apiVersion {id="_kuberneteseventinvolvedobjectapiversion"}

The version of kubernetes master API


Data type
:   keyword

Example value
:   `v1`

##### kubernetes.event.involvedObject.resourceVersion {id="_kuberneteseventinvolvedobjectresourceversion"}

A string that identifies the server’s internal version of the pod that triggered the event. Clients can use this string to determine when objects have changed.


Data type
:   keyword

Example value
:   `308882`

#### kubernetes.event.reason {id="_kuberneteseventreason"}

A short machine-understandable string that gives the reason for generating this event


Data type
:   keyword

Example value
:   `SuccessfulCreate`

#### kubernetes.event.source_component {id="_kuberneteseventsource_component"}

The component that reported this event


Data type
:   keyword

Example value
:   `replication-controller`

#### kubernetes.event.firstTimestamp {id="_kuberneteseventfirsttimestamp"}

The time at which the event was first recorded


Data type
:   date

Example value
:   `2017-08-07 10:11:57.000000000 Z`

#### kubernetes.event.count {id="_kuberneteseventcount"}

The number of times this event has occurred


Data type
:   integer

Example value
:   `1`

#### kubernetes.event.type {id="_kuberneteseventtype"}

The type of event, `Normal` or `Warning`. New types could be added in the future.


Data type
:   keyword

Example value
:   `Normal`

## OpenShift {id="_openshift"}

The namespace for openshift-logging specific metadata


Data type
:   group

### openshift.labels {id="_openshiftlabels"}

Labels added by the Cluster Log Forwarder configuration


Data type
:   group