{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an Apache Kafka event source by using the web console {id="serverless-kafka-source-odc_{{ context }}"}

After the Knative broker implementation for Apache Kafka is installed on your cluster, you can create an Apache Kafka source by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a Kafka source.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` custom resource are installed on your cluster.
*   You have logged in to the web console.
*   You have access to a Red Hat AMQ Streams (Kafka) cluster that produces the Kafka messages you want to import.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  In the **Developer** perspective, navigate to the **+Add** page and select **Event Source**.
1.  In the **Event Sources** page, select **Kafka Source** in the **Type** section.
1.  Configure the **Kafka Source** settings:
    1.  Add a comma-separated list of **Bootstrap Servers**.
    1.  Add a comma-separated list of **Topics**.
    1.  Add a **Consumer Group**.
    1.  Select the **Service Account Name** for the service account that you created.
    1.  Select the **Sink** for the event source. A **Sink** can be either a **Resource**, such as a channel, broker, or service, or a **URI**.
    1.  Enter a **Name** for the Kafka event source.
1.  Click **Create**.

**Verification**

You can verify that the Kafka event source was created and is connected to the sink by viewing the **Topology** page.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the Kafka event source and sink.
    ![View the Kafka source and service in the Topology view](/images/verify-kafka-ODC.png)