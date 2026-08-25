{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving Multicloud Object Gateway credentials {id="migration-configuring-mcg_{{ context }}"}

Retrieve the Multicloud Object Gateway (MCG) bucket credentials to create a `Secret` custom resource (CR) for {{ oadp_first }}. {._abstract}


:::note

Although the MCG Operator is [deprecated](https://catalog.redhat.com/software/containers/ocs4/mcg-rhel8-operator/5ddbcefbdd19c71643b56ce9?architecture=amd64&image=64243f5dcd0eb61355af9abd), the MCG plugin is still available for {{ rh_storage }}. To download the plugin, browse to [Download {{ rh_storage_first }}](https://access.redhat.com/downloads/content/547/ver=4/rhel---9/4.15.4/x86_64/product-software) and download the appropriate MCG plugin for your operating system.

:::


**Prerequisites**

{%- if openshift_origin %}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{%- endif %}
*   You must deploy {{ rh_storage }} by using the appropriate [{{ rh_storage_first }} deployment guide](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.15).

**Procedure**

1.  Create an MCG bucket. For more information, see [Managing hybrid and multicloud resources](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html-single/managing_hybrid_and_multicloud_resources/index).
1.  Obtain the S3 endpoint, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and the bucket name by running the `oc describe` command on the bucket resource.
1.  Create a `credentials-velero` file:
    ```terminal
    $ cat << EOF > ./credentials-velero
    [default]
    aws_access_key_id=<AWS_ACCESS_KEY_ID>
    aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
    EOF
    ```

    You can use the `credentials-velero` file to create a `Secret` object when you install the Data Protection Application.