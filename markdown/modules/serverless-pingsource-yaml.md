{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ping source by using YAML {id="serverless-pingsource-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe event sources declaratively and in a reproducible manner. To create a serverless ping source by using YAML, you must create a YAML file that defines a `PingSource` object, then apply it by using `oc apply`.

```yaml title="Example PingSource object"
apiVersion: sources.knative.dev/v1
kind: PingSource
metadata:
  name: test-ping-source
spec:
  schedule: "*/2 * * * *" (1)
  data: '{"message": "Hello world!"}' (2)
  sink: (3)
    ref:
      apiVersion: serving.knative.dev/v1
      kind: Service
      name: event-display
```

1.  The schedule of the event specified using [CRON expression](https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/#schedule).
1.  The event message body expressed as a JSON encoded data string.
1.  These are the details of the event consumer. In this example, we are using a Knative service named `event-display`.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  To verify that the ping source is working, create a simple Knative
service that dumps incoming messages to the service’s logs.
    1.  Create a service YAML file:
        ```yaml
        apiVersion: serving.knative.dev/v1
        kind: Service
        metadata:
          name: event-display
        spec:
          template:
            spec:
              containers:
                - image: quay.io/openshift-knative/knative-eventing-sources-event-display:latest
        ```
    1.  Create the service:
        ```terminal
        $ oc apply -f <filename>
        ```
1.  For each set of ping events that you want to request, create a ping source in the same namespace as the event consumer.
    1.  Create a YAML file for the ping source:
        ```yaml
        apiVersion: sources.knative.dev/v1
        kind: PingSource
        metadata:
          name: test-ping-source
        spec:
          schedule: "*/2 * * * *"
          data: '{"message": "Hello world!"}'
          sink:
            ref:
              apiVersion: serving.knative.dev/v1
              kind: Service
              name: event-display
        ```
    1.  Create the ping source:
        ```terminal
        $ oc apply -f <filename>
        ```
1.  Check that the controller is mapped correctly by entering the following command:
    ```terminal
    $ oc get pingsource.sources.knative.dev <ping_source_name> -oyaml
    ```
    ```terminal title="Example output"
    apiVersion: sources.knative.dev/v1
    kind: PingSource
    metadata:
      annotations:
        sources.knative.dev/creator: developer
        sources.knative.dev/lastModifier: developer
      creationTimestamp: "2020-04-07T16:11:14Z"
      generation: 1
      name: test-ping-source
      namespace: default
      resourceVersion: "55257"
      selfLink: /apis/sources.knative.dev/v1/namespaces/default/pingsources/test-ping-source
      uid: 3d80d50b-f8c7-4c1b-99f7-3ec00e0a8164
    spec:
      data: '{ value: "hello" }'
      schedule: '*/2 * * * *'
      sink:
        ref:
          apiVersion: serving.knative.dev/v1
          kind: Service
          name: event-display
          namespace: default
    ```

**Verification**

You can verify that the Kubernetes events were sent to the Knative event sink by looking at the sink pod’s logs.

By default, Knative services terminate their pods if no traffic is received within a 60 second period.
The example shown in this guide creates a PingSource that sends a message every 2 minutes, so each message should be observed in a newly created pod.

1.  Watch for new pods created:
    ```terminal
    $ watch oc get pods
    ```
1.  Cancel watching the pods using Ctrl+C, then look at the logs of the created pod:
    ```terminal
    $ oc logs $(oc get pod -o name | grep event-display) -c user-container
    ```
    ```terminal title="Example output"
    ☁️  cloudevents.Event
    Validation: valid
    Context Attributes,
      specversion: 1.0
      type: dev.knative.sources.ping
      source: /apis/v1/namespaces/default/pingsources/test-ping-source
      id: 042ff529-240e-45ee-b40c-3a908129853e
      time: 2020-04-07T16:22:00.000791674Z
      datacontenttype: application/json
    Data,
      {
        "message": "Hello world!"
      }
    ```

**Deleting the ping source**

*   Delete the ping source:
    ```terminal
    $ oc delete -f <filename>
    ```
    ```terminal title="Example command"
    $ oc delete -f ping-source.yaml
    ```