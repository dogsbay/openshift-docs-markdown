{%- set _mod_docs_content_type = "CONCEPT" %}
# Reading Operator logs {id="kmm-reading-operator-logs_{{ context }}"}

KMM and KMM-Hub Operator logs on {{ product_title }} provide diagnostic information for troubleshooting installation and runtime issues. You can read them with the `oc logs` command against the controller and webhook server deployments. {._abstract}


Example command for KMM controller
:   ```terminal
    $ oc logs -fn openshift-kmm deployments/kmm-operator-controller
    ```


Example command for KMM webhook server
:   ```terminal
    $ oc logs -fn openshift-kmm deployments/kmm-operator-webhook-server
    ```


Example command for KMM-Hub controller
:   ```terminal
    $ oc logs -fn openshift-kmm-hub deployments/kmm-operator-hub-controller
    ```


Example command for KMM-Hub webhook server
:   ```terminal
    $ oc logs -fn openshift-kmm deployments/kmm-operator-hub-webhook-server
    ```