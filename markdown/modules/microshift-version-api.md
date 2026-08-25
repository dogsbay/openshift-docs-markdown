{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check the {{ microshift_short }} version using the API {id="microshift-version-api_{{ context }}"}

To begin troubleshooting, you must know your {{ microshift_short }} version. One way to get this information is by using the API. {._abstract}

**Procedure**

*   To get the version number using the {{ oc_first }}, view the `kube-public/microshift-version` config map by running the following command:
    ```terminal
    $ oc get configmap -n kube-public microshift-version -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    data:
      major: "4"
      minor: "20"
      version: 4.20.0-0.microshift-fa441af87431
    kind: ConfigMap
    metadata:
      creationTimestamp: "2025-11-03T21:06:11Z"
      name: microshift-version
      namespace: kube-public
    ```