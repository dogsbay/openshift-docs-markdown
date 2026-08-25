{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting connectivity from the control plane to the data plane {id="hcp-ts-connect-data-plane_{{ context }}"}

To diagnose connectivity issues from a hosted control plane to the compute nodes in a data plane, check the status of the `DataPlaneConnectionAvailable` condition. {._abstract}

If the status of the `DataPlaneConnectionAvailable` condition is `True`, the control plane can successfully reach the data plane nodes through the `konnectivity-agent` pods. If the status is `False`, take the following steps to determine why the control plane cannot reach the data plane.

**Procedure**

1.  Check the network policies that might block the `Konnectivity` service traffic.
1.  Review the firewall rules between the control plane and the data plane.
1.  View the status of the `konnectivity-agent` pods in the data plane.
1.  In the control plane, review the `Konnectivity` server deployment.