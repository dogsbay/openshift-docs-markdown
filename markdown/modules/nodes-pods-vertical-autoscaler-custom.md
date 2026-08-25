{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using an alternative recommender {id="nodes-pods-vertical-autoscaler-custom_{{ context }}"}

You can use your own recommender to autoscale based on your own algorithms. If you do not specify an alternative recommender, {{ product_title }} uses the default recommender, which suggests CPU and memory requests based on historical usage.  {._abstract}

Because there is no universal recommendation policy that applies to all types of workloads, you might want to create and deploy different recommenders for specific workloads.

For example, the default recommender might not accurately predict future resource usage when containers exhibit certain resource behaviors. Examples are cyclical patterns that alternate between usage spikes and idling as used by monitoring applications, or recurring and repeating patterns used with deep learning applications. Using the default recommender with these usage behaviors might result in significant over-provisioning and Out of Memory (OOM) kills for your applications.


:::note

Instructions for how to create a recommender are beyond the scope of this documentation.

:::


The following procedure shows how to use an alternative recommender for your pods.

**Procedure**

1.  Create a service account for the alternative recommender and bind that service account to the required cluster role:
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: alt-vpa-recommender-sa
      namespace: <namespace_name>
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: system:example-metrics-reader
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: system:metrics-reader
    subjects:
    - kind: ServiceAccount
      name: alt-vpa-recommender-sa
      namespace: <namespace_name>
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: system:example-vpa-actor
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: system:vpa-actor
    subjects:
    - kind: ServiceAccount
      name: alt-vpa-recommender-sa
      namespace: <namespace_name>
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: system:example-vpa-target-reader-binding
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: system:vpa-target-reader
    subjects:
    - kind: ServiceAccount
      name: alt-vpa-recommender-sa
      namespace: <namespace_name>
    ```
    *   The `alt-vpa-recommender-sa` object creates a service account for the recommender in the namespace that displays the recommender.
    *   The `system:metrics-reader` object binds the recommender service account to the `metrics-reader` role. Specify the namespace for where to deploy the recommender.
    *   The `system:example-vpa-actor` object binds the recommender service account to the `vpa-actor` role. Specify the namespace for where to deploy the recommender.
    *   The `system:example-vpa-target-reader-binding` object binds the recommender service account to the `vpa-target-reader` role. Specify the namespace for where to display the recommender.
1.  To add the alternative recommender to the cluster, create a `Deployment` object similar to the following:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: alt-vpa-recommender
      namespace: <namespace_name>
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: alt-vpa-recommender
      template:
        metadata:
          labels:
            app: alt-vpa-recommender
        spec:
          containers:
          - name: recommender
            image: quay.io/example/alt-recommender:latest
            imagePullPolicy: Always
            resources:
              limits:
                cpu: 200m
                memory: 1000Mi
              requests:
                cpu: 50m
                memory: 500Mi
            ports:
            - name: prometheus
              containerPort: 8942
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop:
                  - ALL
              seccompProfile:
                type: RuntimeDefault
          serviceAccountName: alt-vpa-recommender-sa
          securityContext:
            runAsNonRoot: true
    ```

    where:

    `spec.template.spec.containers`
    :   Specifies a container for your alternative recommender.

    `spec.template.spec.containers.image`
    :   Specifies your recommender image.

    `spec.template.spec.serviceAccountName`
    :   Specifies the service account that you created for the recommender.

    A new pod is created for the alternative recommender in the same namespace.
    ```terminal
    $ oc get pods
    ```
    ```terminal title="Example output"
    NAME                                        READY   STATUS    RESTARTS   AGE
    frontend-845d5478d-558zf                    1/1     Running   0          4m25s
    frontend-845d5478d-7z9gx                    1/1     Running   0          4m25s
    frontend-845d5478d-b7l4j                    1/1     Running   0          4m25s
    vpa-alt-recommender-55878867f9-6tp5v        1/1     Running   0          9s
    ```
1.  Configure a Vertical Pod Autoscaler Operator (VPA) custom resource (CR) that includes the name of the alternative recommender `Deployment` object.
    ```yml title="Example VPA CR to include the alternative recommender"
    apiVersion: autoscaling.k8s.io/v1
    kind: VerticalPodAutoscaler
    metadata:
      name: vpa-recommender
      namespace: <namespace_name>
    spec:
      recommenders:
        - name: alt-vpa-recommender
      targetRef:
        apiVersion: "apps/v1"
        kind:       Deployment
        name:       frontend
    ```

    where:

    `spec.recommenders.name`
    :   Specifies the name of the alternative recommender deployment.

    `spec.targetRef.kind`
    :   Specifies the name of an existing workload object you want this VPA to manage.