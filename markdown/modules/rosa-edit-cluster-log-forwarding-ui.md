{%- set _mod_docs_content_type = "PROCEDURE" %}
# Edit a {{ product_title }} cluster with log forwarding {id="rosa-edit-cluster-log-forwarding-ui_{{ context }}"}

You can verify the status of log forwarding for a cluster and edit the log forwarding configurations. {._abstract}

**Procedure**

1.  In the {{ hybrid_console }}, go to **Clusters** -> **Cluster List**, then click the name of your cluster.
1.  Go to the **Settings** tab then the **Control plane log forwarding** section.
1.  To add to your log forwarding, click the **Add configuration** dropdown button.
    1.  You can add a `CloudWatch` or `Amazon S3` configuration.
1.  To make changes to your existing log forwarding, click the three dots within your `CloudWatch` or `Amazon S3` log forwarding configuration, then select **Edit configuration** or **Delete configuration**.
1.  When you click **Edit configuration** for `Amazon S3` log forwarding, you see your configuration and can make changes to the following:
    *   **Bucket Name**
    *   **Bucket Prefix**
    *   **Select groups and applications**
1.  When you click **Edit configuration** for `CloudWatch` log forwarding, you see your configuration and can make changes to the following:
    *   **Log group name**
    *   **Role ARN**
    *   **Select groups and applications**
1.  Make the changes to your configuration, then click **Save**.

**Verification**

1.  In the **Settings** tab -> **Control plane log forwarding** section, verify that you see the changes you made to your configuration. The changes you made instantly go through and appear in this section.