{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a default implementation channel by using YAML {id="serverless-create-default-channel-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe channels declaratively and in a reproducible manner. To create a serverless channel by using YAML, you must create a YAML file that defines a `Channel` object, then apply it by using the `oc apply` command.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Create a `Channel` object as a YAML file:
    ```yaml
    apiVersion: messaging.knative.dev/v1
    kind: Channel
    metadata:
      name: example-channel
      namespace: default
    ```
1.  Apply the YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```