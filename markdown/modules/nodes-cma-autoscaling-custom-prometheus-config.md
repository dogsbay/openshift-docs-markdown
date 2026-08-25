{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the custom metrics autoscaler to use {{ product_title }} monitoring {id="nodes-cma-autoscaling-custom-prometheus-config_{{ context }}"}

You can use the installed {{ product_title }} Prometheus monitoring as a source for the metrics used by the custom metrics autoscaler. However, there are some additional configurations you must perform.

For your scaled objects to be able to read the {{ product_title }} Prometheus metrics, you must use a trigger authentication or a cluster trigger authentication in order to provide the authentication information required. The following procedure differs depending on which trigger authentication method you use. For more information on trigger authentications, see "Understanding custom metrics autoscaler trigger authentications". 


:::note

These steps are not required for an external Prometheus source.

:::


You must perform the following tasks, as described in this section:

*   Create a service account.
*   Create the trigger authentication.
*   Create a role.
*   Add that role to the service account.
*   Reference the token in the trigger authentication object used by Prometheus.

**Prerequisites**

*   {{ product_title }} monitoring must be installed.
*   Monitoring of user-defined workloads must be enabled in {{ product_title }} monitoring, as described in the **Creating a user-defined workload monitoring config map** section.
*   The Custom Metrics Autoscaler Operator must be installed.

**Procedure**

1.  Change to the appropriate project:
    ```terminal
    $ oc project <project_name> (1)
    ```
    1.  Specifies one of the following projects:
        *   If you are using a trigger authentication, specify the project with the object you want to scale.
        *   If you are using a cluster trigger authentication, specify the `openshift-keda` project.
1.  Create a service account if your cluster does not have one:
    1.  Create a `service account` object by using the following command:
        ```terminal
        $ oc create serviceaccount thanos (1)
        ```
        1.  Specifies the name of the service account.
1.  Create a trigger authentication with the service account token:
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: keda.sh/v1alpha1
        kind: <authentication_method> (1)
        metadata:
          name: keda-trigger-auth-prometheus
        spec:
          boundServiceAccountToken: (2)
            - parameter: bearerToken (3)
              serviceAccountName: thanos (4)
        ```
        1.  Specifies one of the following trigger authentication methods:
            *   If you are using a trigger authentication, specify `TriggerAuthentication`. This example configures a trigger authentication.
            *   If you are using a cluster trigger authentication, specify `ClusterTriggerAuthentication`.
        1.  Specifies that this trigger authentication uses a bound service account token for authorization when connecting to the metrics endpoint.
        1.  Specifies the authentication parameter to supply by using the token. Here, the example uses bearer authentication.
        1.  Specifies the name of the service account to use.
    1.  Create the CR object:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```
1.  Create a role for reading Thanos metrics:
    1.  Create a YAML file with the following parameters:
        ```yaml
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: thanos-metrics-reader
        rules:
        - apiGroups:
          - ""
          resources:
          - pods
          verbs:
          - get
        - apiGroups:
          - metrics.k8s.io
          resources:
          - pods
          - nodes
          verbs:
          - get
          - list
          - watch
        ```
    1.  Create the CR object:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```
1.  Create a role binding for reading Thanos metrics:
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: rbac.authorization.k8s.io/v1
        kind: <binding_type> (1)
        metadata:
          name: thanos-metrics-reader (2)
          namespace: my-project (3)
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: thanos-metrics-reader
        subjects:
        - kind: ServiceAccount
          name: thanos (4)
          namespace: <namespace_name> (5)
        ```
        1.  Specifies one of the following object types:
            *   If you are using a trigger authentication, specify `RoleBinding`.
            *   If you are using a cluster trigger authentication, specify `ClusterRoleBinding`.
        1.  Specifies the name of the role you created.
        1.  Specifies one of the following projects:
            *   If you are using a trigger authentication, specify the project with the object you want to scale.
            *   If you are using a cluster trigger authentication, specify the `openshift-keda` project.
        1.  Specifies the name of the service account to bind to the role.
        1.  Specifies the project where you previously created the service account.
    1.  Create the CR object:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```

You can now deploy a scaled object or scaled job to enable autoscaling for your application, as described in "Understanding how to add custom metrics autoscalers". To use {{ product_title }} monitoring as the source, in the trigger, or scaler, you must include the following parameters:

*   `triggers.type` must be `prometheus`
*   `triggers.metadata.serverAddress` must be `https://thanos-querier.openshift-monitoring.svc.cluster.local:9092`
*   `triggers.metadata.authModes` must be `bearer`
*   `triggers.metadata.namespace` must be set to the namespace of the object to scale
*   `triggers.authenticationRef` must point to the trigger authentication resource specified in the previous step