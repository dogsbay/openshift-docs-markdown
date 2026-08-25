{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying and configuring the Event Router {id="cluster-logging-eventrouter-deploy_{{ context }}"}

Use the following steps to deploy the Event Router into your cluster. You should always deploy the Event Router to the `openshift-logging` project to ensure it collects events from across the cluster.


:::note

The Event Router image is not a part of the {{ clo }} and must be downloaded separately.

:::


The following `Template` object creates the service account, cluster role, and cluster role binding required for the Event Router. The template also configures and deploys the Event Router pod. You can either use this template without making changes or edit the template to change the deployment object CPU and memory requests.

**Prerequisites**

*   You need proper permissions to create service accounts and update cluster role bindings. For example, you can run the following template with a user that has the **cluster-admin** role.
*   The {{ clo }} must be installed.

**Procedure**

1.  Create a template for the Event Router:
    ```yaml
    apiVersion: template.openshift.io/v1
    kind: Template
    metadata:
      name: eventrouter-template
      annotations:
        description: "A pod forwarding kubernetes events to OpenShift Logging stack."
        tags: "events,EFK,logging,cluster-logging"
    objects:
      - kind: ServiceAccount (1)
        apiVersion: v1
        metadata:
          name: eventrouter
          namespace: ${NAMESPACE}
      - kind: ClusterRole (2)
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: event-reader
        rules:
        - apiGroups: [""]
          resources: ["events"]
          verbs: ["get", "watch", "list"]
      - kind: ClusterRoleBinding (3)
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: event-reader-binding
        subjects:
        - kind: ServiceAccount
          name: eventrouter
          namespace: ${NAMESPACE}
        roleRef:
          kind: ClusterRole
          name: event-reader
      - kind: ConfigMap (4)
        apiVersion: v1
        metadata:
          name: eventrouter
          namespace: ${NAMESPACE}
        data:
          config.json: |-
            {
              "sink": "stdout"
            }
      - kind: Deployment (5)
        apiVersion: apps/v1
        metadata:
          name: eventrouter
          namespace: ${NAMESPACE}
          labels:
            component: "eventrouter"
            logging-infra: "eventrouter"
            provider: "openshift"
        spec:
          selector:
            matchLabels:
              component: "eventrouter"
              logging-infra: "eventrouter"
              provider: "openshift"
          replicas: 1
          template:
            metadata:
              labels:
                component: "eventrouter"
                logging-infra: "eventrouter"
                provider: "openshift"
              name: eventrouter
            spec:
              serviceAccount: eventrouter
              containers:
                - name: kube-eventrouter
                  image: ${IMAGE}
                  imagePullPolicy: IfNotPresent
                  resources:
                    requests:
                      cpu: ${CPU}
                      memory: ${MEMORY}
                  volumeMounts:
                  - name: config-volume
                    mountPath: /etc/eventrouter
                  securityContext:
                    allowPrivilegeEscalation: false
                    capabilities:
                      drop: ["ALL"]
              securityContext:
                runAsNonRoot: true
                seccompProfile:
                  type: RuntimeDefault
              volumes:
              - name: config-volume
                configMap:
                  name: eventrouter
    parameters:
      - name: IMAGE (6)
        displayName: Image
        value: "registry.redhat.io/openshift-logging/eventrouter-rhel9:v0.4"
      - name: CPU (7)
        displayName: CPU
        value: "100m"
      - name: MEMORY (8)
        displayName: Memory
        value: "128Mi"
      - name: NAMESPACE
        displayName: Namespace
        value: "openshift-logging" (9)
    ```
    1.  Creates a Service Account in the `openshift-logging` project for the Event Router.
    1.  Creates a ClusterRole to monitor for events in the cluster.
    1.  Creates a ClusterRoleBinding to bind the ClusterRole to the service account.
    1.  Creates a config map in the `openshift-logging` project to generate the required `config.json` file.
    1.  Creates a deployment in the `openshift-logging` project to generate and configure the Event Router pod.
    1.  Specifies the image, identified by a tag such as `v0.4`.
    1.  Specifies the minimum amount of CPU to allocate to the Event Router pod. Defaults to `100m`.
    1.  Specifies the minimum amount of memory to allocate to the Event Router pod. Defaults to `128Mi`.
    1.  Specifies the `openshift-logging` project to install objects in.
1.  Use the following command to process and apply the template:
    ```terminal
    $ oc process -f <templatefile> | oc apply -n openshift-logging -f -
    ```

    For example:
    ```terminal
    $ oc process -f eventrouter.yaml | oc apply -n openshift-logging -f -
    ```
    ```terminal title="Example output"
    serviceaccount/eventrouter created
    clusterrole.rbac.authorization.k8s.io/event-reader created
    clusterrolebinding.rbac.authorization.k8s.io/event-reader-binding created
    configmap/eventrouter created
    deployment.apps/eventrouter created
    ```
1.  Validate that the Event Router installed in the `openshift-logging` project:
    1.  View the new Event Router pod:
        ```terminal
        $ oc get pods --selector  component=eventrouter -o name -n openshift-logging
        ```
        ```terminal title="Example output"
        pod/cluster-logging-eventrouter-d649f97c8-qvv8r
        ```
    1.  View the events collected by the Event Router:
        ```terminal
        $ oc logs <cluster_logging_eventrouter_pod> -n openshift-logging
        ```

        For example:
        ```terminal
        $ oc logs cluster-logging-eventrouter-d649f97c8-qvv8r -n openshift-logging
        ```
        ```terminal title="Example output"
        {"verb":"ADDED","event":{"metadata":{"name":"openshift-service-catalog-controller-manager-remover.1632d931e88fcd8f","namespace":"openshift-service-catalog-removed","selfLink":"/api/v1/namespaces/openshift-service-catalog-removed/events/openshift-service-catalog-controller-manager-remover.1632d931e88fcd8f","uid":"787d7b26-3d2f-4017-b0b0-420db4ae62c0","resourceVersion":"21399","creationTimestamp":"2020-09-08T15:40:26Z"},"involvedObject":{"kind":"Job","namespace":"openshift-service-catalog-removed","name":"openshift-service-catalog-controller-manager-remover","uid":"fac9f479-4ad5-4a57-8adc-cb25d3d9cf8f","apiVersion":"batch/v1","resourceVersion":"21280"},"reason":"Completed","message":"Job completed","source":{"component":"job-controller"},"firstTimestamp":"2020-09-08T15:40:26Z","lastTimestamp":"2020-09-08T15:40:26Z","count":1,"type":"Normal"}}
        ```

        You can also use Kibana to view events by creating an index pattern using the Elasticsearch `infra` index.