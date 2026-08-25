{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project and checking your pipeline service account {id="creating-project-and-checking-pipeline-service-account_{{ context }}"}

**Procedure**

1.  Log in to your {{ product_title }} cluster:
    ```discrete
    $ oc login -u <login> -p <password> https://openshift.example.com:6443
    ```
1.  Create a project for the sample application. For this example workflow, create the `pipelines-tutorial` project:
    ```
    $ oc new-project pipelines-tutorial
    ```

    :::note

    If you create a project with a different name, be sure to update the resource URLs used in the example with your project name.
    
    :::

1.  View the `pipeline` service account:

    {{ pipelines_title }} Operator adds and configures a service account named `pipeline` that has sufficient permissions to build and push an image. This service account is used by the `PipelineRun` object.
    ```
    $ oc get serviceaccount pipeline
    ```