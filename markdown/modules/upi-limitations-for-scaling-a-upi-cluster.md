{%- set _mod_docs_content_type = "CONCEPT" %}

# Limitations for scaling a user-provisioned cluster {id="upi-limitations-for-scaling-a-upi-cluster_{{ context }}"}

*   You cannot use a provisioning network to scale user-provisioned infrastructure clusters by using the Bare Metal Operator (BMO).
    *   Consequentially, you can only use bare-metal host drivers that support virtual media networking booting, for example `redfish-virtualmedia` and `idrac-virtualmedia`.
*   You cannot scale `MachineSet` objects in user-provisioned infrastructure clusters by using the BMO.