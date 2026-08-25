{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uploading a custom {{ op_system }} AMI in {{ aws_first }} {id="installation-aws-upload-custom-rhcos-ami_{{ context }}"}

If you are deploying to a custom {{ aws_short }} region, you must
upload a custom {{ op_system_first }} Amazon Machine Image (AMI) that belongs to
that region. {._abstract}

**Prerequisites**

*   You configured an {{ aws_short }} account.
*   You created an Amazon S3 bucket with the required IAM
[service role](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role).
*   You uploaded your {{ op_system }} VMDK file to Amazon S3.
{%- if openshift_enterprise or openshift_webscale %}
The {{ op_system }} VMDK file must be the highest version that is less than or equal to the {{ product_title }} version you are installing.
{%- endif %}
*   You downloaded the {{ aws_short }} CLI and installed it on your computer. See
[Install the {{ aws_short }} CLI Using the Bundled Installer](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html).

**Procedure**

1.  Export your {{ aws_short }} profile as an environment variable by running the following command:
    ```terminal
    $ export AWS_PROFILE=<aws_profile>
    ```

    Replace `<aws_profile>` with the {{ aws_short }} profile name that holds your {{ aws_short }} credentials, such as `govcloud` or `beijingadmin`.
1.  Export the region to associate with your custom AMI as an environment
variable by running the following command:
    ```terminal
    $ export AWS_DEFAULT_REGION=<aws_region>
    ```

    Replace `<aws_region>` with the {{ aws_short }} region, such as `us-gov-east-1` or `cn-north-1`.
1.  Export the version of {{ op_system }} you uploaded to Amazon S3 as an environment variable by running the following command:
    ```terminal
    $ export RHCOS_VERSION=<version>
    ```

    Replace `<version>` with the {{ op_system }} VMDK version, such as `{{ product_version }}.0`.
1.  Export the Amazon S3 bucket name as an environment variable by running the following command:
    ```terminal
    $ export VMIMPORT_BUCKET_NAME=<s3_bucket_name>
    ```
1.  Create the `containers.json` file and define your {{ op_system }} VMDK file by running the following command:
    ```terminal
    $ cat <<EOF > containers.json
    {
       "Description": "rhcos-${RHCOS_VERSION}-x86_64-aws.x86_64",
       "Format": "vmdk",
       "UserBucket": {
          "S3Bucket": "${VMIMPORT_BUCKET_NAME}",
          "S3Key": "rhcos-${RHCOS_VERSION}-x86_64-aws.x86_64.vmdk"
       }
    }
    EOF
    ```
1.  Import the {{ op_system }} disk as an Amazon EBS snapshot by running the following command:
    ```terminal
    $ aws ec2 import-snapshot --region ${AWS_DEFAULT_REGION} \
         --description "<description>" \
         --disk-container "file://<file_path>/containers.json"
    ```

    where:

    `--description`
    :   Specifies the description of your {{ op_system }} disk being imported, like `rhcos-${{ RHCOS_VERSION }}-x86_64-aws.x86_64`.

    `--disk-container`
    :   Specifies the file path to the JSON file describing your {{ op_system }} disk. The JSON file should contain your Amazon S3 bucket name and key.

1.  Check the status of the image import by running the following command::
    ```terminal
    $ watch -n 5 aws ec2 describe-import-snapshot-tasks --region ${AWS_DEFAULT_REGION}
    ```
    ```terminal title="Example output"
    {
        "ImportSnapshotTasks": [
            {
                "Description": "rhcos-4.7.0-x86_64-aws.x86_64",
                "ImportTaskId": "import-snap-fh6i8uil",
                "SnapshotTaskDetail": {
                    "Description": "rhcos-4.7.0-x86_64-aws.x86_64",
                    "DiskImageSize": 819056640.0,
                    "Format": "VMDK",
                    "SnapshotId": "snap-06331325870076318",
                    "Status": "completed",
                    "UserBucket": {
                        "S3Bucket": "external-images",
                        "S3Key": "rhcos-4.7.0-x86_64-aws.x86_64.vmdk"
                    }
                }
            }
        ]
    }
    ```

    Copy the `SnapshotId` to register the image.
1.  Create a custom {{ op_system }} AMI from the {{ op_system }} snapshot by running the following command:
    ```terminal
    $ aws ec2 register-image \
       --region ${AWS_DEFAULT_REGION} \
       --architecture x86_64 \
       --description "rhcos-${RHCOS_VERSION}-x86_64-aws.x86_64" \
       --ena-support \
       --name "rhcos-${RHCOS_VERSION}-x86_64-aws.x86_64" \
       --virtualization-type hvm \
       --root-device-name '/dev/xvda' \
       --block-device-mappings 'DeviceName=/dev/xvda,Ebs={DeleteOnTermination=true,SnapshotId=<snapshot_ID>}'
    ```

    where:

    `--architecture`
    :   Specifies the {{ op_system }} VMDK architecture type, such as `x86_64`,
{%- if not openshift_origin %}
        `aarch64`,
{%- endif %}
        `s390x`, or `ppc64le`.

    `--description`
    :   Specifies the `Description` from the imported snapshot.

    `--name`
    :   Specifies the name of the {{ op_system }} AMI.

    `--block-device-mappings`
    :   Specifies the `SnapshotID` from the imported snapshot.