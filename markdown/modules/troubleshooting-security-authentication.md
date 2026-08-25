{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authentication {id="troubleshooting-security-authentication_{{ context }}"}

Determine which identity providers are in your cluster.
For more information about supported identity providers, see "Supported identity providers" in _Authentication and authorization_. {._abstract}

After you know which providers are configured, you can inspect the `openshift-authentication` namespace to determine if there are potential issues.

**Procedure**

1.  Check the events in the `openshift-authentication` namespace by running the following command:
    ```terminal
    $ oc get events -n openshift-authentication --sort-by='.metadata.creationTimestamp'
    ```
1.  Check the pods in the `openshift-authentication` namespace by running the following command:
    ```terminal
    $ oc get pod -n openshift-authentication 
    ```
1.  Optional: If you need more information, check the logs of one of the running pods by running the following command:
    ```terminal
    $ oc logs -n openshift-authentication <pod_name>
    ```