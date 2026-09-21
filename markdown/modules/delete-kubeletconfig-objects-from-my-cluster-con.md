{%- set _mod_docs_content_type = "CONCEPT" %}
# Delete `KubeletConfig` objects from your cluster {id="delete-kubeletconfig-objects-from-my-cluster-con_{{ context }}"}

You use a `KubeletConfig` custom resource (CR) to change kubelet settings on the nodes in a machine config pool. Because the Machine Config Operator generates a rendered machine config from each CR, removing one follows a specific process so that the affected nodes return cleanly to their previous configuration.