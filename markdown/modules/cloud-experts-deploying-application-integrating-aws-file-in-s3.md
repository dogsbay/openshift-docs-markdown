{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating files in your S3 bucket {id="cloud-experts-deploying-application-integrating-aws-file-in-s3_{{ context }}"}

Use OStoy to create a file and upload it to the S3 bucket. While S3 can accept any kind of file, for this tutorial use text files so that the contents can easily be rendered in the browser. {._abstract}

**Procedure**

1.  Click **ACK S3** in the left menu in OSToy.
1.  Scroll down to **Upload a text file to S3**.
1.  Enter a file name for your file.
1.  Enter content for your file.
1.  Click **Create file**.

    ![cloud-expert-deploying-integrating-ack-creates3obj](/images/cloud-expert-deploying-integrating-ack-creates3obj.png)
1.  Scroll to the top section for existing files and confirm that the file you just created is there.
1.  Click the file name to view the file.

    ![cloud-experts-deploying-integrating-ack-viewobj](/images/cloud-experts-deploying-integrating-ack-viewobj.png)
1.  Confirm with the AWS CLI by running the following command to list the contents of your bucket:
    ```terminal
    $ aws s3 ls s3://${OSTOY_NAMESPACE}-bucket
    ```

    **Example output**
    ```terminal
    $ aws s3 ls s3://ostoy-bucket
    2023-05-04 22:20:51         51 OSToy.txt
    ```