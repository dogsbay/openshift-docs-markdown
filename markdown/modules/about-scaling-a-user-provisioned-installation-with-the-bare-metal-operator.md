{%- set _mod_docs_content_type = "CONCEPT" %}

# About scaling a user-provisioned cluster with the Bare Metal Operator {id="about-scaling-a-user-provisioned-cluster-with-the-bare-metal-operator_{{ context }}"}

You can scale user-provisioned infrastructure clusters by using the Bare Metal Operator (BMO) and other metal^3^ components. User-provisioned infrastructure installations do not feature the Machine API Operator. The Machine API Operator typically manages the lifecycle of bare-metal nodes in a cluster. However, it is possible to use the BMO and other metal^3^ components to scale nodes in user-provisioned clusters without requiring the Machine API Operator.