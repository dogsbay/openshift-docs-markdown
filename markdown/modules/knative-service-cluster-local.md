{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting cluster availability to cluster local {id="knative-service-cluster-local_{{ context }}"}

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have created a Knative service.

**Procedure**

*   Set the visibility for your service by adding the `networking.knative.dev/visibility=cluster-local` label:
    ```terminal
    $ oc label ksvc <service_name> networking.knative.dev/visibility=cluster-local
    ```

**Verification**

*   Check that the URL for your service is now in the format `http://<service_name>.<namespace>.svc.cluster.local`, by entering the following command and reviewing the output:
    ```termina
    $ oc get ksvc
    ```
    ```terminal title="Example output"
    NAME            URL                                                                         LATESTCREATED     LATESTREADY       READY   REASON
    hello           http://hello.default.svc.cluster.local                                      hello-tx2g7       hello-tx2g7       True
    ```