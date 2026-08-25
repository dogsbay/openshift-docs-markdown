{%- set _mod_docs_content_type = "CONCEPT" %}
# Console Operator {id="ztp-sno-du-removing-the-console-operator_{{ context }}"}

Use the cluster capabilities feature to prevent the Console Operator from being installed.
When the node is centrally managed it is not needed.
Removing the Operator provides additional space and capacity for application workloads. {._abstract}

To disable the Console Operator during the installation of the managed cluster, set the following in the `spec.installConfigOverrides` field of the `ClusterInstance` custom resource (CR):

```yaml
installConfigOverrides:  "{\"capabilities\":{\"baselineCapabilitySet\": \"None\" }}"
```