{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the External DNS Operator {id="nw-external-dns-operator_{{ context }}"}

The External DNS Operator implements the External DNS API from the `olm.openshift.io` API group. The External DNS Operator updates services, routes, and external DNS providers. {._abstract}

**Prerequisites**

*   You have installed the `yq` CLI tool.

**Procedure**

1.  Check the name of an install plan, such as `install-zcvlr`, by running the following command:
    ```terminal
    $ oc -n external-dns-operator get sub external-dns-operator -o yaml | yq '.status.installplan.name'
    ```
1.  Check if the status of an install plan is `Complete` by running the following command:
    ```terminal
    $ oc -n external-dns-operator get ip <install_plan_name> -o yaml | yq '.status.phase'
    ```
1.  View the status of the `external-dns-operator` deployment by running the following command:
    ```terminal
    $ oc get -n external-dns-operator deployment/external-dns-operator
    ```
    ```terminal title="Example output"
    NAME                    READY     UP-TO-DATE   AVAILABLE   AGE
    external-dns-operator   1/1       1            1           23h
    ```