{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring all control plane components to run on infrastructure nodes using the CLI {id="ossm-config-control-plane-infrastructure-node-cli_{{ context }}"}

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

1.  Open the `ServiceMeshControlPlane` resource as a YAML file:
    ```terminal
    $ oc -n istio-system edit smcp <name> (1)
    ```
    1.  `<name>` represents the name of the `ServiceMeshControlPlane` resource.
1.  To run all of the {{ SMProductShortName }} components deployed by the `ServiceMeshControlPlane` on infrastructure nodes, add the `nodeSelector` and `tolerations` fields to the `spec.runtime.defaults.pod` spec in the `ServiceMeshControlPlane` resource:
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
    1.  Ensures that the SMCP pods are only scheduled on an infrastructure node.
    1.  Ensures that the pods are accepted by the infrastructure node.