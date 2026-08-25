{%- set _mod_docs_content_type = "REFERENCE" %}
# Compliance Operator profile types {id="compliance_profile_types_{{ context }}"}

To assess both platform and node compliance for your required benchmarks, you can select from different Compliance Operator profile types. {._abstract}


Platform
:   Platform profiles evaluate your {{ product_title }} cluster components. For example, a Platform-level rule can confirm whether APIServer configurations are using strong encryption cyphers.


Node
:   Node profiles evaluate the OpenShift or {{ op_system }} configuration of each host. You can use two node profiles: `ocp4` node profiles and `rhcos4` node profiles. The `ocp4` node profiles evaluate the OpenShift configuration of each host. For example, they can confirm whether `kubeconfig` files have the correct permissions to meet a compliance standard. The `rhcos4` node profiles evaluate the {{ op_system_first }} configuration of each host. For example, they can confirm whether the SSHD service is configured to disable password logins.


:::important

For benchmarks that have Node and Platform profiles, such as PCI-DSS, you must run both profiles in your {{ product_title }} environment.

For benchmarks that have `ocp4` Platform, `ocp4` Node, and `rhcos4` node profiles, such as FedRAMP High, you must run all three profiles in your {{ product_title }} environment.

:::



:::note

In a cluster with many Nodes, both `ocp4` Node and `rhcos4` Node scans might take a long time to complete.

:::