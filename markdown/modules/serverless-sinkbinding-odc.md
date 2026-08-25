{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a sink binding by using the web console {id="serverless-sinkbinding-odc_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create a sink binding by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create an event source.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Create a Knative service to use as a sink:
    1.  In the **Developer** perspective, navigate to **+Add** -> **YAML**.
    1.  Copy the example YAML:
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
    1.  Click **Create**.
1.  Create a `CronJob` resource that is used as an event source and sends an event every minute.
    1.  In the **Developer** perspective, navigate to **+Add** -> **YAML**.
    1.  Copy the example YAML:
        ```yaml
        apiVersion: batch/v1
        kind: CronJob
        metadata:
          name: heartbeat-cron
        spec:
          # Run every minute
          schedule: "*/1 * * * *"
          jobTemplate:
            metadata:
              labels:
                app: heartbeat-cron
                bindings.knative.dev/include: true (1)
            spec:
              template:
                spec:
                  restartPolicy: Never
                  containers:
                    - name: single-heartbeat
                      image: quay.io/openshift-knative/heartbeats
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
        1.  Ensure that you include the `bindings.knative.dev/include: true` label. The default namespace selection behavior of {{ ServerlessProductName }} uses inclusion mode.
    1.  Click **Create**.
1.  Create a sink binding in the same namespace as the service created in the previous step, or any other sink that you want to send events to.
    1.  In the **Developer** perspective, navigate to **+Add** -> **Event Source**. The  **Event Sources** page is displayed.
    1.  Optional: If you have multiple providers for your event sources, select the required provider from the **Providers** list to filter the available event sources from the provider.
    1.  Select **Sink Binding** and then click **Create Event Source**. The **Create Event Source** page is displayed.

        :::note

        You can configure the **Sink Binding** settings by using the **Form view** or **YAML view** and can switch between the views. The data is persisted when switching between the views.
        
        :::

    1.  In the **apiVersion** field enter `batch/v1`.
    1.  In the **Kind** field enter `Job`.

        :::note

        The `CronJob` kind is not supported directly by {{ ServerlessProductName }} sink binding, so the **Kind** field must target the `Job` objects created by the cron job, rather than the cron job object itself.
        
        :::

    1.  Select a **Sink**. This can be either a **Resource** or a **URI**. In this example, the `event-display` service created in the previous step is used as the **Resource** sink.
    1.  In the **Match labels** section:
        1.  Enter `app` in the **Name** field.
        1.  Enter `heartbeat-cron` in the **Value** field.

            :::note

            The label selector is required when using cron jobs with sink binding, rather than the resource name. This is because jobs created by a cron job do not have a predictable name, and contain a randomly generated string in their name. For example, `hearthbeat-cron-1cc23f`.
            
            :::

    1.  Click **Create**.

**Verification**

You can verify that the sink binding, sink, and cron job have been created and are working correctly by viewing the **Topology** page and pod logs.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the sink binding, sink, and heartbeats cron job.
    ![View the sink binding and service in the Topology view](/_assets/images/verify-sinkbinding-odc.png)
1.  Observe that successful jobs are being registered by the cron job once the sink binding is added. This means that the sink binding is successfully reconfiguring the jobs created by the cron job.
1.  Browse the logs of the `event-display` service pod to see events produced by the heartbeats cron job.