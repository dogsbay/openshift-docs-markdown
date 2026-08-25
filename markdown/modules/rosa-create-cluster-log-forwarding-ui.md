{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a {{ product_title }} cluster with log forwarding {id="rosa-create-cluster-log-forwarding-ui_{{ context }}"}

You can set up control plane log forwarding when you create your {{ product_title }} cluster in the {{ hybrid_console }}. As you create your {{ product_title }} cluster, you have the option to forward your control plane logs to an Amazon `S3` bucket, `CloudWatch` log group, or both.  {._abstract}

**Procedure**

1.  In the {{ hybrid_console }}, go to **Clusters** → **Cluster List**, then click the **Create cluster** button.
1.  On the **Managed services** offerings page, go to the offering, **Red Hat OpenShift Service on AWS (ROSA)**, and click the **Create cluster** button, then select **With web interface**.
1.  For **Create a ROSA Cluster** → **Control plane**, select your **ROSA hosted architecture**.
1.  For **Accounts and roles**, select your **Associated AWS infrastructure account** and **AWS billing account**.
1.  For the **Cluster settings** → **Cluster details**, complete the following text boxes:
    *   **Region**
    *   **Cluster name**
    *   **Version**
    *   **Channel**


        In about 20 minutes after you complete this information, your cluster is ready to install and you can continue to configure it.
1.  For **Machine pool** → **Networking** → **Configuration** → **CIDR ranges** → **Cluster roles and policies**, complete all of the required text boxes with the specifications that you want for your cluster.
1.  On the **Review and create** → **Review your ROSA cluster** page, verify that the cluster details are correct.
1.  Optional: If you want to forward your control plane logs to an Amazon `S3` bucket or `CloudWatch` log group, complete the following instructions:
    1.  On the **Control plane log forwarding (optional)** page, click **Enable Amazon S3**, or **Enable CloudWatch**, or both.
    1.  If you enable Amazon `S3`, complete the following fields:
        *   **Bucket name**: Give it a unique identifier across all of {{ AWS }}.
        *   **Bucket prefix**: Give it an optional path to organize your data.
        *   **Select groups and applications** (optional): When you select a group, the log forwarder collects all of the applications and related services from that group.
    1.  If you enable `CloudWatch`, complete the following fields:
        *   **Prerequisite**: Verify that you have created an `IAM` role and policy, then click the box stating that you have.
        *   **Log group name**: Give it a unique identifier.
        *   **Role ARN**: Give the `IAM` role ARN. For example, `arn:aws:iam::<12-digit-account-id>:role/<role-name>`.
        *   **Select groups and applications**: When you select a group, the log forwarder collects all the applications and related services from that group.
    1.  On the **Review and create** → **Review your ROSA cluster** page, verify that the cluster details are correct.
    1.  Click the **Create cluster** button.
1.  If you want to finish completing your cluster with no designated log forwarding destination, click the **Create cluster** button.

**Verification**

1.  In the {{ hybrid_console }}, go to **Clusters** → **Cluster List**.  You can see the name and status of your cluster.
1.  Verify that the status of your cluster is “Ready” and click the name of your cluster.
1.  In the **Overview** tab, verify that the details of your cluster are what you specified.
1.  Go to the **Control plane log forwarding** section.
    1.  If you enabled `Amazon S3`, verify that you see **Amazon S3: Enabled**. If you did not set it up, it shows, **Amazon S3: Disabled**.
    1.  If you enabled `CloudWatch`, verify that you see **CloudWatch: Enabled**. If you did not set it up, it shows, **CloudWatch: Disabled**.
1.  Click **View details**, which takes you to the **Settings** tab. Confirm all the specific details for your control plane log forwarding are correct.