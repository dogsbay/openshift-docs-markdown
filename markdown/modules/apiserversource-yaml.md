{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an API server source by using YAML files {id="apiserversource-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe event sources declaratively and in a reproducible manner. To create an API server source by using YAML, you must create a YAML file that defines an `ApiServerSource` object, then apply it by using the `oc apply` command.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created the `default` broker in the same namespace as the one defined in the API server source YAML file.
*   Install the OpenShift CLI (`oc`).

**Procedure**

{% include "./snippets/serverless-service-account-apiserversource.md" %}

1.  Create an API server source as a YAML file:
    ```yaml
    apiVersion: sources.knative.dev/v1alpha1
    kind: ApiServerSource
    metadata:
      name: testevents
    spec:
      serviceAccountName: events-sa
      mode: Resource
      resources:
        - apiVersion: v1
          kind: Event
      sink:
        ref:
          apiVersion: eventing.knative.dev/v1
          kind: Broker
          name: default
    ```
1.  Apply the `ApiServerSource` YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  To check that the API server source is set up correctly, create a Knative service as a YAML file that dumps incoming messages to its log:
    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: event-display
      namespace: default
    spec:
      template:
        spec:
          containers:
            - image: quay.io/openshift-knative/knative-eventing-sources-event-display:latest
    ```
1.  Apply the `Service` YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Create a `Trigger` object as a YAML file that filters events from the `default` broker to the service created in the previous step:
    ```yaml
    apiVersion: eventing.knative.dev/v1
    kind: Trigger
    metadata:
      name: event-display-trigger
      namespace: default
    spec:
      broker: default
      subscriber:
        ref:
          apiVersion: serving.knative.dev/v1
          kind: Service
          name: event-display
    ```
1.  Apply the `Trigger` YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```
1.  Create events by launching a pod in the default namespace:
    ```terminal
    $ oc create deployment hello-node --image=quay.io/openshift-knative/knative-eventing-sources-event-display
    ```
1.  Check that the controller is mapped correctly, by entering the following command and inspecting the output:
    ```terminal
    $ oc get apiserversource.sources.knative.dev testevents -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: sources.knative.dev/v1alpha1
    kind: ApiServerSource
    metadata:
      annotations:
      creationTimestamp: "2020-04-07T17:24:54Z"
      generation: 1
      name: testevents
      namespace: default
      resourceVersion: "62868"
      selfLink: /apis/sources.knative.dev/v1alpha1/namespaces/default/apiserversources/testevents2
      uid: 1603d863-bb06-4d1c-b371-f580b4db99fa
    spec:
      mode: Resource
      resources:
      - apiVersion: v1
        controller: false
        controllerSelector:
          apiVersion: ""
          kind: ""
          name: ""
          uid: ""
        kind: Event
        labelSelector: {}
      serviceAccountName: events-sa
      sink:
        ref:
          apiVersion: eventing.knative.dev/v1
          kind: Broker
          name: default
    ```

**Verification**

To verify that the Kubernetes events were sent to Knative, you can look at the message dumper function logs.

1.  Get the pods by entering the following command:
    ```terminal
    $ oc get pods
    ```
1.  View the message dumper function logs for the pods by entering the following command:
    ```terminal
    $ oc logs $(oc get pod -o name | grep event-display) -c user-container
    ```
    ```terminal title="Example output"
    ☁️  cloudevents.Event
    Validation: valid
    Context Attributes,
      specversion: 1.0
      type: dev.knative.apiserver.resource.update
      datacontenttype: application/json
      ...
    Data,
      {
        "apiVersion": "v1",
        "involvedObject": {
          "apiVersion": "v1",
          "fieldPath": "spec.containers{hello-node}",
          "kind": "Pod",
          "name": "hello-node",
          "namespace": "default",
           .....
        },
        "kind": "Event",
        "message": "Started container",
        "metadata": {
          "name": "hello-node.159d7608e3a3572c",
          "namespace": "default",
          ....
        },
        "reason": "Started",
        ...
      }
    ```

**Deleting the API server source**

1.  Delete the trigger:
    ```terminal
    $ oc delete -f trigger.yaml
    ```
1.  Delete the event source:
    ```terminal
    $ oc delete -f k8s-events.yaml
    ```
1.  Delete the service account, cluster role, and cluster binding:
    ```terminal
    $ oc delete -f authentication.yaml
    ```