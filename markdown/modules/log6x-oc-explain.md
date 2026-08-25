{%- set _mod_docs_content_type = "CONCEPT" %}

# Using the `oc explain` command {id="log6x-oc-explain_{{ context }}"}

The `oc explain` command is an essential tool in the OpenShift CLI `oc` that provides detailed descriptions of the fields within Custom Resources (CRs). This command is invaluable for administrators and developers who are configuring or troubleshooting resources in an OpenShift cluster.

## Resource Descriptions {id="_resource_descriptions"}
`oc explain` offers in-depth explanations of all fields associated with a specific object. This includes standard resources like pods and services, as well as more complex entities like statefulsets and custom resources defined by Operators.

To view the documentation for the `outputs` field of the `ClusterLogForwarder` custom resource, you can use:

```terminal
$ oc explain clusterlogforwarders.observability.openshift.io.spec.outputs
```


:::note

In place of `clusterlogforwarder` the short form `obsclf` can be used.

:::


This will display detailed information about these fields, including their types, default values, and any associated sub-fields.

## Hierarchical Structure {id="_hierarchical_structure"}
The command displays the structure of resource fields in a hierarchical format, clarifying the relationships between different configuration options.

For instance, here’s how you can drill down into the `storage` configuration for a `LokiStack` custom resource:

```terminal
$ oc explain lokistacks.loki.grafana.com
```

```terminal
$ oc explain lokistacks.loki.grafana.com.spec
```

```terminal
$ oc explain lokistacks.loki.grafana.com.spec.storage
```

```terminal
$ oc explain lokistacks.loki.grafana.com.spec.storage.schemas
```

Each command reveals a deeper level of the resource specification, making the structure clear.

## Type Information {id="_type_information"}
`oc explain` also indicates the type of each field (such as string, integer, or boolean), allowing you to verify that resource definitions use the correct data types.

For example:

```terminal
$ oc explain lokistacks.loki.grafana.com.spec.size
```

This will show that `size` should be defined using an integer value.

## Default Values {id="_default_values"}
When applicable, the command shows the default values for fields, providing insights into what values will be used if none are explicitly specified.

Again using `lokistacks.loki.grafana.com` as an example:

```terminal
$ oc explain lokistacks.spec.template.distributor.replicas
```

```terminal title="Example output"
GROUP:      loki.grafana.com
KIND:       LokiStack
VERSION:    v1

FIELD: replicas <integer>

DESCRIPTION:
    Replicas defines the number of replica pods of the component.
```