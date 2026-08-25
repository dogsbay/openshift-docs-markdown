{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the Configuration Resource {id="configuration-resource-configure_{{ context }}"}

To configure the Configuration Resource, you customize the Custom Resource Definition (CRD) that controls its Operator and deploy it to your cluster.

**Prerequisites**

*   Deploy an {{ product_title }} cluster.
*   Review the CRD for the resource and provision any resources that your changes require.
*   Access to the right user to do this thing.

**Procedure**

1.  From some specific computer, modify the CRD for the resource to describe your intended configuration. Save the file in `whatever-the-location-is`.
1.  Run the following command to update the CRD in your cluster:
    ```
    $ oc something or other --<file> <1> --<cluster><2>
    ```
    1.  The CRD file that contains customizations for your resource.
    1.  However you specify the cluster you’re changing.
1.  Confirm that the resource reflects your changes. Run the following command and review the output:
    ```
    $ oc something or other

    Output
    Output
    Output
    ```

    If the output includes &lt;thing>, the resource redeployed on your cluster.