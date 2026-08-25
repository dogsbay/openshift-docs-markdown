{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the COS instance {id="configuring-ibm-cos_{{ context }}"}

You create an {{ ibm_cloud_object_storage }} instance to store the {{ oadp_short }} backup data. After you create the COS instance, configure the `HMAC` service credentials. {._abstract}

**Prerequisites**

*   You have an {{ ibm_cloud_title }} Platform account.
*   You installed the [{{ ibm_cloud_title }} CLI](https://cloud.ibm.com/docs/cli?topic=cli-getting-started).
*   You are logged in to {{ ibm_cloud_title }}.

**Procedure**

1.  Install the {{ ibm_cloud_object_storage }} plugin by running the following command:
    ```terminal
    $ ibmcloud plugin install cos -f
    ```
1.  Set a bucket name by running the following command:
    ```terminal
    $ BUCKET=<bucket_name>
    ```
1.  Set a bucket region by running the following command:
    ```terminal
    $ REGION=<bucket_region>
    ```

    where:

    `<bucket_region>`
    :   Specifies the bucket region. For example, `eu-gb`.

1.  Create a resource group by running the following command:
    ```terminal
    $ ibmcloud resource group-create <resource_group_name>
    ```
1.  Set the target resource group by running the following command:
    ```terminal
    $ ibmcloud target -g <resource_group_name>
    ```
1.  Verify that the target resource group is correctly set by running the following command: 
    ```terminal
    $ ibmcloud target
    ```

```yaml title="Example output"
API endpoint:     https://cloud.ibm.com
Region:           
User:             test-user
Account:          Test Account (fb6......e95) <-> 2...122
Resource group:   Default
```

In the example output, the resource group is set to `Default`.

1.  Set a resource group name by running the following command:
    ```terminal
    $ RESOURCE_GROUP=<resource_group>
    ```

    where:

    `<resource_group>`
    :   Specifies the resource group name. For example, `"default"`.

1.  Create an {{ ibm_cloud_title }} `service-instance` resource  by running the following command:
    ```terminal
    $ ibmcloud resource service-instance-create \
    <service_instance_name> \
    <service_name> \
    <service_plan> \
    <region_name>
    ```

    where:

    `<service_instance_name>`
    :   Specifies a name for the `service-instance` resource.

    `<service_name>`
    :   Specifies the service name. Alternatively, you can specify a service ID.

    `<service_plan>`
    :   Specifies the service plan for your {{ ibm_cloud_title }} account.

    `<region_name>`
    :   Specifies the region name. 

    Refer to the following example command:

    ```terminal
    $ ibmcloud resource service-instance-create test-service-instance cloud-object-storage \
    standard \
    global \
    -d premium-global-deployment
    ```
    where:


    `cloud-object-storage`
    :   Specifies the service name.

    `-d premium-global-deployment`
    :   Specifies the deployment name.

1.  Extract the service instance ID by running the following command:
    ```terminal
    $ SERVICE_INSTANCE_ID=$(ibmcloud resource service-instance test-service-instance --output json | jq -r '.[0].id')
    ```
1.  Create a COS bucket by running the following command: 
    ```terminal
    $ ibmcloud cos bucket-create \
    --bucket $BUCKET \
    --ibm-service-instance-id $SERVICE_INSTANCE_ID \
    --region $REGION 
    ```

    Variables such as `$BUCKET`, `$SERVICE_INSTANCE_ID`, and `$REGION` are replaced by the values you set previously.
1.  Create `HMAC` credentials by running the following command.
    ```terminal
    $ ibmcloud resource service-key-create test-key Writer --instance-name test-service-instance --parameters {\"HMAC\":true}
    ```
1.  Extract the access key ID and the secret access key from the `HMAC` credentials and save them in the `credentials-velero` file. You can use the `credentials-velero` file to create a `secret` for the backup storage location. Run the following command:
    ```terminal
    $ cat > credentials-velero << __EOF__
    [default]
    aws_access_key_id=$(ibmcloud resource service-key test-key -o json  | jq -r '.[0].credentials.cos_hmac_keys.access_key_id')
    aws_secret_access_key=$(ibmcloud resource service-key test-key -o json  | jq -r '.[0].credentials.cos_hmac_keys.secret_access_key')
    __EOF__
    ```