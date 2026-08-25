{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up access for the application {id="cloud-experts-deploying-application-integrating-aws-app-access_{{ context }}"}

You can create an AWS IAM role and service account so that OSToy can read and write objects to an S3 bucket. {._abstract}

**Procedure**

1.  Create a new unique project for OSToy by running the following command:
    ```terminal
    $ oc new-project ostoy-$(uuidgen | cut -d - -f 2 | tr '[:upper:]' '[:lower:]')
    ```
1.  Save the name of the namespace and project to an environment variable by running the following command:
    ```terminal
    $ export OSTOY_NAMESPACE=$(oc config view --minify -o 'jsonpath={..namespace}')
    ```