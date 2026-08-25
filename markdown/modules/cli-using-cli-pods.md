{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing pods {id="cli-using-cli-pods_{{ context }}"}

Use the `oc get pods` command to view the pods for the current project. {._abstract}


:::note

When you run `oc` inside a pod and do not specify a namespace, the namespace of the pod is used by default.

:::


**Procedure**

*   View pods for the current project by running the following command:
    ```terminal
    $ oc get pods -o wide
    ```
    ```terminal title="Example output"
    NAME                  READY   STATUS      RESTARTS   AGE     IP            NODE                           NOMINATED NODE
    cakephp-ex-1-build    0/1     Completed   0          5m45s   10.131.0.10   ip-10-0-141-74.ec2.internal    <none>
    cakephp-ex-1-deploy   0/1     Completed   0          3m44s   10.129.2.9    ip-10-0-147-65.ec2.internal    <none>
    cakephp-ex-1-ktz97    1/1     Running     0          3m33s   10.128.2.11   ip-10-0-168-105.ec2.internal   <none>
    ```