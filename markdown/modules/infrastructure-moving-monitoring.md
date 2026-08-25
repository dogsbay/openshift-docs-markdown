{%- set _mod_docs_content_type = "PROCEDURE" %}
# Moving the monitoring solution {id="infrastructure-moving-monitoring_{{ context }}"}

Redeploy the monitoring stack to infrastructure nodes to reduce your subscription requirements. Create and apply a custom config map to move the monitoring stack to infrastructure nodes. The monitoring stack includes Prometheus, Thanos Querier, and Alertmanager, and is managed by the {{ cmo_first }}. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have created the `cluster-monitoring-config` `ConfigMap` object.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `cluster-monitoring-config` config map and change the `nodeSelector` to use the `infra` label by running the following command:
    ```terminal
    $ oc edit configmap cluster-monitoring-config -n openshift-monitoring
    ```
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |+
        alertmanagerMain:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        prometheusK8s:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        prometheusOperator:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        metricsServer:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        kubeStateMetrics:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        telemeterClient:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        openshiftStateMetrics:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        thanosQuerier:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
        monitoringPlugin:
          nodeSelector:
            node-role.kubernetes.io/infra: ""
          tolerations:
          - key: node-role.kubernetes.io/infra
            value: reserved
            effect: NoSchedule
    ```

    Add a `nodeSelector` parameter with the appropriate value to the component you want to move. You can use a `nodeSelector` parameter in the format shown or use `<key>: <value>` pairs, based on the value specified for the node. If you added a taint to the infrastructure node, also add a matching toleration.
1.  Watch the monitoring pods move to the new machines by running the following command:
    ```terminal
    $ watch 'oc get pod -n openshift-monitoring -o wide'
    ```
1.  If a component has not moved to the `infra` node, delete the pod with this component by running the following command:
    ```terminal
    $ oc delete pod -n openshift-monitoring <pod>
    ```

    The component from the deleted pod is re-created on the `infra` node.