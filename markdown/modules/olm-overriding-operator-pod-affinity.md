{% if context == "nodes-scheduler-pod-affinity" %}
{%- set pod = true -%}
{% endif %}
{% if context == "nodes-scheduler-node-affinity" %}
{%- set node = true -%}
{% endif %}
{% if context == "olm-adding-operators-to-a-cluster" %}
{%- set oplm = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

{% if oplm %}
# Controlling where an Operator is installed {id="olm-overriding-operator-pod-affinity_{{ context }}"}

{% endif %}

{% if pod %}
# Using pod affinity and anti-affinity to control where an Operator is installed {id="_using_pod_affinity_and_anti-affinity_to_control_where_an_operator_is_installed"}

{% endif %}

{% if node %}
# Using node affinity to control where an Operator is installed {id="_using_node_affinity_to_control_where_an_operator_is_installed"}

{% endif %}

You can use affinities to schedule an Operator pod on a specific node or set of nodes. {._abstract}

By default, when you install an Operator, {{ product_title }} installs the Operator pod on one of your compute nodes randomly. However, the following examples describe situations where you might want to schedule an Operator pod to a specific node or set of nodes:

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   If an Operator requires a particular platform, such as `amd64` or `arm64`
*   If an Operator requires a particular operating system, such as Linux or Windows
{%- endif %}
*   If you want Operators that work together scheduled on the same host or on hosts located on the same rack
*   If you want Operators dispersed throughout the infrastructure to avoid downtime due to network or hardware issues

{% if oplm %}
You can control where an Operator pod is installed by adding node affinity, pod affinity, or pod anti-affinity constraints to the Operator’s `Subscription` object. Node affinity is a set of rules used by the scheduler to determine where a pod can be placed. Pod affinity enables you to ensure that related pods are scheduled to the same node. Pod anti-affinity allows you to prevent a pod from being scheduled on a node.
{% endif %}

{% if pod %}
You can control where an Operator pod is installed by adding a pod affinity or anti-affinity to the Operator’s `Subscription` object.
{% endif %}

{% if node %}
You can control where an Operator pod is installed by adding a node affinity constraints to the Operator’s `Subscription` object.
{% endif %}

{% if oplm %}
The following examples show how to use node affinity or pod anti-affinity to install an instance of the Custom Metrics Autoscaler Operator to a specific node in the cluster:
{% endif %}
{% if node %}
The following examples show how to use node affinity to install an instance of the Custom Metrics Autoscaler Operator to a specific node in the cluster:
{% endif %}

{% if not pod %}
The following node affinity example places the Operator pod on a specific node:
```yaml
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: openshift-custom-metrics-autoscaler-operator
  namespace: openshift-keda
spec:
  name: my-package
  source: my-operators
  sourceNamespace: operator-registries
  config:
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
              - ip-10-0-163-94.us-west-2.compute.internal
#...
```

This node affinity requires the Operator’s pod be scheduled on a node named `ip-10-0-163-94.us-west-2.compute.internal`.

The following node affinity example places the Operator pod on a node with a specific platform:
```yaml
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: openshift-custom-metrics-autoscaler-operator
  namespace: openshift-keda
spec:
  name: my-package
  source: my-operators
  sourceNamespace: operator-registries
  config:
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: kubernetes.io/arch
              operator: In
              values:
              - arm64
            - key: kubernetes.io/os
              operator: In
              values:
              - linux
#...
```

This node affinity requires the Operator’s pod be scheduled on a node with the `kubernetes.io/arch=arm64` and `kubernetes.io/os=linux` labels.
{% endif %}

{% if pod %}
The following example shows how to use pod anti-affinity to prevent the installation the Custom Metrics Autoscaler Operator from any node that has pods with a specific label:
{% endif %}

{% if not node %}
The following pod affinity example places the Operator pod on one or more specific nodes:
```yaml
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: openshift-custom-metrics-autoscaler-operator
  namespace: openshift-keda
spec:
  name: my-package
  source: my-operators
  sourceNamespace: operator-registries
  config:
    affinity:
      podAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
            - key: app
              operator: In
              values:
              - test
          topologyKey: kubernetes.io/hostname
#...
```

This pod affinity places the Operator’s pod on a node that has pods with the `app=test` label.

The following pod anti-affinity example prevents the Operator pod from one or more specific nodes:
```yaml
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: openshift-custom-metrics-autoscaler-operator
  namespace: openshift-keda
spec:
  name: my-package
  source: my-operators
  sourceNamespace: operator-registries
  config:
    affinity:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
            - key: cpu
              operator: In
              values:
              - high
          topologyKey: kubernetes.io/hostname
#...
```

This pod anti-affinity prevents the Operator’s pod from being scheduled on a node that has pods with the `cpu=high` label.
{% endif %}

To control the placement of an Operator pod, complete the following steps.

**Procedure**

1.  Install the Operator as usual.
1.  If needed, ensure that your nodes are labeled to properly respond to the affinity.
1.  Edit the Operator `Subscription` object to add an affinity:
{% if oplm %}
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-custom-metrics-autoscaler-operator
      namespace: openshift-keda
    spec:
      name: my-package
      source: my-operators
      sourceNamespace: operator-registries
      config:
        affinity:
          nodeAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: kubernetes.io/hostname
                  operator: In
                  values:
                  - ip-10-0-185-229.ec2.internal
    #...
    ```

    where:

    `spec.config.affinity`
    :   Specifies a `nodeAffinity`, `podAffinity`, or `podAntiAffinity`. See the Additional resources section that follows for information about creating the affinity.
{% endif %}
{% if node %}
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-custom-metrics-autoscaler-operator
      namespace: openshift-keda
    spec:
      name: my-package
      source: my-operators
      sourceNamespace: operator-registries
      config:
        affinity:
          nodeAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: kubernetes.io/hostname
                  operator: In
                  values:
                  - ip-10-0-185-229.ec2.internal
    #...
    ```

    where:

    `spec.config.affinity`
    :   Specifies a `nodeAffinity`.
{% endif %}
{% if pod %}
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-custom-metrics-autoscaler-operator
      namespace: openshift-keda
    spec:
      name: my-package
      source: my-operators
      sourceNamespace: operator-registries
      config:
        affinity:
          podAntiAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                  - key: kubernetes.io/hostname
                    operator: In
                    values:
                    - ip-10-0-185-229.ec2.internal
                topologyKey: topology.kubernetes.io/zone
    #...
    ```

    where:

    `spec.config.affinity`
    :   Specifies a `podAffinity` or `podAntiAffinity`.
{% endif %}

**Verification**

*   To ensure that the pod is deployed on the specific node, run the following command:
    ```yaml
    $ oc get pods -o wide
    ```
    ```terminal title="Example output"
    NAME                                                  READY   STATUS    RESTARTS   AGE   IP            NODE                           NOMINATED NODE   READINESS GATES
    custom-metrics-autoscaler-operator-5dcc45d656-bhshg   1/1     Running   0          50s   10.131.0.20   ip-10-0-185-229.ec2.internal   <none>           <none>
    ```

{% if context == "nodes-scheduler-pod-affinity" %}
{%- set pod = "" -%}
{% endif %}
{% if context == "nodes-scheduler-node-affinity" %}
{%- set node = "" -%}
{% endif %}
{% if context == "olm-adding-operators-to-a-cluster" %}
{%- set olm = "" -%}
{% endif %}