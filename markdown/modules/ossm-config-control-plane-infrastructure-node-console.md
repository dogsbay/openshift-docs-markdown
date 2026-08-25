{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring all control plane components to run on infrastructure nodes using the web console {id="ossm-config-control-plane-infrastructure-node-console_{{ context }}"}

Perform this task if all of the components deployed by the {{ SMProductShortName }} control plane will run on infrastructure nodes. These deployed components include Istiod, Ingress Gateway, and Egress Gateway, and optional applications such as Prometheus, Grafana, and Distributed Tracing.

If the control plane will run on a worker node, skip this task.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Click the {{ SMProductName }} Operator, and then click **Istio Service Mesh Control Plane**.
1.  Click the name of the control plane resource. For example, `basic`.
1.  Click **YAML**.
1.  Add the `nodeSelector` and `tolerations` fields to the `spec.runtime.defaults.pod` specification in the `ServiceMeshControlPlane` resource, as shown in the following example:
    ```yaml
    spec:
      runtime:
        defaults:
          pod:
            nodeSelector: (1)
              node-role.kubernetes.io/infra: ""
            tolerations: (2)
            - effect: NoSchedule
              key: node-role.kubernetes.io/infra
              value: reserved
            - effect: NoExecute
              key: node-role.kubernetes.io/infra
              value: reserved
    ```
    1.  Ensures that the `ServiceMeshControlPlane` pod is only scheduled on an infrastructure node.
    1.  Ensures that the pod is accepted by the infrastructure node for execution.
1.  Click **Save**.
1.  Click **Reload**.