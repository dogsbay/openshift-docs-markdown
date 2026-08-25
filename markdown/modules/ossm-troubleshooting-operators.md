{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting service mesh Operators {id="ossm-troubleshooting-operators_{{ context }}"}

If you experience Operator issues:

*   Verify your Operator subscription status.
*   Verify that you did not install a community version of the Operator, instead of the supported Red Hat version.
*   Verify that you have the `cluster-admin` role to install {{ SMProductName }}.
*   Check for any errors in the Operator pod logs if the issue is related to installation of Operators.


:::note

You can install Operators only through the OpenShift console, the software catalog is not accessible from the command line.

:::


## Viewing Operator pod logs {id="_viewing_operator_pod_logs"}

You can view Operator logs by using the `oc logs` command. Red Hat may request logs to help resolve support cases.

**Procedure**

*   To view Operator pod logs, enter the command:
    ```terminal
    $ oc logs -n openshift-operators <podName>
    ```

    For example,
    ```terminal
    $ oc logs -n openshift-operators istio-operator-bb49787db-zgr87
    ```