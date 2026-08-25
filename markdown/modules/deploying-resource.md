{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a {{ FeatureName }} {id="{{ FeatureResourceName }}-deploying_{{ context }}"}

To deploy a {{ FeatureName }}, you create an instance of the `{{ FeatureResourceName }}`{minja} resource. {._abstract}

**Procedure**

1.  Create a YAML file for a `{{ FeatureResourceName }}`{minja} resource that contains the custom resource definition.
1.  Create the custom resource in the cluster by running the following command:
    ```terminal
    $ oc create -f <filename>.yaml
    ```

    where:

    `<filename>`
    :   Specifies the name of the YAML file you created.

{%- set FeatureName = "" -%}
{%- set FeatureResourceName = "" -%}