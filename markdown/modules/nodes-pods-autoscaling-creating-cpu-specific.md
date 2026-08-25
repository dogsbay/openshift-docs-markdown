{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a horizontal pod autoscaler for a specific CPU value {id="nodes-pods-autoscaling-creating-cpu-specific_{{ context }}"}

You can use the {{ product_title }} CLI to create a horizontal pod autoscaler (HPA) that automatically scales an existing object based on a specific CPU value by creating a `HorizontalPodAutoscaler` object with the target CPU and pod limits. The HPA scales the pods associated with that object to maintain the CPU use that you specify. {._abstract}


:::note

Use a `Deployment` object or `ReplicaSet` object unless you need a specific feature or behavior provided by other objects.

:::


**Prerequisites**

{% include "./snippets/nodes-pods-autoscaling-creating-cpu-prereqs.md" %}

**Procedure**

1.  Create a YAML file similar to the following for an existing object:
    ```yaml
    apiVersion: autoscaling/v2
    kind: HorizontalPodAutoscaler
    metadata:
      name: cpu-autoscale
      namespace: default
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: example
      minReplicas: 1
      maxReplicas: 10
      metrics:
      - type: Resource
        resource:
          name: cpu
          target:
            type: AverageValue
            averageValue: 500m
    ```

    where:

    `apiVersion`
    :   Specifies the `autoscaling/v2` API.

    `metadata.name`
    :   Specifies a name for this horizontal pod autoscaler object.

    `spec.scaleTargetRef.apiVersion`
    :   Specifies the API version of the object to scale:
        *   For a `Deployment`, `ReplicaSet`, `Statefulset` object, use `apps/v1`.
        *   For a `ReplicationController`, use `v1`.
        *   For a `DeploymentConfig`, use `apps.openshift.io/v1`.

    `spec.scaleTargetRef.kind`
    :   Specifies the type of object. The object must be a `Deployment`, `DeploymentConfig`/`dc`, `ReplicaSet`/`rs`, `ReplicationController`/`rc`, or `StatefulSet`.

    `spec.scaleTargetRef.name`
    :   Specifies the name of the object to scale. The object must exist.

    `spec.minReplicas`
    :   Specifies the minimum number of replicas when scaling down.

    `spec.maxReplicas`
    :   Specifies the maximum number of replicas when scaling up.

    `spec.metrics`
    :   Specifies the parameters to calculate the desired replica count.

    `spec.metrics.resource.name`
    :   Specifies a name for the resource.

    `spec.metrics.resource.target.type`
    :   Specifies the type of target, here `AverageValue` for a specific CPU value.

    `spec.metrics.resource.target.averageValue`
    :   Specifies the targeted CPU value.
1.  Create the horizontal pod autoscaler:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```

**Verification**

*   Check that the horizontal pod autoscaler was created:
    ```terminal
    $ oc get hpa cpu-autoscale
    ```
    ```terminal title="Example output"
    NAME            REFERENCE            TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
    cpu-autoscale   Deployment/example   173m/500m       1         10        1          20m
    ```