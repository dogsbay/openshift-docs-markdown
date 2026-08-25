{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the ACK controller {id="cloud-experts-deploying-application-integrating-aws-install-ack_{{ context }}"}

Install the ACK controller to create and delete buckets in the S3 service by using a Kubernetes custom resource for the bucket. Installing the controller will also create the required namespace and service account. {._abstract}

We will use an Operator to make it easy. The Operator installation will also create an `ack-system` namespace and a service account `ack-s3-controller` for you.

**Procedure**

1.  Log in to the cluster console.
1.  On the left menu, click **Ecosystem**, then **Software Catalog**.
1.  In the filter box, enter "S3" and select **AWS Controller for Kubernetes - Amazon S3**.

    ![cloud-experts-deploying-integrating-ack-operator](/_assets/images/cloud-experts-deploying-integrating-ack-operator.png)
1.  If a pop-up about community operators appears, click **Continue**.
1.  Click **Install**.
1.  Select **All namespaces on the cluster** under "Installation mode".
1.  Select **ack-system** under "Installed Namespace".
1.  Select **Manual** under "Update approval".

    :::important

    Make sure **Manual Mode** is selected so changes to the service account are not overwritten by an automatic operator update.
    
    :::

1.  Click **Install**.

    The settings should look like the below image.

    ![cloud-experts-deployment-integrating-ack-install](/_assets/images/cloud-experts-deployment-integrating-ack-install.png)
1.  Click **Approve**.
1.  The installation begins but will not complete until you have created an IAM role and policy for the ACK controller.