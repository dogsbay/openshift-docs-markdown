{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ping source by using the Knative CLI {id="serverless-pingsource-kn_{{ context }}"}

You can use the `kn source ping create` command to create a ping source by using the Knative (`kn`) CLI. Using the Knative CLI to create event sources provides a more streamlined and intuitive user interface than modifying YAML files directly.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   Optional: If you want to use the verification steps for this procedure, install the OpenShift CLI (`oc`).

**Procedure**

1.  To verify that the ping source is working, create a simple Knative
service that dumps incoming messages to the service logs:
    ```terminal
    $ kn service create event-display \
        --image quay.io/openshift-knative/knative-eventing-sources-event-display:latest
    ```
1.  For each set of ping events that you want to request, create a ping source in the same namespace as the event consumer:
    ```terminal
    $ kn source ping create test-ping-source \
        --schedule "*/2 * * * *" \
        --data '{"message": "Hello world!"}' \
        --sink ksvc:event-display
    ```
1.  Check that the controller is mapped correctly by entering the following command and inspecting the output:
    ```terminal
    $ kn source ping describe test-ping-source
    ```
    ```terminal title="Example output"
    Name:         test-ping-source
    Namespace:    default
    Annotations:  sources.knative.dev/creator=developer, sources.knative.dev/lastModifier=developer
    Age:          15s
    Schedule:     */2 * * * *
    Data:         {"message": "Hello world!"}

    Sink:
      Name:       event-display
      Namespace:  default
      Resource:   Service (serving.knative.dev/v1)

    Conditions:
      OK TYPE                 AGE REASON
      ++ Ready                 8s
      ++ Deployed              8s
      ++ SinkProvided         15s
      ++ ValidSchedule        15s
      ++ EventTypeProvided    15s
      ++ ResourcesCorrect     15s
    ```

**Verification**

You can verify that the Kubernetes events were sent to the Knative event sink by looking at the logs of the sink pod.

By default, Knative services terminate their pods if no traffic is received within a 60 second period.
The example shown in this guide creates a ping source that sends a message every 2 minutes, so each message should be observed in a newly created pod.

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
      id: 99e4f4f6-08ff-4bff-acf1-47f61ded68c9
      time: 2020-04-07T16:16:00.000601161Z
      datacontenttype: application/json
    Data,
      {
        "message": "Hello world!"
      }
    ```

**Deleting the ping source**

*   Delete the ping source:
    ```terminal
    $ kn delete pingsources.sources.knative.dev <ping_source_name>
    ```