{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing degraded cluster Operators during an update {id="core-cluster-upgrade-ts-operator-degraded_{{ context }}"}

If a cluster Operator becomes degraded during an update, identify the affected Operator and investigate the root cause. {._abstract}

Common Operators that degrade during updates include `authentication`, `console`, `monitoring`, and `network`.

**Prerequisites**

*   You have a cluster update in progress with one or more degraded Operators.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Identify degraded Operators by running the following command:
    ```terminal
    $ oc get co | grep -v "True.*False.*False"
    ```

    The following example shows the output:
    ```terminal
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    authentication                             4.20.0    True        False         True       5m      APIServerDeploymentDegraded: ...
    ```
1.  Check Operator details by running the following command:
    ```terminal
    $ oc describe co authentication
    ```

    Look for error messages in the `status.conditions` section of the output.
1.  Check Operator pod logs by running the following command:
    ```terminal
    $ oc logs -n openshift-authentication deployment/oauth-openshift
    ```