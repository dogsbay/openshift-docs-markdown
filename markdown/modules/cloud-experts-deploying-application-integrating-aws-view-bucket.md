{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the bucket contents through OSToy {id="cloud-experts-deploying-application-integrating-aws-view-bucket_{{ context }}"}

Use your app to view the contents of your S3 bucket. {._abstract}

**Procedure**

1.  Get the route for the newly deployed application by running the following command:
    ```terminal
    $ oc get route ostoy-route -n ${OSTOY_NAMESPACE} -o jsonpath='{.spec.host}{"\n"}'
    ```
1.  Open a new browser tab and enter the route obtained in the previous step.

    :::important

    Be sure to use `http://` and not `https://`.
    
    :::

1.  Click **ACK S3** in the left menu in OSToy.
1.  Because it is a new bucket, the bucket should be empty.

    ![cloud-expert-deploying-integrating-ack-views3contents](/_assets/images/cloud-expert-deploying-integrating-ack-views3contents.png)