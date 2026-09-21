{%- set _mod_docs_content_type = "CONCEPT" %}
# Delete `ContainerRuntimeConfig` objects from your cluster {id="delete-containerruntimeconfig-objects-from-my-cluster-con_{{ context }}"}

You use a `ContainerRuntimeConfig` custom resource (CR) to change CRI-O settings on the nodes in a machine config pool. Because the Machine Config Operator generates a rendered machine config from each CR, removing one follows a specific process so that the affected nodes return cleanly to their previous configuration.