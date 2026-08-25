{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating custom resources from a file {id="crd-creating-custom-resources-from-file_{{ context }}"}

After you add a custom resource definition (CRD) to the cluster, you can create custom resources (CRs) from a file by using the CLI. {._abstract}

**Prerequisites**

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
*   CRD added to the cluster by a cluster administrator.
{% endif %}

**Procedure**

1.  Create a YAML file for the CR. In the following example definition, the `cronSpec` and `image` custom fields are set in a CR of `Kind: CronTab`. The `Kind` comes from the `spec.kind` field of the CRD object:
    ```yaml title="Example YAML file for a CR"
    apiVersion: "stable.example.com/v1"
    kind: CronTab
    metadata:
      name: my-new-cron-object
      finalizers:
      - finalizer.stable.example.com
    spec:
      cronSpec: "* * * * /5"
      image: my-awesome-cron-image
    ```

    where:

    `apiVersion`
    :   Specifies the group name and API version (name/version) from the CRD.

    `kind`
    :   Specifies the type in the CRD.

    `metadata.name`
    :   Specifies a name for the object.

    `metadata.finalizers`
    :   Specifies the finalizers for the object, if any. Finalizers allow controllers to implement conditions that must be completed before the object can be deleted.

    `spec`
    :   Specifies conditions specific to the type of object.

1.  After you create the file, create the object:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```