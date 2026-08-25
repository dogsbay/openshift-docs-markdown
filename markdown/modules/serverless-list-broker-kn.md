{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing existing brokers by using the Knative CLI {id="serverless-list-broker-kn_{{ context }}"}

Using the Knative (`kn`) CLI to list brokers provides a streamlined and intuitive user interface. You can use the `kn broker list` command to list existing brokers in your cluster by using the Knative CLI.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

*   List all existing brokers:
    ```terminal
    $ kn broker list
    ```
    ```terminal title="Example output"
    NAME      URL                                                                     AGE   CONDITIONS   READY   REASON
    default   http://broker-ingress.knative-eventing.svc.cluster.local/test/default   45s   5 OK / 5     True
    ```