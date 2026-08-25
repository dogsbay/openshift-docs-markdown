{%- set _mod_docs_content_type = "REFERENCE" %}
# GatewayClass status conditions reference {id="gatewayclass-status-conditions_{{ context }}"}

To verify that your `GatewayClass` custom resource (CR) is valid and ready to provision gateways, review its `status` conditions. A healthy `GatewayClass` CR reports a status of `True` for core conditions like `Accepted` and `SupportedVersion`. {._abstract}

**`GatewayClass` CR status conditions**

| Condition | Status | Description and common reasons |
| --- | --- | --- |
| `Accepted` | `True` | The `GatewayClass` CR is valid and the controller has claimed it. |
| `Accepted` | `False` | The configuration has errors or was rejected. Common reasons include `InvalidParameters` (referenced parameters are invalid or not found), `Pending` (the controller has not processed the resource yet), or `Unknown` (an unsupported `controllerName` was provided). |
| `Accepted` | `Unknown` | The `GatewayClass` CR is waiting for the controller to process it. |
| `SupportedVersion` | `True` | The installed Gateway API version is compatible with the controller. |
| `SupportedVersion` | `False` | There is a version mismatch. A common reason is `UnsupportedVersion`, which indicates that the custom resource definition (CRD) version does not match the controller requirements. |
| `ControllerInstalled` | `True` | The Cluster Ingress Operator successfully installed the Gateway API controller. |
| `ControllerInstalled` | `False` | The installation failed. |
| `ControllerInstalled` | `Unknown` | The controller has not started the installation yet. |
| `CRDsReady` | `True` | The Istio CRDs are installed and actively managed by either the Cluster Ingress Operator or OLM. |
| `CRDsReady` | `False` | The CRDs were installed by a third party or have mixed ownership, preventing the controller from managing them. |
| `CRDsReady` | `Unknown` | The CRDs are not installed yet. |