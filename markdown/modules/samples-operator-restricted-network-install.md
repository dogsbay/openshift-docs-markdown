{%- set _mod_docs_content_type = "CONCEPT" %}
# Restricted network installation {id="samples-operator-restricted-network-install-con_{{ context }}"}

The Cluster Samples Operator boostrapping itself as `Removed` when unable to access `registry.redhat.io` facilitates restricted network installations when the network restriction is already in place. {._abstract}

As a cluster administrator, you have more time to decide if samples are needed when the Operator is boostrapped `Removed`. This is because the Cluster Samples Operator does not submit alerts that sample image stream imports are failing when the management state is `Removed`. When the Cluster Samples Operator management state is `Managed`, and the Operator attempts to install sample image streams, failing-import alerts start two hours after initial installation.