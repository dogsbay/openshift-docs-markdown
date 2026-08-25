{%- set _mod_docs_content_type = "REFERENCE" %}
# Machine API capability {id="machine-api-capability_{{ context }}"}

The `machine-api-operator`, `cluster-autoscaler-operator`, and `cluster-control-plane-machine-set-operator` Operators provide the features for the `MachineAPI` capability. You can disable this capability only if you install a cluster with user-provisioned infrastructure. {._abstract}

The Machine API capability is responsible for all machine configuration and management in the cluster. If you disable the Machine API capability during installation, you need to manage all machine-related tasks manually.