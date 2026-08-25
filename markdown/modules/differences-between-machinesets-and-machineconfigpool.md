{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the difference between compute machine sets and the machine config pool {id="differences-between-machinesets-and-machineconfigpool_{{ context }}"}

Compute machine sets and machine config pools control different aspects of node lifecycle in {{ product_title }}. Understanding how each object relates to scaling and upgrades helps you configure nodes correctly. {._abstract}

`MachineSet` objects describe {{ product_title }} nodes with respect to the cloud or machine provider.

The `MachineConfigPool` object allows `MachineConfigController` components to define and provide the status of machines in the context of upgrades.

The `MachineConfigPool` object allows users to configure how upgrades are rolled out to the {{ product_title }} nodes in the machine config pool.

The `NodeSelector` object can be replaced with a reference to the `MachineSet` object.