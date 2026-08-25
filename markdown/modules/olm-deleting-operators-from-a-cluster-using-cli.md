{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting Operators from a cluster using the CLI {id="olm-deleting-operator-from-a-cluster-using-cli_{{ context }}"}

To remove an installed Operator from a namespace, cluster administrators can delete its subscription and cluster service version (CSV) by using the CLI. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster using an account with
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
`cluster-admin` permissions.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
`dedicated-admin` permissions.
{%- endif %}
*   The OpenShift CLI (`oc`) is installed on your workstation.

**Procedure**

1.  Ensure the latest version of the subscribed operator (for example, `serverless-operator`) is identified in the `currentCSV` field.
    ```terminal
    $ oc get subscription.operators.coreos.com serverless-operator -n openshift-serverless -o yaml | grep currentCSV
    ```
    ```terminal title="Example output"
      currentCSV: serverless-operator.v1.28.0
    ```
1.  Delete the subscription (for example, `serverless-operator`):
    ```terminal
    $ oc delete subscription.operators.coreos.com serverless-operator -n openshift-serverless
    ```
    ```terminal title="Example output"
    subscription.operators.coreos.com "serverless-operator" deleted
    ```
1.  Delete the CSV for the Operator in the target namespace using the `currentCSV` value from the previous step:
    ```terminal
    $ oc delete clusterserviceversion serverless-operator.v1.28.0 -n openshift-serverless
    ```
    ```terminal title="Example output"
    clusterserviceversion.operators.coreos.com "serverless-operator.v1.28.0" deleted
    ```