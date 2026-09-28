{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a KubeletConfig CR to edit kubelet parameters {id="create-kubeletconfig-cr-to-edit-kubelet-parameters-con_{{ context }}"}

You can change kubelet settings such as `maxPods`, `podPidsLimit`, and `containerLogMaxSize` by creating a `KubeletConfig` object. The Machine Config Operator applies the object to every node in the machine config pool that the object selects.