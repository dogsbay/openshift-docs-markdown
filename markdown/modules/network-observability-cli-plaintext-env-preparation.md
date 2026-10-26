{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare for plain text packet capture {id="network-observability-cli-plaintext-env-preparation_{{ context }}"}

Verify that your environment meets the requirements for capturing plain text from OpenSSL-encrypted network traffic. {._abstract}

**Prerequisites**

*   The {{ oc_first }} is installed.
*   The Network Observability CLI (`oc netobserv`) plugin is installed.
*   You have `cluster-admin` privileges or equivalent access to run privileged operations.

**Procedure**

1.  Verify the Network Observability CLI plugin is installed by running the following command:
    ```terminal
    $ oc netobserv version
    ```
    ```terminal title="Example output"
    NetObserv CLI version 1.12.0
    ```
1.  Identify the target application for packet capture by running the following command:
    ```terminal
    $ oc get pods -n <namespace>
    ```
    *   Replace `<namespace>` with the name of the namespace where your pods are deployed.
    *   Note the pod name and namespace of the application that uses OpenSSL for TLS encryption.
1.  Get the pod IP address by running the following command:
    ```terminal
    $ oc get pod <pod_name> -n <namespace> -o jsonpath='{.status.podIP}'
    ```
1.  Identify the port the application listens on by running the following command:
    ```terminal
    $ oc get pod <pod_name> -n <namespace> -o jsonpath='{.spec.containers[*].ports[*].containerPort}'
    ```

**Verification**

*   Verify that you have the information needed for packet capture by using the following examples:
    *   Pod IP address, such as `10.131.0.15`
    *   Port number, such as `8443`
    *   Pod uses OpenSSL for TLS encryption

You can now proceed to capture packets with OpenSSL plain text.