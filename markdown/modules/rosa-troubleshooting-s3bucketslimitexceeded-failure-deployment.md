{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an S3BucketsLimitExceeded error {id="rosa-troubleshooting-s3bucketslimitexceeded_{{ context }}"}

If a cluster creation action fails, you might receive the following error messages. {._abstract}

The following example shows the install logs output:

```terminal
level=error msg="Error: Error creating S3 bucket: TooManyBuckets: You have attempted to create more buckets than allowed"
```

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3014
Provisioning Error Message: S3 buckets limit exceeded. Clean unused S3 buckets or increase quota and try again.
```

This type of error indicates that you have reached the quota for the number of S3 buckets.

**Procedure**

*   To fix this issue, try one of the following methods:
    *   Request a quota increase from AWS:
        1.  Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
        1.  Click your user name and select ***Service Quotas***.
        1.  Under ***Manage quotas***, select an AWS service to view available quotas.
        1.  If the quota is adjustable, you can choose the button or the name, and then choose ***Request quota increase***.
    *   Clean unused S3 buckets. You can only delete buckets that do not have any objects in them. Make sure the bucket is empty:
        1.  Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
        1.  Open the ***Amazon S3*** console.
        1.  In the ***Buckets*** list, select the option next to the name of the bucket that you want to delete, and then choose ***Delete*** at the top of the page.
        1.  On the ***Delete bucket*** page, confirm that you want to delete the bucket by entering the bucket name into the text field, and then choose ***Delete bucket***.

            :::note

            If you empty a bucket, this action cannot be undone.
            
            :::