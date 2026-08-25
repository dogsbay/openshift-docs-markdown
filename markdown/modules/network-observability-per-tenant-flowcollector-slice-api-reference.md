{%- set _mod_docs_content_type = "REFERENCE" %}
# FlowCollectorSlice [flows.netobserv.io/v1alpha1] {id="flowcollectorslice-flows-netobserv-io-v1alpha1_{{ context }}"}


Description
:   FlowCollectorSlice is the API allowing to decentralize some of the FlowCollector configuration per namespace tenant.


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and might reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. Servers might infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds |
| `metadata` | `object` | Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata |
| `spec` | `object` | FlowCollectorSliceSpec defines the desired state of FlowCollectorSlice |
## .metadata {id="_metadata"}

Description
:   Standard object’s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata


Type
:     `object`

## .spec {id="_spec"}

Description
:   FlowCollectorSliceSpec defines the desired state of FlowCollectorSlice


Type
:     `object`

| Property | Type | Description |
| --- | --- | --- |
| `sampling` | `integer` | `sampling` is an optional sampling interval to apply to this slice. For example, a value of `50` means that 1 matching flow in 50 is sampled. |
| `subnetLabels` | `array` | `subnetLabels` allows you to customize subnets and IPs labeling, such as to identify cluster external workloads or web services. External subnets must be labeled with the prefix `EXT:`, or not labeled at all, in order to work with default quick filters and some metrics examples provided.<br> Beware that the subnet labels configured in FlowCollectorSlice are not limited to the flows of the related namespace: any flow in the whole cluster can be labeled using this configuration. However, subnet labels defined in the cluster-scoped FlowCollector take precedence in case of conflicting rules. |
## .spec.subnetLabels {id="_specsubnetlabels"}

Description
:   `subnetLabels` allows you to customize subnets and IPs labeling, such as to identify cluster external workloads or web services.
    External subnets must be labeled with the prefix `EXT:`, or not labeled at all, in order to work with default quick filters and some metrics examples provided. +


    Beware that the subnet labels configured in FlowCollectorSlice are not limited to the flows of the related namespace: any flow
    in the whole cluster can be labeled using this configuration. However, subnet labels defined in the cluster-scoped FlowCollector take
    precedence in case of conflicting rules.


Type
:     `array`

## .spec.subnetLabels[] {id="_specsubnetlabels"}

Description
:   SubnetLabel allows to label subnets and IPs, such as to identify cluster-external workloads or web services.


Type
:     `object`


Required
:   *   `cidrs`
    *   `name`

| Property | Type | Description |
| --- | --- | --- |
| `cidrs` | `array (string)` | List of CIDRs, such as `["1.2.3.4/32"]`. |
| `name` | `string` | Label name, used to flag matching flows. External subnets must be labeled with the prefix `EXT:`, or not labeled at all, in order to work with default quick filters and some metrics examples provided. + |