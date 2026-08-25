{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a sink binding by using YAML {id="serverless-sinkbinding-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe event sources declaratively and in a reproducible manner. To create a sink binding by using YAML, you must create a YAML file that defines an `SinkBinding` object, then apply it by using the `oc apply` command.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  To check that sink binding is set up correctly, create a Knative event display service, or event sink, that dumps incoming messages to its log.
    1.  Create a service YAML file:
        ```yaml title="Example service YAML file"
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
1.  Create a sink binding instance that directs events to the service.
    1.  Create a sink binding YAML file:
        ```yaml title="Example service YAML file"
        apiVersion: sources.knative.dev/v1alpha1
        kind: SinkBinding
        metadata:
          name: bind-heartbeat
        spec:
          subject:
            apiVersion: batch/v1
            kind: Job (1)
            selector:
              matchLabels:
                app: heartbeat-cron

          sink:
            ref:
              apiVersion: serving.knative.dev/v1
              kind: Service
              name: event-display
        ```
        1.  In this example, any Job with the label `app: heartbeat-cron` will be bound to the event sink.
    1.  Create the sink binding:
        ```terminal
        $ oc apply -f <filename>
        ```
1.  Create a `CronJob` object.
    1.  Create a cron job YAML file:
        ```yaml title="Example cron job YAML file"
        apiVersion: batch/v1
        kind: CronJob
        metadata:
          name: heartbeat-cron
        spec:
          # Run every minute
          schedule: "* * * * *"
          jobTemplate:
            metadata:
              labels:
                app: heartbeat-cron
                bindings.knative.dev/include: "true"
            spec:
              template:
                spec:
                  restartPolicy: Never
                  containers:
                    - name: single-heartbeat
                      image: quay.io/openshift-knative/heartbeats:latest
                      args:
                        - --period=1
                      env:
                        - name: ONE_SHOT
                          value: "true"
                        - name: POD_NAME
                          valueFrom:
                            fieldRef:
                              fieldPath: metadata.name
                        - name: POD_NAMESPACE
                          valueFrom:
                            fieldRef:
                              fieldPath: metadata.namespace
        ```

        :::important

        To use sink binding, you must manually add a `bindings.knative.dev/include=true` label to your Knative resources.

        For example, to add this label to a `CronJob` resource, add the following lines to the `Job` resource YAML definition:

        ```yaml
          jobTemplate:
            metadata:
              labels:
                app: heartbeat-cron
                bindings.knative.dev/include: "true"
        ```

        
        :::

    1.  Create the cron job:
        ```terminal
        $ oc apply -f <filename>
        ```
1.  Check that the controller is mapped correctly by entering the following command and inspecting the output:
    ```terminal
    $ oc get sinkbindings.sources.knative.dev bind-heartbeat -oyaml
    ```
    ```yaml title="Example output"
    spec:
      sink:
        ref:
          apiVersion: serving.knative.dev/v1
          kind: Service
          name: event-display
          namespace: default
      subject:
        apiVersion: batch/v1
        kind: Job
        namespace: default
        selector:
          matchLabels:
            app: heartbeat-cron
    ```

**Verification**

You can verify that the Kubernetes events were sent to the Knative event sink by looking at the message dumper function logs.

1.  Enter the command:
    ```terminal
    $ oc get pods
    ```
1.  Enter the command:
    ```terminal
    $ oc logs $(oc get pod -o name | grep event-display) -c user-container
    ```
    ```terminal title="Example output"
    ☁️  cloudevents.Event
    Validation: valid
    Context Attributes,
      specversion: 1.0
      type: dev.knative.eventing.samples.heartbeat
      source: https://knative.dev/eventing-contrib/cmd/heartbeats/#event-test/mypod
      id: 2b72d7bf-c38f-4a98-a433-608fbcdd2596
      time: 2019-10-18T15:23:20.809775386Z
      contenttype: application/json
    Extensions,
      beats: true
      heart: yes
      the: 42
    Data,
      {
        "id": 1,
        "label": ""
      }
    ```