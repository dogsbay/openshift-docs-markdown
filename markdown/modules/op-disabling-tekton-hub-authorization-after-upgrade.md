{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling {{ tekton_hub }} authorization after upgrading the {{ pipelines_title }} Operator from 1.7 to 1.8 {id="disabling-tekton-hub-authorization-after-upgrade_{{ context }}"}

When you install {{ tekton_hub }} with {{ pipelines_title }} Operator 1.8, the login authorization and ratings for the {{ tekton_hub }} artifacts are disabled for the default installation. However, when you upgrade the Operator from 1.7 to 1.8, the instance of the {{ tekton_hub }} on your cluster does not automatically disable the login authorization and ratings. {._abstract}

To disable login authorization and ratings for {{ tekton_hub }} after upgrading the Operator from 1.7 to 1.8, perform the steps in the following procedure.

**Prerequisites**

*   Ensure that the {{ pipelines_title }} Operator is installed in the default `openshift-pipelines` namespace on the cluster.

**Procedure**

1.  Delete the existing {{ tekton_hub }} API secret that you created while manually installing {{ tekton_hub }} for Operator 1.7.
    ```terminal
    $ oc delete secret tekton-hub-api -n <targetNamespace> (1)
    ```
    1.  The common namespace for the {{ tekton_hub }} API secret and the {{ tekton_hub }} CR. By default, the target namespace is `openshift-pipelines`.
1.  Delete the `TektonInstallerSet` object for the {{ tekton_hub }} API.
    ```terminal
    $ oc get tektoninstallerset -o name | grep tekton-hub-api | xargs oc delete
    ```

    :::note

    After deletion, the Operator automatically creates a new {{ tekton_hub }} API installer set.
    
    :::


    Wait and check the status of the {{ tekton_hub }}. Proceed to the next steps when the `READY` column displays `True`.
    ```terminal
    $ oc get tektonhub hub
    ```
    ```terminal title="Sample output"
    NAME   VERSION        READY   REASON   APIURL                                                                                                  UIURL
    hub    1.8.0          True             https://tekton-hub-api-openshift-pipelines.apps.example.com   https://tekton-hub-ui-openshift-pipelines.apps.example.com

    ```
1.  Delete the `ConfigMap` object for the {{ tekton_hub }} UI.
    ```terminal
    $ oc delete configmap tekton-hub-ui -n <targetNamespace> (1)
    ```
    1.  The common namespace for the {{ tekton_hub }} UI and the {{ tekton_hub }} CR. By default, the target namespace is `openshift-pipelines`.
1.  Delete the `TektonInstallerSet` object for the {{ tekton_hub }} UI.
    ```terminal
    $ oc get tektoninstallerset -o name | grep tekton-hub-ui | xargs oc delete
    ```

    :::note

    After deletion, the Operator automatically creates a new {{ tekton_hub }} UI installer set.
    
    :::


    Wait and check the status of the {{ tekton_hub }}. Proceed to the next steps when the `READY` column displays `True`.
    ```terminal
    $ oc get tektonhub hub
    ```
    ```terminal title="Sample output"
    NAME   VERSION        READY   REASON   APIURL                                                                                                  UIURL
    hub    1.8.0          True             https://tekton-hub-api-openshift-pipelines.apps.example.com   https://tekton-hub-ui-openshift-pipelines.apps.example.com

    ```